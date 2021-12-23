export interface Ingredients {
    text: string;
    quantity: number;
    measure: string;
    food: string;
    weight: number;
    foodCategory: string;
    foodId: string;
    image: string;
}

export interface FoodImg {
    url: string;
    width: number;
    height: number;
}

export interface Food {
    uri: string;
    label: string;
    image: string;
    images: {
        THUMBNAIL: FoodImg;
        SMALL: FoodImg;
        REGULAR: FoodImg;
    };
    ingredientLines: string[];
    ingredients: Ingredients[];
    source: string;
    id: string;
}

export interface Recipe {
    recipe: Food;
    _links: Object;
}

export interface FoodRes {
    from: number;
    to: number;
    count: number;
    links: Object;
    hits: Recipe[];
}
