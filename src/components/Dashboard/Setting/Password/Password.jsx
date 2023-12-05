import './Password.css';
import lock from '../../../../assets/lock.png'
const Password = () => {
    return (
        <form style={{ paddingTop: "76px" }}>
            <div className="pass_wrapper">

                <div className="form-group has-search">
                    <label htmlFor="">Old password</label>
                    <span className=" form-control-feedback1"><img src={lock} alt="" /></span>
                    <input type="text" className="form-control" placeholder="Password" />
                </div>
                <div className="form-group has-search">
                    <label htmlFor="">New password</label>
                    <span className=" form-control-feedback"><img src={lock} alt="" /></span>
                    <input type="text" className="form-control" placeholder="New password" />
                    <p>Minimum 8 characters</p>
                </div>
                <div className="form-group has-search">
                    <label htmlFor="">Confirm new password</label>
                    <span className=" form-control-feedback"><img src={lock} alt="" /></span>
                    <input type="text" className="form-control" placeholder="Confirm new password" />
                    <p>Minimum 8 characters</p>
                </div>
                <button type='submit' className='save_btn'>Save Changes</button>

            </div>
        </form>
    );
};

export default Password;