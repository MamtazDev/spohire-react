/* eslint-disable no-unused-vars */
import './Message.css'
import ChatProfiles from './ChatProfiles';
import Messaging from './Messaging';
import chaticon from '../../../assets/chaticon.png'
import chatclose from '../../../assets/chatclose.png'
import profile from '../../../assets/chat_info-profile.png'
import senticon from '../../../assets/sentIcon.png'
import send from '../../../assets/send.png'
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

const Messages = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const myParam = searchParams.get('profile');

    // console.log("|myParam|", myParam)

    const [showChatDetails, setShowChatDetails] = useState(true);

    const handleChatCloseClick = () => {
        setShowChatDetails(false);
    };
    const close = () => {
        setShowChatDetails(true)
    }
    // messaging ----------function
    const [inputValue, setInputValue] = useState('');
    // State to store the array of data
    const [sendMessageArray, setSendMessageArray] = useState([]);

    // Function to handle input change
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    // Function to handle send button click
    const handleSendClick = () => {
        setSendMessageArray((prevData) => [...prevData, inputValue]);
        setInputValue('');
    };
    console.log(sendMessageArray)




    return (
        <>
            <div className="container-fluid">
                <div className="message_wrapper">
                    <div className="row w-100">
                        <div className={`col-lg-3 d-lg-block d-none`}>
                            <div>
                                <div className='chat_list_wrapper '>
                                    <h3>Message details</h3>
                                    <div className="form-group has-search1">
                                        <span className="fa fa-search form-control-feedback"></span>
                                        <input type="text" className="form-control" placeholder="Search" />
                                    </div>
                                    <ChatProfiles />
                                </div>
                            </div>
                        </div>
                        <div className={`col-lg-${showChatDetails ? '6' : '9'} message_border d-flex`}>
                            <div className='border-right'></div>
                            {/* <Messaging setShowChatDetails={setShowChatDetails}  myParam={myParam} /> */}
                            <div className="messaging">
                                <h2 onClick={close} className='pointer'>{myParam ? "Albert Elham" : "Dihan Abir"}</h2>
                                <div className='message_content'>
                                    <div className='d-flex align-items-end'>
                                        <div className='bg_curve_blue'>
                                            <div className='bg_curve_white'></div>
                                        </div>
                                        <div className='message1'>
                                            <p>Lorem ipsum dolor sit amet consectetur. Nullam risus sem euismod nullam. Eu lectus morbi faucibus morbi sociis.</p>
                                            <span>1 day ago</span>
                                        </div>


                                    </div>
                                    {
                                        sendMessageArray.map((data) => (
                                            <>
                                                <div className='d-flex align-items-end'>
                                                    <div className='message2'>
                                                        <p>{data ? data : "Lorem ipsum dolor sit amet consectetur. Nullam risus sem euismod nullam. Eu lectus morbi faucibus morbi sociis."}</p>
                                                        <div className="d-flex justify-content-between mt-2 align-items-center">
                                                            <span>1 min ago</span>
                                                            <img src={senticon} alt="sent" />
                                                        </div>
                                                    </div>
                                                    <div className='bg_curve_blue1'>
                                                        <div className='bg_curve_white1'></div>
                                                    </div>
                                                </div>
                                            </>
                                        ))
                                    }
                                </div >


                                {/* message type */}
                                <div className='type_message'>
                                    <input type="text" placeholder='Type Something...'
                                        className="form-control"
                                        value={inputValue}
                                        onChange={handleInputChange} />
                                    <div className="send_img">
                                        <button onClick={handleSendClick} className='bg-none'>
                                            <img src={send} alt="" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {showChatDetails && <div className='border-right'></div>}
                        </div>

                        {showChatDetails && (
                            <div className={`col-lg-3 d-lg-block d-none`}>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex align-items-center  gap-2'>
                                        <img src={chaticon} alt="" />
                                        <p>Chat Details</p>
                                    </div>
                                    <button className='bg-none' onClick={handleChatCloseClick}>
                                        <img src={chatclose} alt="chatclose" />
                                    </button>
                                </div>

                                <div className='text-center profile_right'>
                                    <img src={profile} alt="chatclose" />
                                    {myParam !== null ? <p>Abram Korsgaard</p> : <b>Dihan Abir</b>}
                                    <span>Coach</span>
                                </div>
                                <hr className='coach_hr' />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Messages;
// <div className="container-fluid">
//     <div className="message_wrapper">
//         <div className="row w-100">
//             <div className="col-lg-3  d-lg-block d-none">
//                 <div>
//                     <div className='chat_list_wrapper '>
//                         <h3>Message details</h3>
//                         <div className="form-group has-search1">
//                             <span className="fa fa-search form-control-feedback"></span>
//                             <input type="text" className="form-control" placeholder="Search" />
//                         </div>
//                         <ChatProfiles />
//                     </div>
//                 </div>
//             </div>

//             {/* div 6 */}
//             <div className="col-lg-6 message_border d-flex">
//                 <div className='border-right'></div>
//                 <Messaging myParam={myParam} />
//                 <div className='border-right'></div>
//             </div>

//             <div className="col-lg-3 d-lg-block d-none">
//                 <div className='d-flex justify-content-between'>
//                     <div className='d-flex align-items-center  gap-2'>
//                         <img src={chaticon} alt="" />
//                         <p>Chat Details</p>
//                     </div>
//                     <button className='bg-none'> <img src={chatclose} alt="chatclose" /></button>
//                 </div>

//                 <div className='text-center profile_right'>
//                     <img src={profile} alt="chatclose" />
//                     {myParam !== null  ? <p>Abram Korsgaard</p> : <b>Dihan Abir</b>}
//                     <span>Coach</span>
//                 </div>
//                 <hr className='coach_hr' />
//             </div>
//         </div>
//     </div>
// </div>