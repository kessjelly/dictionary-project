import "./App.css";

export default function Synonyms({ synonyms }) {
    if (synonyms && synonyms.length > 0) {
    return (
      <div>
        {" "}
        <h5>Synonyms:</h5>
        <ul className="Synonyms">
          {synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
} else {
    return null;
  };
}
