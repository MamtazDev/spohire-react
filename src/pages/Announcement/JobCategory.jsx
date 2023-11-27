import { Link } from 'react-router-dom';
import plus2 from '../../assets/plus2.png';


const JobCategory = () => {
    return (
        <div>
            <div className="category_wrapper">
                <div className="blue_cat">
                    <p>Job by category</p>
                </div>
                <div className='white_category_part'>
                    <div className="cat_list">
                        {/* <div className='blue_square'></div> */}
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                            />
                        </div>
                        <span>Football</span>
                    </div>
                    <div className="cat_list">
                        {/* <div className='blue_square'></div> */}
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                            />
                        </div>
                        <span>Basketball</span>
                    </div>
                    <div className="cat_list">
                        {/* <div className='blue_square'></div> */}
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                            />
                        </div>
                        <span>Handball</span>
                    </div>
                    <div className="cat_list">
                        {/* <div className='blue_square'></div> */}
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                            />
                        </div>
                        <span>Volleyball</span>
                    </div>

                    <div className='cat_list1'>
                        <div className='blue_plus'>
                            <img src={plus2} alt="plus" />
                        </div>
                        <p> <Link to="/">Show more</Link> </p>

                    </div>
                </div>

            </div>
            <div className="category_wrapper">
                <div className="blue_cat">
                    <p>Job by location</p>
                </div>
                <div className='white_category_part'>
                    <div className="cat_list">
                        {/* <div className='blue_square'></div> */}
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                            />
                        </div>

                        <span>Paris</span>
                    </div>
                    <div className="cat_list">
                        {/* <div className='blue_square'></div> */}
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                            />
                        </div>
                        <span>London</span>
                    </div>
                    <div className="cat_list">
                        {/* <div className='blue_square'></div> */}
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                            />
                        </div>
                        <span>Finland</span>
                    </div>
                    <div className="cat_list">
                        {/* <div className='blue_square'></div> */}
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                            />
                        </div>
                        <span>Canada</span>
                    </div>

                    <div className='cat_list1'>
                        <div className='blue_plus'>
                            <img src={plus2} alt="plus" />
                        </div>
                        <p> <Link to="/">Show more</Link> </p>
                    </div>
                </div>

            </div>

            <div className='best_matched'>
                <h3>Get Best Matched Jobs On your Email</h3>
                <button className='apply_now_btn'>Apply Now</button>
            </div>
        </div>
    );
};

export default JobCategory;