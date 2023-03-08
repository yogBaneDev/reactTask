import { ADD_TO_CART,FETCH_PRODUCTS_FAILURE,FETCH_PRODUCTS_INITIATED,FETCH_PRODUCTS_SUCCESS, REMOVE_FROM_CART } from "./productTypes"

const initialState={
    product:[],
    cart:[],
    loading:false,
    error:""
}

const productReducer=(state=initialState,action)=>{

    switch(action.type){

        case FETCH_PRODUCTS_INITIATED:
            return{
                ...state,
                loading:true
            }
        
        case FETCH_PRODUCTS_SUCCESS:
            return{
                ...state,
                loading:false,
                product:action.payload,
                error:''
            }
        case FETCH_PRODUCTS_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload,
                cart:[],
                product:[]
            }
        case ADD_TO_CART:
            return{
                ...state,
                cart:[...state.cart,action.payload]
            }
        case REMOVE_FROM_CART:
            return{
                ...state,
                cart:state.cart.filter((ele)=>{return ele.id!==action.payload})
            }

        default:return state
    }


}
export default productReducer;