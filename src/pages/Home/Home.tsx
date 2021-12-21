import { FC } from "react";
import { HomeHeader, HomePopularFood, HomeWorks } from "../../Modules";

const Home: FC = () => {
    return (
        <>
            <HomeHeader />
            <HomePopularFood />
            <HomeWorks />
        </>
    );
};

export default Home;
