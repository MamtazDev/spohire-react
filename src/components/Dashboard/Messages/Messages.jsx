/* eslint-disable no-unused-vars */
import './Message.css'
import ChatProfiles from './ChatProfiles';
import Messaging from './Messaging';
import chaticon from '../../../assets/chaticon.png'
import chatclose from '../../../assets/chatclose.png'
import profile from '../../../assets/chat_info-profile.png'

import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

const Messages = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const myParam = searchParams.get('profile');

    console.log("|myParam|", myParam)

    // Remove a query parameter
    //  setSearchParams((params) => {
    //     params.delete('myParam');
    //     return params;
    //   });

    const [showChatDetails, setShowChatDetails] = useState(true);

    const handleChatCloseClick = () => {
        setShowChatDetails(false);
    };
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
                            <Messaging setShowChatDetails={setShowChatDetails}  myParam={myParam} />
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