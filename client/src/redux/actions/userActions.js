import axios from 'axios'; 

export const userLogin=(reqObj)=>async dispatch=>{
    
 dispatch({type: 'LOADING' , payload:true})

 try {
     const response = await axios.post('/api/users/login' , reqObj)
     localStorage.setItem('user' , JSON.stringify(response.data))
    
     // toast here !
     dispatch({type: 'LOADING' , payload:false})
     setTimeout(() => {
         window.location.href='/'
     }, 500);
 } catch (error) {
     console.log(error)
    // error toast here 
     dispatch({type: 'LOADING' , payload:false})
 }
}

export const userRegister=(reqObj)=>async dispatch=>{
    
 dispatch({type: 'LOADING' , payload:true})

 try {
     await axios.post('/api/users/register' , reqObj)
     // successs toast 
     setTimeout(() => {
         window.location.href='/login'
      
     }, 500);
    
     dispatch({type: 'LOADING' , payload:false})
     
 } catch (error) {
     console.log(error)
     // error toast here 
     dispatch({type: 'LOADING' , payload:false})
 }
}