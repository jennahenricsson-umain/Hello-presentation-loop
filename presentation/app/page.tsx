
export default function Page() {

  return (
    <div>
      <video
        src={"/loop.mp4"}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          backgroundColor: "#151515",
        }}
      />
    </div>
  );
}
