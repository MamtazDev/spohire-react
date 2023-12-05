
import profile from '../../../assets/chatprofile.png'

const MessagesOverview = () => {
    return (
        <div>
            <div className="job_offer_overrview_wrapper">
                <div className="d-flex justify-content-between">
                    <h4>Messages</h4>
                    <a href="/dashboard/messages">View More</a>
                </div>


                <div className='d-flex align-items-start justify-content-between chat_wrapper mt-3'>
                    <div className='d-flex align-items-center gap-2'>
                        <div>
                            <img src={profile} alt="profile" />
                        </div>
                        <div>
                            <h5>Abram Korsgaard</h5>
                            <span>Yeah, I’m done with it...</span>
                        </div>
                    </div>
                    <div>
                        <p>12:34</p>
                    </div>
                </div>
                <hr className='message_overview_hr' />

                <div className='d-flex align-items-start justify-content-between chat_wrapper mt-3'>
                    <div className='d-flex align-items-center gap-2'>
                        <div>
                            <img src={profile} alt="profile" />
                        </div>
                        <div>
                            <h5>Abram Korsgaard</h5>
                            <span>Yeah, I’m done with it...</span>
                        </div>
                    </div>
                    <div>
                        <p>12:34</p>
                    </div>
                </div>
                <hr className='message_overview_hr' />

                <div className='d-flex align-items-start justify-content-between chat_wrapper mt-3'>
                    <div className='d-flex align-items-center gap-2'>
                        <div>
                            <img src={profile} alt="profile" />
                        </div>
                        <div>
                            <h5>Abram Korsgaard</h5>
                            <span>Yeah, I’m done with it...</span>
                        </div>
                    </div>
                    <div>
                        <p>12:34</p>
                    </div>
                </div>
                <hr className='message_overview_hr' />

                <div className='d-flex align-items-start justify-content-between chat_wrapper mt-3'>
                    <div className='d-flex align-items-center gap-2'>
                        <div>
                            <img src={profile} alt="profile" />
                        </div>
                        <div>
                            <h5>Abram Korsgaard</h5>
                            <span>Yeah, I’m done with it...</span>
                        </div>
                    </div>
                    <div>
                        <p>12:34</p>
                    </div>
                </div>
                <hr className='message_overview_hr' />
                <div className='d-flex align-items-start justify-content-between chat_wrapper mt-3'>
                    <div className='d-flex align-items-center gap-2'>
                        <div>
                            <img src={profile} alt="profile" />
                        </div>
                        <div>
                            <h5>Abram Korsgaard</h5>
                            <span>Yeah, I’m done with it...</span>
                        </div>
                    </div>
                    <div>
                        <p>12:34</p>
                    </div>
                </div>




            </div>
        </div>
    );
};

export default MessagesOverview;