import Meaning from "./Meaning";

export default function Results({ results }) {
  if (results && results.word) {
    return (
      <>
        <div className="ResultsSection">
          <h2>{results.word}</h2>
          <h4>{results.phonetic}</h4>
        </div>

        {results.meanings.map((meaning, index) =>
          index === 0 ? (
            <div key={index} className="MeaningContainer">
              <Meaning meaning={meaning} />
            </div>
          ) : null
        )}
      </>
    );
  }

  return null;
}
