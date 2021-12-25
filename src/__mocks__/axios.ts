import { hits } from "../mockdata/searchFood";

const mockResponse = {
    data: {
        results: [...hits],
    },
};

const Axios = {
    get: jest.fn().mockReturnValue(mockResponse),
};

export default Axios;
