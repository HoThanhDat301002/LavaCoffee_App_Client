import axiosInstance from "../utils/axios";
import constants from "../utils/constants";
// get Banner
export const getBanner = async () => {
    const res = await axiosInstance.get('/api/banner');
    return res;
}

export const getProducts = async () => {
    const res = await axiosInstance.get('/api/products');
    return res;
}

export const getProductId = async (id) => {
    const res = await axiosInstance.get(`/api/products/${id}/detail`);
    return res;
  };

export const getCategories = async () => {
    const res = await axiosInstance.get('/api/categories');
    return res;
};