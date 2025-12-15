interface VideoContentProps {
  content: {
    introduction: string;
    objectives: string[];
    methodology: string;
    results: string;
    conclusions: string;
  };
}

export function VideoContent({ content }: VideoContentProps) {
  return (
    <div className="article-content space-y-8">
      <section>
        <h2>Introducción</h2>
        <p>{content.introduction}</p>
      </section>

      <section>
        <h2>Objetivos</h2>
        <ul>
          {content.objectives.map((objective, index) => (
            <li key={index}>{objective}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Metodología</h2>
        <p>{content.methodology}</p>
      </section>

      <section>
        <h2>Resultados</h2>
        <p>{content.results}</p>
      </section>

      <section>
        <h2>Conclusiones</h2>
        <p>{content.conclusions}</p>
      </section>
    </div>
  );
}
