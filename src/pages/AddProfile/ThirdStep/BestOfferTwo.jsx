import bronze from "../../../assets/bronze.png";
import silver from "../../../assets/silver.png";
import gold from "../../../assets/gold.png";
import dot from "../../../assets/bluedot.png";

const BestOfferTwo = ({ packageInfo, setPackageInfo }) => {
  return (
    <>
      <div className="bestofferwrapper_two mb_60">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div
                style={{
                  border: `${
                    packageInfo?.price === 50
                      ? "1px solid #7E9BFF"
                      : "1px solid transparent"
                  }`,
                  borderRadius: "11px",
                }}
              >
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
                    className="f_sfPro text-light "
                    onClick={() =>
                      setPackageInfo({
                        name: "Bronze",
                        price: 50,
                      })
                    }
                    // disabled={user?.subscriptionName}
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
              <div
                style={{
                  border: `${
                    packageInfo?.price === 100
                      ? "1px solid #7E9BFF"
                      : "1px solid transparent"
                  }`,
                  borderRadius: "11px",
                }}
              >
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
                      setPackageInfo({
                        name: "Silver",
                        price: 100,
                      })
                    }
                    // disabled={user?.subscriptionName}
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
              <div
                style={{
                  border: `${
                    packageInfo?.price === 150
                      ? "1px solid #7E9BFF"
                      : "1px solid transparent"
                  }`,
                  borderRadius: "11px",
                }}
              >
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
                      setPackageInfo({
                        name: "Gold",
                        price: 150,
                      })
                    }
                    // disabled={user?.subscriptionName}
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

export default BestOfferTwo;
