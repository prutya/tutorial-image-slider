export default function ImageSlider({ images }) {
  const indicatorWidthPercent = images.length > 0 ? 100 / images.length : 100;

  return (
    <div className="w-full">
      <div className="w-full flex flex-row overflow-x-scroll snap-x snap-mandatory">
        {images.map((url) => {
          return (
            <div key={url} className="w-full flex-shrink-0 snap-start">
              <img src={url} />
            </div>
          );
        })}
      </div>
      <div className="w-full h-0.5 relative bg-gray-300">
        <div
          className="h-0.5 absolute top-0 left-0 bg-gray-500"
          style={{ width: `${indicatorWidthPercent}%` }}
        />
      </div>
    </div>
  );
}
