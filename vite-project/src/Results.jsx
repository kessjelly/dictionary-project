import Meaning from "./Meaning";

export default function Results({ results }) {
  if (results && results.word) {
    return (
      <section>
        <div className="Results">
          <h2>{results.word}</h2>
          <h4>{results.phonetic}</h4>
          {results.meanings.map((meaning, index) => {
            if (index === 0) {
              return <Meaning key={index} meaning={meaning} />;
            }
            return null;
          })}
        </div>
      </section>
    );
  }
}
