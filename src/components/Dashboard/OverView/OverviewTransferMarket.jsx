import React from 'react'
import addpicon from '../../../assets/addpicon.png'
import add2icon from '../../../assets/add2icon.png'
import add3icon from '../../../assets/add3icon.png'
import PlayerOverview from './PlayerOverview'
import { useSelector } from "react-redux";
import JobOfferOverview from './JobOfferOverview'
import AnnouncementOverview from './AnnouncementOverview'
import RecentlyObserved from './RecentlyObserved'
import MessagesOverview from './MessagesOverview'

const OverviewTransferMarket = () => {
    const { user } = useSelector((state) => state.auth);
    return (
        <>
            <div className='over_tm_wrapper'>
                <p className='transfer_title'>Transfer Market</p>
                <div className='buttons_design'>
                    <button> <img src={addpicon} alt="addpicon" /> <span>Add Player</span> </button>
                    <button> <img src={addpicon} alt="addpicon" /> <span>Add Coach</span> </button>
                    <button> <img src={add2icon} alt="addpicon" /> <span>Add Job Offer</span> </button>
                    <button> <img src={add2icon} alt="addpicon" /> <span>Add Announcement</span> </button>
                    <button> <img src={add3icon} alt="addpicon" /> <span>Buy Subscription</span> </button>
                </div>

                {user?.role === "Manager" && <PlayerOverview user={user} />}

                <div className="container">
                    <div className="row mt-4 ps-0">
                        <div className="col-lg-4 ps-0 pe-lg-3 pe-0">
                            <JobOfferOverview />
                        </div>
                        <div className="col-lg-8 mt-lg-0 mt-4 pe-0 ps-lg-3 ps-0">
                            <AnnouncementOverview />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-8 ps-0 pe-lg-3 pe-0">
                            <RecentlyObserved />
                        </div>
                        <div className="col-lg-4 mt-lg-0 mt-4 mb-lg-0 mb-5 pe-0 ps-lg-3 ps-0 ">
                            {user?.role !== "Other" && <MessagesOverview />}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OverviewTransferMarket