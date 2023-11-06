import "./MarqueeSlider.css";
import Marquee from "react-fast-marquee";
import MarqueeContent from "../marqueeContent/MarqueeContent";

const MarqueeSlider = () => {
  return (
    <div className="desktop_marquee">
      <section className="all_mb">
        <div className="marque-container">
          <Marquee>
            <MarqueeContent />
          </Marquee>
        </div>
      </section>
      
    </div>
  );
};

export default MarqueeSlider;
