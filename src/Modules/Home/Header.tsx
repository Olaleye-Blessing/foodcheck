import { FC } from "react";
import { StyledHeader } from "./Styles";
import headerBg from "./../../assets/images/header_bg.svg";

const Header: FC = () => {
    return (
        <StyledHeader>
            <div className="container">
                <div className="header__content">
                    <h1 className="header__head">
                        Let's Start Cooking With Popular Recipes
                    </h1>
                    <p className="header__para">
                        Want to learn cook but confused about how to start? No
                        need to worry again
                    </p>
                    <div className="header__links">
                        <button className="btn">Get Started</button>
                        <button className="btn btn__outline">
                            Explore Menu
                        </button>
                    </div>
                </div>
                <figure className="header__bg" aria-hidden="true">
                    <img alt="" src={headerBg} />
                </figure>
            </div>
        </StyledHeader>
    );
};

export default Header;
