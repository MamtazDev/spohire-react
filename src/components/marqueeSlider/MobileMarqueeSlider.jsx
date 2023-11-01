import "./MarqueeSlider.css";
import Marquee from "react-fast-marquee";
import MobileMarqueeContents from "../marqueeContent/MobileMarqueeContents";

const MobileMarqueeSlider = () => {
  return (
    <div className="mobile_marquee">
      <section className="">
        <div className="marque-container mb-4">
          <Marquee>
            <MobileMarqueeContents/>
          </Marquee>
        </div>
      </section>
      {/* <section className="">
        <div className="marque-container" style={{marginBottom:"49px"}}>
          <Marquee>
            <MobileMarqueeContents />
          </Marquee>
        </div>
      </section> */}
    </div>
  );
};

export default MobileMarqueeSlider;
