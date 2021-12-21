import { FC } from "react";
import { StyledSection } from "../../pages/Home/StyledHome";
import { StyledWorks } from "./Styles";
import works1 from "./../../assets/images/check.svg";

const Works: FC = () => {
    let lists = [
        {
            header: "Choose your meal",
            para: "23+ meals to choose from",
            img: works1,
        },
        {
            header: "Choose your meal",
            para: "23+ meals to choose from",
            img: works1,
        },
        {
            header: "Choose your meal",
            para: "23+ meals to choose from",
            img: works1,
        },
    ];

    return (
        <StyledWorks>
            <div className="container">
                <header>
                    <h2>See How It Works</h2>
                </header>
                <ul>
                    {lists.map(({ header, para, img }, i) => (
                        <li key={i}>
                            <figure>
                                <img src={img} alt="" />
                            </figure>
                            <h3>{header}</h3>
                            <p>{para}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </StyledWorks>
    );
};

export default Works;
