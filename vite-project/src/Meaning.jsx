import Synonyms from "./Synonyms";

export default function Meaning({ meaning }) {
  if (!meaning) return null;

  return (
    <section>
      <div className="Meaning">
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
    </section>
  );
}
