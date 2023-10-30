const MobileMarqueeContents = () => {
  return (
    <div className="moving">
      <div className="d-flex align-items-center gap-5 ">
        <div className="playTxt1" style={{ border: "1px solid #B844FF" }}>
          <span>Football</span>
        </div>
        <div className="playTxt1" style={{ border: "1px solid #6B71FF" }}>
          <span>Volleyball</span>
        </div>

        <div className="playTxt1" style={{ border: "1px solid #FF3636" }}>
          <span>BASKETBALL</span>
        </div>

        <div className="playTxt1" style={{ border: "1px solid #563AFF" }}>
          <span>Handball</span>
        </div>

        <div className="playTxt1 me-3" style={{ border: "1px solid #75DB8B" }}>
          <span>Football</span>
        </div>
      </div>
    </div>
  );
};

export default MobileMarqueeContents;
