import './Message.css'
import ChatProfiles from './ChatProfiles';
import Messaging from './Messaging';
import chaticon from '../../../assets/chaticon.png'
import chatclose from '../../../assets/chatclose.png'
import profile from '../../../assets/chat_info-profile.png'

const Messages = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="message_wrapper">
                    <div className="row w-100">
                        {/* <div className="col-lg-3  d-lg-block d-none d-flex"> */}
                        <div className="col-lg-3 ">
                            <div>
                                <div className='chat_list_wrapper '>
                                    <h3>Message details</h3>

                                    {/* search div*/}

                                    <div className="form-group has-search1">
                                        <span className="fa fa-search form-control-feedback"></span>
                                        <input type="text" className="form-control" placeholder="Search" />
                                    </div>
                                    {/*  message lsit */}
                                    <ChatProfiles />
                                </div>
                            </div>
                        </div>

                        {/* div 6 */}
                        <div className="col-lg-6 message_border d-flex">
                            <div className='border-right'></div>
                            <Messaging />
                            <div className='border-right'></div>
                        </div>

                        <div className="col-lg-3 d-lg-block d-none">
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex align-items-center  gap-2'>
                                    <img src={chaticon} alt="" />
                                    <p>Chat Details</p>
                                </div>
                                <button className='bg-none'> <img src={chatclose} alt="chatclose" /></button>
                            </div>

                            <div className='text-center profile_right'>
                                <img src={profile} alt="chatclose" />
                                <p>Abram Korsgaard</p>
                                <span>Coach</span>
                            </div>
                            <hr className='coach_hr' />
                        </div>




                    </div>
                </div>

            </div>



        </>
    );
};

export default Messages;