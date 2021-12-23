import { Dispatch, FC } from "react";
import { StyledForm } from "./styles";

export interface IForm {
    food: string;
    hanldeSearch: () => void;
    setFood: Dispatch<React.SetStateAction<string>>;
}

const Form: FC<IForm> = ({ food, hanldeSearch, setFood }) => {
    return (
        <StyledForm
            onSubmit={(e) => {
                e.preventDefault();
                hanldeSearch();
            }}
        >
            {/* <div> */}
            <input
                type="search"
                name="search"
                id="search"
                placeholder="search"
                aria-label="search"
                value={food}
                onChange={(e) => setFood(e.target.value)}
            />
            {/* </div> */}
            <button type="submit">search</button>
        </StyledForm>
    );
};

export default Form;
