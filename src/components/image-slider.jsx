export default function ImageSlider({ images }) {
  return (
    <div>
      {images.map((url) => {
        return (
          <div id={url}>
            <img src={url} />
          </div>
        );
      })}
    </div>
  );
}
