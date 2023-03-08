import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Tooltip from "@mui/material/Tooltip";
import Rating from "@mui/material/Rating";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeProducts } from "../redux/product/productActions";

const CartContextUI=({activeList})=>{

    const state=useSelector((state)=>state.productState)
    const dispatch=useDispatch()
    
    const handleAdd=(element)=>{
        dispatch(addToCart(element))
    }
    const handleRemove=(id)=>{
        dispatch(removeProducts(id))
    }
    

    return(
        <>
            
                {activeList.map((element,index)=>{
                    return(
                    <Grid lg={4} md={6} xs={12} key={index}>
                    <Card >
                                    
                    <div style={{display:"flex",justifyContent:"center"}}> 
                        <img src={element.image} style={{height:"300px",width:"200px"}} alt=""/>
                    </div>
                    
                    <CardContent>
                    <Tooltip title={element.title}>
                    <div style={{ whiteSpace: "nowrap", }}>
                        <h5 style={{whiteSpace: "nowrap",textOverflow: "ellipsis",overflow:"hidden"}}>{element.title}</h5>
                    </div>
                    </Tooltip>
                    
                       <div style={{display:"flex",justifyContent:"space-between"}}>
                        <span><h5>₹{element.price}</h5></span> 
                        <span><Rating name="read-only" value={element.rating.rate} precision={0.1} readOnly/></span>
                        </div>
                        <div>
                        {state.cart.some((element1,i)=>{
                             return element1.id===element.id 
                             
                        })?<Button  className="cartButton" variant="contained" color="warning" size="large" onClick={()=>handleRemove(element.id)}>Remove From Cart</Button> 
                        :
                        <Button  className="cartButton" variant="contained" color="success" size="large" onClick={()=>handleAdd(element)}>Add To Cart</Button>

                        
                        } 
                        </div>
                    </CardContent>
                
            </Card>
            </Grid>)
                })
                               
                                }
                            
        </>
    )
}
export default CartContextUI;