const initialData = {
  products : [],
};

export const productReducer = (state=initialData, action)=>{
 switch(action.type)
 {
     case 'GET_ALL_PRODUCTS' : {
         return{
             ...state,
             products : action.payload
         }
     }
     
     default:return state
 }

}