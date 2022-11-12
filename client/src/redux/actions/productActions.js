import axios from "axios";

export const getAllProducts = () => async (dispatch) => {
  try {
    const response = await axios.get("/product");
    dispatch({ type: "GET_ALL_PRODUCTS", payload: response.data });
  } catch (err) {
    console.log(err);
  }
};
