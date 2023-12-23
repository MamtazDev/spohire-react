import { useSelector } from "react-redux";
import { useGetUserPaymentsQuery } from "../../../../features/payment/paymentApi";
import "./Billing.css";
import { convertDate } from "../../../../utils/TimeConverter";
const Billing = () => {
  const { user } = useSelector((state) => state.auth);
  const { data, isLoading } = useGetUserPaymentsQuery(user?._id);
  console.log(data?.data, "duser");
  return (
    <>
      <div className="billing_table">
        <div className="billing_header">
          <div className="col1">
            <div className="form-check form_mobile">
              <input
                className="form-check form_mobile-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
            </div>
          </div>
          <div className="col2">
            <p>TransactionId</p>
          </div>
          <div className="col3 me-lg-0 me-2">
            <p>Plan Name</p>
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
          {data?.data &&
            data?.data.length > 0 &&
            data?.data.map((item, idx) => (
              <div className="billing_header1" key={idx}>
                <div className="col1">
                  <div className="form-check form_mobile">
                    <input
                      className="form-check form_mobile-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                  </div>
                </div>
                <div className="col2">
                  <p>{item?.transactionId}</p>
                </div>
                <div className="col3 me-lg-0 me-2">
                  <p>{item?.planName}</p>
                </div>
                <div className="col3 me-lg-0 me-2">
                  <p>USD {item?.amount}</p>
                </div>
                <div className="col3 me-lg-0 me-2">
                  <p>{convertDate(item?.createdAt)}</p>
                </div>
                <div className="col3 me-lg-0">
                  <button className="paid_btn">Paid</button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Billing;
