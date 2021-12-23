import { FC } from "react";
import { ResultRecipe } from "./../index";
import { FoodRes } from "../../interfaces";
import { StyledRecipeResult } from "./styles";

type IPick = Pick<FoodRes, "hits">;

interface ISearch extends IPick {
    handleViewRecipe: (label: string) => void;
}

const SearchResult: FC<ISearch> = ({ hits, handleViewRecipe }) => {
    return (
        <StyledRecipeResult>
            <ul>
                {hits.map((recipe, i) => (
                    <ResultRecipe
                        key={i}
                        handleViewRecipe={handleViewRecipe}
                        {...recipe}
                    />
                ))}
            </ul>
        </StyledRecipeResult>
    );
};

export default SearchResult;
