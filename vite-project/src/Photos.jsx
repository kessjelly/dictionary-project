export default function Photos({ photos }) {
  //console.log(photos);
  if (!photos) return null;

  return (
    <div className="Photos">
      {photos.map((photo, index) => (
        <div key={index}>
          <img src={photo.src.original} alt={photo.alt} />
        </div>
      ))}
    </div>
  );
}
