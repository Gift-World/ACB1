const Consent = () => {
    return (
      <div
        style={{
          position: "fixed",
          top: "50px",
          left: 0,
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <iframe
          src="/magazines/consent.pdf"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
        ></iframe>
      </div>
    );
  };
  
  export default Consent;
  