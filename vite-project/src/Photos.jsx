import "./Photos.css";

export default function Photos({ photos }) {
  //console.log(photos);
  if (!photos) return null;

  return (
    <div className="Photos row mt-5 gy-3">
      {photos.map((photo, index) => (
        <div className="col-4" key={index}>
          <img
            src={photo.src.landscape}
            alt={photo.alt}
            className="img-fluid"
          />
        </div>
      ))}
    </div>
  );
}
