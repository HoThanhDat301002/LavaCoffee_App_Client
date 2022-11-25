import axiosInstance from "../utils/axios";
import constants from "../utils/constants";
// get Banner
export const getProducts = async () => {
    const res = await axiosInstance.get('/api/products');
    return res;
};