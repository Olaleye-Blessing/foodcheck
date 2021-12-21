import { FC } from "react";
import { Link } from "react-router-dom";
import { StyledNav } from "./StyledNav";

const Index: FC = () => {
    return (
        <StyledNav>
            <div className="container">
                <Link to="/" className="logo">
                    Food<span>Check</span>
                </Link>
                <Link to="/recipes">Recipes</Link>
            </div>
        </StyledNav>
    );
};

export default Index;
