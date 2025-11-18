export default function Meaning({ meaning }) {
  if (!meaning) return null;

  return (
    <div className="Meaning">
      <h5>{meaning.partOfSpeech}</h5>
      <p>{meaning.definition}</p>
      {meaning.example && (
        <p>
          <em>{meaning.example}</em>
        </p>
      )}
    </div>
  );
}
