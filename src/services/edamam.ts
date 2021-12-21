import { AxiosRequestConfig, Method } from "axios";

export const foodConfig = (
    query: string,
    method = "GET" as Method
): AxiosRequestConfig => ({
    method: method,
    url: `https://api.edamam.com/api/recipes/v2?type=public&app_id=${process.env.REACT_APP_FOOD_APP_ID}&app_key=${process.env.REACT_APP_FOOD_APP_KEY}&q=${query}`,
});
