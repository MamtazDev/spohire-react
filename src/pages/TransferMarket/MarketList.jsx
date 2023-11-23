import { useState } from "react";
import Compact from "./Compact";

const MarketList = () => {



    const [worksTab, setWorksTab] = useState("player");
    const handleTabClick = (tab) => {
        setWorksTab(tab);
    };

    return (
        <div>
            <section className="mt_150">
                <section id="signUp">
                    <div className="container Work_container">
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
                                <h1 className="">Coach Tab</h1>
                            </>
                        )}
                        {worksTab === "manager" && (
                            <>
                                <h1 className="">Manager</h1>
                            </>
                        )}
                    </div>
                </section>
            </section>

        </div>
    );
};

export default MarketList;