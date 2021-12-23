import { FC } from "react";
import { StyledIngredients } from "./styles";

interface IIngredients {
    image: string;
    ingedientLines: string[];
}

const Recipe: FC<IIngredients> = ({ image, ingedientLines }) => {
    return (
        <StyledIngredients bgImage={image}>
            <ol>
                {ingedientLines.map((ing, i) => (
                    <li key={i}>{ing}</li>
                ))}
            </ol>
        </StyledIngredients>
    );
};

export default Recipe;
