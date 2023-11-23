import './Notification.css'
const Notification = () => {
    return (
        <div style={{paddingTop:"76px"}}>
            <div className="notification_wrapper">
                <div className='notification_items'>
                    <h3>Emails</h3>
                    <div className='d-flex justify-content-between align-items-center w-100 gap-5'>
                        <p>New notifications</p>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked={true} />

                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center w-100 gap-5'>
                        <p>Update Notifications</p>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked={true} />

                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center w-100 gap-5'>
                        <p>Chat Notifications</p>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked={true} />

                        </div>
                    </div>
                    <hr />

                </div>

                {/* form items */}
                <div className='notification_items1'>
                    <h3>From team</h3>
                    <div className='d-flex justify-content-between align-items-center w-100'>
                        <p>New notifications</p>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked={false} />

                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center w-100 mb-5'>
                        <p>Other Notifications</p>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked={false} />

                        </div>
                    </div>
                </div>
                <button className='save_btn'>Save Changes</button>
            </div>
        </div>
    );
};

export default Notification;