import { useState } from "react";
import Compact from "./Compact";
import Gallary from "./Gallary";
import Detailed from './Detailed';

const MarketList = () => {



    const [worksTab, setWorksTab] = useState("player");
    const handleTabClick = (tab) => {
        setWorksTab(tab);
    };

    return (
        <div>
            <section className="mt_150">
                <section id="signUp">
                    <div className="container">
                        <div className="tabOutter1 d-flex flex flex-lg-row justify-content-center gap-2 align-items-center mx-auto">
                            <button
                                className={worksTab === "player" ? "btnActive" : ""}
                                onClick={() => handleTabClick("player")}
                            >
                                Compact
                            </button>
                            <button
                                className={worksTab === "coach" ? "btnActive" : ""}
                                onClick={() => handleTabClick("coach")}
                            >
                                Detailed
                            </button>
                            <button
                                className={worksTab === "manager" ? "btnActive" : ""}
                                onClick={() => handleTabClick("manager")}
                            >
                                Gallery
                            </button>
                        </div>

                        {worksTab === "player" && (
                            <Compact />
                        )}

                        {worksTab === "coach" && (
                            <>
                                <Detailed />
                            </>
                        )}
                        {worksTab === "manager" && (
                            <>
                                <Gallary />
                            </>
                        )}
                    </div>
                </section>
            </section>

        </div>
    );
};

export default MarketList;