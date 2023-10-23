import React from 'react'

const MarqueeContent = () => {
    return (
        <div class="moving">
            <div class="d-flex align-items-center gap-5 ">
                <div class="playTxt" style={{ border: '1px solid #6B71FF' }} >
                    <span>
                        Volleyball
                    </span>
                </div>
                <div class="middleLine"></div>
                <div class="playTxt" style={{ border: '1px solid #B844FF' }} >
                    <span>
                        Football
                    </span>
                </div>
                <div class="middleLine"></div>
                <div class="playTxt" style={{ border: '1px solid #FF3636' }} >
                    <span>
                        BASKETBALL
                    </span>
                </div>
                <div class="middleLine"></div>
                <div class="playTxt" style={{ border: '1px solid #563AFF' }} >
                    <span>
                        Handball
                    </span>
                </div>
                <div class="middleLine"></div>
                <div class="playTxt" style={{ border: '1px solid #75DB8B' }} >
                    <span>
                        Football
                    </span>
                </div>
                
            </div>
        </div>
    )
}

export default MarqueeContent