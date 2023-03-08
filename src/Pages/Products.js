import React from "react";
import TopNav from "../Shared/TopNav";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../redux/product/productActions";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import CartContextUI from "../Shared/CartContextUI";
const Products=()=>{

    const state=useSelector((state)=>state.productState);
    
    console.log(state.product)
    
    
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])

    return(
        <>
            <TopNav/>
            <div style={{display:"flex",justifyContent:"center"}}>
            {/* <SpinnerDiamond enabled={loader} size={90} thickness={171} speed={100} color="rgba(124, 57, 172, 1)" secondaryColor="rgba(172, 170, 57, 0.44)" style={{tex
            :"center"}}/> */}
            <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={state.loading}
        
      >
        <CircularProgress color="inherit" />
      </Backdrop>
            </div>
            <div style={{marginTop:"100px"}}>
            <Container>
                <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    
                        
                            <CartContextUI activeList={state.product} />
                        
                    
                </Grid>
            </Container>
            </div>
            
        
        </>
    )
}
export default Products;