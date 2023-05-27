export default function ImageSlider({ images }) {
  return (
    <div className="w-full flex flex-row overflow-x-scroll snap-x snap-mandatory">
      {images.map((url) => {
        return (
          <div key={url} className="w-full flex-shrink-0 snap-start">
            <img src={url} />
          </div>
        );
      })}
    </div>
  );
}
