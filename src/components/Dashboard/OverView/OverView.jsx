
import AnnouncementOverview from './AnnouncementOverview';
import JobOfferOverview from './JobOfferOverview';
import MessagesOverview from './MessagesOverview';
import './OverView.css';
import PlayerOverview from './PlayerOverview';
import RecentlyObserved from './RecentlyObserved';
const OverView = () => {
    return (
        <>
            <div className="overview_wrapper">
                <div className="d-flex align-items-center justify-content-between">
                    <h1>Hello Emily Sinclair!</h1>
                    <div className="date">
                        <h3>Friday</h3>
                        <p>27 November 2023</p>

                    </div>
                </div>

                <PlayerOverview />

                <div className="container">
                    <div className="row mt-4">
                        <div className="col-lg-6 ps-0">
                            <JobOfferOverview />
                        </div>
                        <div className="col-lg-6 mt-lg-0 mt-4 ">
                            <AnnouncementOverview />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-6 ps-0">
                            <RecentlyObserved />
                        </div>
                        <div className="col-lg-6 mt-lg-0 mt-4 ">
                            <MessagesOverview />
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};

export default OverView;