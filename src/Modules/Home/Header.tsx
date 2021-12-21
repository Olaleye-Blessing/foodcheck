import { FC } from "react";
import { StyledHeader } from "./Styles";

const Header: FC = () => {
    return (
        <StyledHeader>
            <div className="container">
                <h1>Let's Start Cooking With Popular Recipes</h1>
                <p>
                    Want to learn cook but confused about how to start?No need
                    to worry again
                </p>
                <div>
                    <button className="btn">Get Started</button>
                    <button className="btn btn__outline">Explore Menu</button>
                </div>
            </div>
        </StyledHeader>
    );
};

export default Header;
