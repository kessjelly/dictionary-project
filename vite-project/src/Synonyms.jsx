import "./App.css";

export default function Synonyms({ synonyms }) {
    if (synonyms && synonyms.length > 0) {
    return (
      <ul className="Synonyms">
        <h5>Synonyms:</h5>
        {synonyms.map(function(synonym, index) {
            return (
                <li key={index}>
                    {synonym}
                    </li>
                    )
        })}
      </ul>
    );
} else {
    return null;
  };
}
