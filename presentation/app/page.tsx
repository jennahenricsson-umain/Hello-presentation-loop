
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
          top: 0,
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          height: "100%",
          objectFit: "contain",
          backgroundColor: "#151515",
        }}
      />
    </div>
  );
}
