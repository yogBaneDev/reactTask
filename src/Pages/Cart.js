import React from "react";
import { useSelector } from "react-redux";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import CartContextUI from "../Shared/CartContextUI";
import TopNav from "../Shared/TopNav";
import { useLocation } from "react-router-dom";
const Cart=()=>{

    const state=useSelector((state)=>state.productState)
    const pathname=useLocation()
    console.log(pathname)

    return(
        <>
            <TopNav/>
            <div style={{marginTop:"100px"}}>
            <Container>
                { state.cart.length===0?<h1>No items in cart</h1>:
                <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    
                            <CartContextUI activeList={state.cart} />
                        
                    
                </Grid>
                }
            </Container>
            </div>
            
        </>
    )

}
export default Cart;