import { FC } from "react";
import { Recipe } from "../../interfaces";
import { StyledResultRecipe } from "./styles";

interface IRecipe extends Recipe {
    handleViewRecipe: (id: string) => void;
}

const ResultRecipe: FC<IRecipe> = ({ recipe, handleViewRecipe }) => {
    let id = recipe.uri.slice(53);

    return (
        <StyledResultRecipe>
            <figure>
                <img src={recipe.image} alt={``} />
            </figure>
            <div>
                <p>{recipe.label}</p>
                <p>
                    <span>Publisher</span>: <span>{recipe.source}</span>
                </p>
                <button
                    className="btn btn__outline"
                    onClick={() => handleViewRecipe(id)}
                >
                    View Recipe
                </button>
            </div>
        </StyledResultRecipe>
    );
};

export default ResultRecipe;
