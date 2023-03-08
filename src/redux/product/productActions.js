import { ADD_TO_CART, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_INITIATED, FETCH_PRODUCTS_SUCCESS ,REMOVE_FROM_CART} from "./productTypes"

import axios from "axios";

export const fetchProductsInitiated=()=>{
    return{
        type:FETCH_PRODUCTS_INITIATED
    }
}

export const fetchProductsSuccess=(allProducts)=>{

    return{
        type:FETCH_PRODUCTS_SUCCESS,
        payload:allProducts
    }

}

export const fetchProductsFailure=(errMessage)=>{
    return{
        type:FETCH_PRODUCTS_FAILURE,
        payload:errMessage
    }
}

export const addToCart=(addedProds)=>{
    return{
        type:ADD_TO_CART,
        payload:addedProds
    }

}
export const removeProducts=(removeProds)=>{
    return{
        type:REMOVE_FROM_CART,
        payload:removeProds
    }
}

export const fetchProducts=()=>async(dispatch)=>{
    dispatch(fetchProductsInitiated())
    try{
        const response=await axios.get(process.env.REACT_APP_FETCH_PRODUCT);
        dispatch(fetchProductsSuccess(response.data));
        console.log(response)
    }
    catch(err){
        dispatch(fetchProductsFailure(err?.message));
    }

}