export default function ImageSlider({ images }) {
  return (
    <div className="w-full flex flex-row overflow-x-scroll">
      {images.map((url) => {
        return (
          <div key={url} className="w-full flex-shrink-0">
            <img src={url} />
          </div>
        );
      })}
    </div>
  );
}
