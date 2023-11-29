import profile from '../../../assets/chatprofile.png'

const ChatProfiles = () => {
    return (
        <>
            <div className='profiles_list'>
                <h6>Messages</h6>

                <div className='d-flex align-items-start chat_wrapper justify-content-between w-100 '>
                    <div className='d-flex align-items-start gap-3'>
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
                <hr className='chat_line' />
                <div className='d-flex align-items-start chat_wrapper justify-content-between w-100 '>
                    <div className='d-flex align-items-start gap-3'>
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
                <hr className='chat_line' />
                <div className='d-flex align-items-start chat_wrapper justify-content-between w-100 '>
                    <div className='d-flex align-items-start gap-3'>
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
                <hr className='chat_line' />
                <div className='d-flex align-items-start chat_wrapper justify-content-between w-100 '>
                    <div className='d-flex align-items-start gap-3'>
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
                <hr className='chat_line' />
                <div className='d-flex align-items-start chat_wrapper justify-content-between w-100 '>
                    <div className='d-flex align-items-start gap-3'>
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
                {/* <hr className='chat_line' /> */}


            </div>
        </>
    );
};

export default ChatProfiles;