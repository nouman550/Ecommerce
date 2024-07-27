import axios from "axios";
import {ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ONE_PRODUCT_FAIL,
    ONE_PRODUCT_REQUEST,
    ONE_PRODUCT_SUCCESS,
    CV_REQUEST,
    CV_SUCCESS,
    CV_FAIL,
    DELETE_PRODUCT_FAIL,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAIL,
    ADD_PRODUCT_REQUEST,
    ADD_PRODUCT_SUCCESS,
    CLEAR_ERROS
} 
from "../constants/productConstant";


export const getProduct=()=>async (dispatch)=>{
    try {

        dispatch({
            type:ALL_PRODUCT_REQUEST
        })

       const {data}=await axios.get("/api/v1/products")
          
        dispatch({
            type:ALL_PRODUCT_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:ALL_PRODUCT_FAIL,
            payload:error.response.data.message
        })
    }
}


export const getOneProduct=(id)=>async (dispatch)=>{
    
    try {

        dispatch({
            type:ONE_PRODUCT_REQUEST
        })

       const {data}=await axios.get(`/api/v1/products/${id}`)
        
     

        dispatch({
            type:ONE_PRODUCT_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:ONE_PRODUCT_FAIL,
            payload:error.response.data.message
        })
    }
}



//it will clear errors 
export const clearErrors=()=>async (dispatch)=>{
    dispatch({
        type:CLEAR_ERROS
    })
}




// new cv action

export const submitCv=(name,email,description,cgpa,experience,university,mobile,idCard)=>async(dispatch)=>{
      
   
     try {

                           dispatch({
                          type:CV_REQUEST
         })
           
         const config={headers:{"Content-Type":"application/json"}}
          const {data}=await axios.post("/api/v1/admin/cv/new",{name,email,description,cgpa,experience,university,mobile,idCard},config)
         
      
 
         dispatch({
             type:CV_SUCCESS,
             payload:data.cv
         })
         
     } catch (error) {
         dispatch({
             type:CV_FAIL,
             payload:error.response.data.error
         })
     }

  }



  //DELETE A PRODUCT

  export const deleteProduct=(id)=>async (dispatch)=>{
    
    try {

        dispatch({
            type:DELETE_PRODUCT_REQUEST
        })

       const {data}=await axios.delete(`/api/v1/admin/products/${id}`)
        
     

        dispatch({
            type:DELETE_PRODUCT_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:DELETE_PRODUCT_FAIL,
            payload:error.response.data.message
        })
    }
}



//it will clear errors 

  //add A PRODUCT

  export const addNewProduct=(name,description,price,category)=>async (dispatch)=>{
    
    try {

        dispatch({
            type:ADD_PRODUCT_REQUEST
        })

        const config={headers:{"Content-Type":"application/json"}}
       const {data}=await axios.post("/api/v1/admin/products/new",{name,description,price,category},config)
        
     

        dispatch({
            type:ADD_PRODUCT_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:ADD_PRODUCT_FAIL,
            payload:error.response.data.message
        })
    }
}