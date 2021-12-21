import { FC } from "react";
import { FoodRes } from "../../interfaces";
import { foodConfig } from "../../services/edamam";
import { useFetch } from "./../../Hooks/useFetch";
import { StyledPopular } from "./Styles";

const PopularFood: FC = () => {
    let {
        state: { data },
    } = useFetch(foodConfig("chicken"));

    let foods = data?.hits as FoodRes["hits"];
    let popular = foods?.slice(0, 10) as FoodRes["hits"];

    return (
        <StyledPopular>
            <div className="container">
                <header>
                    <h2>Popular Food</h2>
                    <p>
                        We provide a variety of food recipes with high taste
                        from our backend
                    </p>
                </header>
                <ul>
                    {popular &&
                        popular.map(({ _links, recipe }, i) => (
                            <li key={i + 1}>
                                <figure>
                                    <img
                                        src={recipe.images.THUMBNAIL.url}
                                        alt=""
                                    />
                                </figure>
                            </li>
                        ))}
                </ul>
            </div>
        </StyledPopular>
    );
};

export default PopularFood;
