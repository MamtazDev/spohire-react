import './Billing.css'
const Billing = () => {
    return (
        <>
            <div className="billing_table">

                <div className="billing_header">
                    <div className='col1'>
                        <div className="form-check form_mobile">
                            <input className="form-check form_mobile-input" type="checkbox" value="" id="flexCheckChecked" />
                        </div>
                    </div>
                    <div className="col2">
                        <p>Invoice</p>
                    </div>
                    <div className="col3 me-lg-0 me-2">
                        <p>Amount</p>
                    </div>
                    <div className="col3 me-lg-0 me-2">
                        <p>Date</p>
                    </div>
                    <div className="col3 me-lg-0 me-2">
                        <p>Status</p>
                    </div>
                </div>
                {/* table */}
                <div className="table_row_wrapper">
                    <div className='billing_header1'>
                        <div className='col1'>
                            <div className="form-check form_mobile">
                                <input className="form-check form_mobile-input" type="checkbox" value="" id="flexCheckChecked" />
                            </div>
                        </div>
                        <div className="col2">
                            <p>Bronze plan - Dec 24</p>
                        </div>
                        <div className="col3 me-lg-0 me-2">
                            <p>USD $50.00</p>
                        </div>
                        <div className="col3 me-lg-0 me-2">
                            <p>Dec 1, 2023</p>
                        </div>
                        <div className="col3 me-lg-0">
                            <button className="paid_btn">
                                Paid
                            </button>
                        </div>
                    </div>
                    <div className='billing_header1'>
                        <div className='col1'>
                            <div className="form-check form_mobile">
                                <input className="form-check form_mobile-input" type="checkbox" value="" id="flexCheckChecked" />
                            </div>
                        </div>
                        <div className="col2">
                            <p>Bronze plan - Dec 24</p>
                        </div>
                        <div className="col3 me-lg-0 me-2">
                            <p>USD $50.00</p>
                        </div>
                        <div className="col3 me-lg-0 me-2">
                            <p>Dec 1, 2023</p>
                        </div>
                        <div className="col3 me-lg-0">
                            <button className="paid_btn">
                                Paid
                            </button>
                        </div>
                    </div>
                    <div className='billing_header1'>
                        <div className='col1'>
                            <div className="form-check form_mobile">
                                <input className="form-check form_mobile-input" type="checkbox" value="" id="flexCheckChecked" />
                            </div>
                        </div>
                        <div className="col2">
                            <p>Bronze plan - Dec 24</p>
                        </div>
                        <div className="col3 me-lg-0 me-2">
                            <p>USD $50.00</p>
                        </div>
                        <div className="col3 me-lg-0 me-2">
                            <p>Dec 1, 2023</p>
                        </div>
                        <div className="col3 me-lg-0">
                            <button className="paid_btn">
                                Paid
                            </button>
                        </div>
                    </div>
                    <div className='billing_header1'>
                        <div className='col1'>
                            <div className="form-check form_mobile">
                                <input className="form-check form_mobile-input" type="checkbox" value="" id="flexCheckChecked" />
                            </div>
                        </div>
                        <div className="col2">
                            <p>Bronze plan - Dec 24</p>
                        </div>
                        <div className="col3 me-lg-0 me-2">
                            <p>USD $50.00</p>
                        </div>
                        <div className="col3 me-lg-0 me-2">
                            <p>Dec 1, 2023</p>
                        </div>
                        <div className="col3 me-lg-0">
                            <button className="paid_btn">
                                Paid
                            </button>
                        </div>
                    </div>
                    <div className='billing_header1'>
                        <div className='col1'>
                            <div className="form-check form_mobile">
                                <input className=" form_mobile-input" type="checkbox" value="" id="flexCheckChecked" />
                            </div>
                        </div>
                        <div className="col2">
                            <p>Bronze plan - Dec 24</p>
                        </div>
                        <div className="col3 me-lg-0 me-2">
                            <p>USD $50.00</p>
                        </div>
                        <div className="col3 me-lg-0 me-2">
                            <p>Dec 1, 2023</p>
                        </div>
                        <div className="col3 me-lg-0">
                            <button className="paid_btn">
                                Paid
                            </button>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
};

export default Billing;