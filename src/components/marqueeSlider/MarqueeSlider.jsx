import React from 'react'
import './MarqueeSlider.css'
import Marquee from 'react-fast-marquee'
import MarqueeContent from '../marqueeContent/MarqueeContent'

const MarqueeSlider = () => {
    return (
        <section class="all_mb">
            <div class="marque-container">
                <Marquee>
                    <MarqueeContent />
                </Marquee>

            </div>
        </section>
    )
}

export default MarqueeSlider