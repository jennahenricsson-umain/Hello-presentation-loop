export default function Page() {

  return (

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
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
        }}
      />

  );
}
