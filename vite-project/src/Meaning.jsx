import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning({ meaning }) {
  if (!meaning) return null;

  return (
    <div className="MeaningSection">
      <h5>{meaning.partOfSpeech}</h5>
      <p>
        <strong>Definition:</strong> {meaning.definition}
      </p>

      {meaning.example && (
        <p>
          <strong>Example:</strong> <em>{meaning.example}</em>
        </p>
      )}

      <Synonyms synonyms={meaning.synonyms} />
    </div>
  );
}
