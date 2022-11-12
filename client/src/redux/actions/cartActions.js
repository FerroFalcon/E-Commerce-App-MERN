import axios from 'axios'


export const addItem = (id, units) => async (dispatch, getState) => {
 try {
   const { data } = await axios.get(`/api/products/${id}`);
   dispatch({
     type: 'CART_ADD_ITEM',
       payload: {
       productName: data.productName,
       brand: data.brand,
       price: data.price,
       quantity: data.quantity,
       productImg: data.image,
       units,
     },
   });
 } catch (error) {
   console.log(error);
 }
};



export const removeItem = (id) => async (dispatch, getState) => {
 try {
   dispatch({
     type: 'CART_REMOVE_ITEM',
     payload: id,
   });
 } catch (error) {
   console.log(error);
 }
};




export const saveShippingAddress = (data) => async (dispatch) => {
 try {
   dispatch({
     type: 'CART_SAVE_SHIPPING_ADDRESS',
     payload: data,
   });
 } catch (error) {
   console.log(error);
 }
};

export const savePaymentMethod = (data) => async (dispatch) => {
 try {
   dispatch({
     type: 'CART_SAVE_PAYMENT_METHOD',
     payload: data,
   });
 } catch (error) {
   console.log(error);
 }
};