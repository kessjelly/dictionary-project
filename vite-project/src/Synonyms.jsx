import "./Synonyms.css";

export default function Synonyms({ synonyms }) {
    if (synonyms && synonyms.length > 0) {
    return (
      <div>
        {" "}
        <h5 className="Synonyms-title">Synonyms</h5>
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
