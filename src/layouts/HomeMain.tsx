import * as React from "react";
import HomeCafeContainer from "../containers/home/HomeCafeContainer";
import HomeShoppingContainer from "../containers/home/HomeShoppingContainer";
import HomeNewsContainer from "../containers/home/HomeNewsContainer";

const HomeMain = () => {
    return (
        <>
            <section className="cafe">
                <div className="cafe__box">
                    <HomeCafeContainer/>
                </div>
            </section>

            <section className="shopping">
                <div className="shopping__box">
                    <HomeShoppingContainer/>
                </div>
            </section>

            <section className="news">
                <div className="news__box">
                    <HomeNewsContainer/>
                </div>
            </section>
        </>
    )
};

export default HomeMain;
