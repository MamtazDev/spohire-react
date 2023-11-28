import senticon from '../../../assets/sentIcon.png'
import send from '../../../assets/send.png'

const Messaging = () => {
    return (
        <>
            <div className='messages_blue_wrapper'>
                <div className="messaging position-relative">
                    <div className='message_content'>
                        <h2>Albert Elham</h2>
                        <div className='message'>
                            <p>Lorem ipsum dolor sit amet consectetur. Nullam risus sem euismod nullam. Eu lectus morbi faucibus morbi sociis.</p>
                            <span>1 day ago</span>
                        </div>
                        <div className='message2'>
                            <p>Lorem ipsum dolor sit amet consectetur. Nullam risus sem euismod nullam. Eu lectus morbi faucibus morbi sociis.</p>
                            <div className="d-flex justify-content-between mt-2 align-items-center">
                                <span>1 min ago</span>
                                <img src={senticon} alt="sent" />
                            </div>
                        </div>
                        <div className='message'>
                            <p>Lorem ipsum dolor sit amet consectetur. Nullam risus sem euismod nullam. Eu lectus morbi faucibus morbi sociis.</p>
                            <span>1 day ago</span>
                        </div>
                        <div className='message2'>
                            <p>Lorem ipsum dolor sit amet consectetur. Nullam risus sem euismod nullam. Eu lectus morbi faucibus morbi sociis.</p>
                            <div className="d-flex justify-content-between mt-2 align-items-center">
                                <span>1 min ago</span>
                                <img src={senticon} alt="sent" />
                            </div>
                        </div>
                     
                    </div>
                    {/* message type */}
                    <div className='type_message'>
                        <input type="text" placeholder='Type Something...' />
                      <div className="send_img">
                          <img src={send} alt="" />
                      </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default Messaging;