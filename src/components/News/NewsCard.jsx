import React from 'react'
import RightButton from '../../assets/news/RightButton.png';

const NewsCard = ({data}) => {
    return (
        <>
            <div className='news_card'>
                <div className="row">
                    <div className="col-lg-7 col-12">
                        <div className="d-flex" style={{ gap: "78px" }}>
                            <div className='date_wrapper'>
                                <h3>{data?.month}</h3>
                                <div className='date_line'></div>
                                <h2>{data?.date}</h2>
                            </div>
                            <img src={data?.img} alt="" />
                        </div>

                    </div>
                    <div className="col-lg-5 col-12">
                        <div className="card_details">
                            <h2>{data?.title}</h2>
                            <span>{data.time}</span>
                            <p>{data.desc}</p>
                            <div className='desc_line'></div>

                            <div className='view_morebtn'>
                                <button>View More  <img src={RightButton} alt="RightButton" />  </button>
                            </div>

                        </div>

                    </div>


                </div>
            </div>


        </>
    )
}

export default NewsCard