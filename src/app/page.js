import ImageSlider from "../components/image-slider";

export default function Page() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <h1>{"Image slider"}</h1>
      <ImageSlider
        images={[
          "https://picsum.photos/id/10/960/540",
          "https://picsum.photos/id/11/960/540",
          "https://picsum.photos/id/12/960/540",
        ]}
      />
    </div>
  );
}
