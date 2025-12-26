import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type { SendMailOptions } from "nodemailer";


export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const getValue = (key: string) => formData.get(key)?.toString() ?? "";

    const fullName = getValue("fullName");
    const email = getValue("email");
    const phone = getValue("phone");
    const location = getValue("location");
    const position = getValue("position");
    const education = getValue("education");
    const experience = getValue("experience");
    const skills = getValue("skills");
    const portfolio = getValue("portfolio");
    const motivation = getValue("motivation");
    const difference = getValue("difference");

    /* =====================
       Handle CV attachment
       ===================== */

    const attachments: NonNullable<SendMailOptions["attachments"]> = [];

    const cvFile = formData.get("cv");
    if (cvFile instanceof File) {
      const buffer = Buffer.from(await cvFile.arrayBuffer());
      attachments.push({
        filename: cvFile.name,
        content: buffer,
        contentType: cvFile.type,
      });
    }

    /* =====================
       Nodemailer transporter
       ===================== */
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST!,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    });

    /* =====================
       Email template
       ===================== */
    const html = `
      <h2>Nueva postulación</h2>
      <p><strong>Nombre:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Teléfono:</strong> ${phone}</p>
      <p><strong>Ubicación:</strong> ${location}</p>
      <p><strong>Puesto:</strong> ${position}</p>
      <p><strong>Educación:</strong> ${education}</p>
      <p><strong>Experiencia:</strong> ${experience}</p>
      <p><strong>Habilidades:</strong> ${skills}</p>
      <p><strong>Portafolio / LinkedIn:</strong> ${portfolio}</p>
      <h3>Motivación</h3>
      <p>${motivation}</p>
      <h3>¿Qué te diferencia?</h3>
      <p>${difference}</p>
    `;

    await transporter.sendMail({
      from: process.env.FROM_EMAIL ?? process.env.SMTP_USER!,
      to: process.env.TO_EMAIL!,
      replyTo: email,
      subject: `Nueva postulación - ${fullName} (${position})`,
      text: `Nueva postulación de ${fullName} <${email}>`,
      html,
      attachments,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error sending application:", error);

    return NextResponse.json(
      { error: "Error enviando la postulación" },
      { status: 500 }
    );
  }
}
