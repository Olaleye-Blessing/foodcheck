import { FC, useState } from "react";
import { Modal } from "../../components";
import { useFetch } from "../../Hooks/useFetch";
import { FoodRes, Recipe as IRecipe } from "../../interfaces";
import { Form, Ingredients, SearchResult } from "../../Modules";
import { foodConfig } from "../../services/edamam";
import { StyledRecipes } from "./StyledRecipes";

const Index: FC = () => {
    const [food, setFood] = useState("");
    const [search, setSearch] = useState("");
    const [recipe, setRecipe] = useState<undefined | IRecipe>(undefined);
    const [showRecipeModal, setShowRecipeModal] = useState(false);

    let {
        state: { data, status },
    } = useFetch(search ? foodConfig(search) : {});

    let foods = data?.hits as FoodRes["hits"];

    const handleViewRecipe = (id: string) => {
        let selectedRecipe = foods.find(
            ({ recipe }) => recipe.uri.slice(53) === id
        );

        setShowRecipeModal(true);
        setRecipe(selectedRecipe);
    };

    const closeRecipeModal = () => {
        setShowRecipeModal(false);
    };

    const hanldeSearch = () => {
        if (!food) return;
        setSearch(food);
    };

    return (
        <StyledRecipes>
            <div className="container">
                <Form
                    food={food}
                    setFood={setFood}
                    hanldeSearch={hanldeSearch}
                />
                {status === "fetching" && <div>Loading...</div>}
                {status === "fetched" && foods && (
                    <>
                        <SearchResult
                            hits={foods}
                            handleViewRecipe={handleViewRecipe}
                        />
                        {showRecipeModal && (
                            <Modal
                                closeModal={closeRecipeModal}
                                title={recipe?.recipe.label!}
                            >
                                <Ingredients
                                    image={recipe!.recipe.image!}
                                    ingedientLines={
                                        recipe!.recipe.ingredientLines!
                                    }
                                />
                            </Modal>
                        )}
                    </>
                )}
            </div>
        </StyledRecipes>
    );
};

export default Index;
