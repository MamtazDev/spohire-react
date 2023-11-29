import senticon from '../../../assets/sentIcon.png'
import send from '../../../assets/send.png'

const Messaging = () => {
    return (
        <>
            <div className="messaging">
                <h2>Albert Elham</h2>
                <div className='message_content'>

                    <div className='d-flex align-items-end'>
                        <div className='bg_curve_blue'>
                            <div className='bg_curve_white'>

                            </div>
                        </div>
                        <div className='message1'>
                            <p>Lorem ipsum dolor sit amet consectetur. Nullam risus sem euismod nullam. Eu lectus morbi faucibus morbi sociis.</p>
                            <span>1 day ago</span>
                        </div>
                    </div>





                    <div className='d-flex align-items-end'>
                        <div className='message2'>
                            <p>Lorem ipsum dolor sit amet consectetur. Nullam risus sem euismod nullam. Eu lectus morbi faucibus morbi sociis.</p>
                            <div className="d-flex justify-content-between mt-2 align-items-center">
                                <span>1 min ago</span>
                                <img src={senticon} alt="sent" />
                            </div>
                        </div>
                        <div className='bg_curve_blue1'>
                            <div className='bg_curve_white1'>

                            </div>
                        </div>
                    </div>

                    <div className='d-flex align-items-end'>
                        <div className='bg_curve_blue'>
                            <div className='bg_curve_white'>

                            </div>
                        </div>
                        <div className='message1'>
                            <p>Lorem ipsum dolor sit amet consectetur. Nullam risus sem euismod nullam. Eu lectus morbi faucibus morbi sociis.</p>
                            <span>1 day ago</span>
                        </div>
                    </div>
                    <div className='d-flex align-items-end'>
                        <div className='message2'>
                            <p>Lorem ipsum dolor sit amet consectetur. Nullam risus sem euismod nullam. Eu lectus morbi faucibus morbi sociis.</p>
                            <div className="d-flex justify-content-between mt-2 align-items-center">
                                <span>1 min ago</span>
                                <img src={senticon} alt="sent" />
                            </div>
                        </div>
                        <div className='bg_curve_blue1'>
                            <div className='bg_curve_white1'>

                            </div>
                        </div>
                    </div>

            


                    <div className='d-flex align-items-end'>
                        <div className='bg_curve_blue'>
                            <div className='bg_curve_white'>
                            </div>
                        </div>
                        <div className='message1'>
                            <p>Lorem ipsum dolor sit amet consectetur. Nullam risus sem euismod nullam. Eu lectus morbi faucibus morbi sociis.</p>
                            <span>1 day ago</span>
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

        </>
    );
};

export default Messaging;