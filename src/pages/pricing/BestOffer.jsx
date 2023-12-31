import bronze from "../../assets/bronze.png";
import silver from "../../assets/silver.png";
import gold from "../../assets/gold.png";
import dot from "../../assets/bluedot.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPaymentInfo } from "../../features/payment/paymentSlice";
import Swal from "sweetalert2";

const BestOffer = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSave = (data) => {
    if (user?.subscriptionName === data?.name) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have already subscribed this offer!",
      });
    } else {
      dispatch(setPaymentInfo(data));
      navigate("/paymentProcess");
    }
  };
  return (
    <>
      <div className="bestofferwrapper mb_150">
        <div className="container">
          <div className="bestOffer_title">
            <h1 className="f_sfPro">
              Choose the <span>best offer</span> for you
            </h1>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div>
                <div className="pricing_card">
                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{ marginBottom: "10px" }}
                  >
                    <h3 className="f_sfPro">Bronze</h3>
                    <img src={bronze} alt="bronze" />
                  </div>
                  <span className="">An ideal starting point....</span>
                  <h2 className="mt_30 mb_10">$50</h2>
                  <p className="mb_30">Per month</p>

                  <button
                    className="f_sfPro text-light"
                    onClick={() =>
                      handleSave({
                        name: "Bronze",
                        price: 50,
                      })
                    }
                  >
                    Save and Continue
                  </button>
                </div>
                <div className="white_part">
                  <div className="white_wrapper">
                    <div className="blue_dot">
                      <img src={dot} alt="dot" />
                      <span>
                        Ideal starting point for individuals and teams
                      </span>
                    </div>
                    <div className="blue_dot">
                      <img src={dot} alt="dot" />
                      <span>Bronze package offers essential features</span>
                    </div>
                    <div className="blue_dot">
                      <img src={dot} alt="dot" />
                      <span>Perfect for those new to the platform</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div>
                <div className="pricing_card">
                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{ marginBottom: "10px" }}
                  >
                    <h3 className="f_sfPro">Silver</h3>
                    <img src={silver} alt="bronze" />
                  </div>
                  <span className="">An ideal starting point....</span>
                  <h2 className="mt_30 mb_10">$100</h2>
                  <p className="mb_30">Per month</p>

                  <button
                    className="f_sfPro text-light"
                    onClick={() =>
                      handleSave({
                        name: "Silver",
                        price: 100,
                      })
                    }
                  >
                    Save and Continue
                  </button>
                </div>

                <div className="white_part">
                  <div className="white_wrapper">
                    <div className="blue_dot">
                      <img src={dot} alt="dot" />
                      <span>
                        Ideal starting point for individuals and teams
                      </span>
                    </div>
                    <div className="blue_dot">
                      <img src={dot} alt="dot" />
                      <span>Bronze package offers essential features</span>
                    </div>
                    <div className="blue_dot">
                      <img src={dot} alt="dot" />
                      <span>Perfect for those new to the platform</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div>
                <div className="pricing_card">
                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{ marginBottom: "10px" }}
                  >
                    <h3 className="f_sfPro">Gold</h3>
                    <img src={gold} alt="bronze" />
                  </div>
                  <span className="">An ideal starting point....</span>
                  <h2 className="mt_30 mb_10">$150</h2>
                  <p className="mb_30">Per month</p>

                  <button
                    className="f_sfPro text-light"
                    onClick={() =>
                      handleSave({
                        name: "Gold",
                        price: 150,
                      })
                    }
                  >
                    Save and Continue
                  </button>
                </div>

                <div className="white_part">
                  <div className="white_wrapper">
                    <div className="blue_dot">
                      <img src={dot} alt="dot" />
                      <span>
                        Ideal starting point for individuals and teams
                      </span>
                    </div>
                    <div className="blue_dot">
                      <img src={dot} alt="dot" />
                      <span>Bronze package offers essential features</span>
                    </div>
                    <div className="blue_dot">
                      <img src={dot} alt="dot" />
                      <span>Perfect for those new to the platform</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestOffer;
