import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink,useLocation,useNavigate } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux";




const TopNav=({cartItems})=>{

    const state=useSelector((state)=>state.productState)

    const{pathname}=useLocation()
    console.log(pathname)

    const navigate=useNavigate()
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          right: -3,
          top: 0,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
        },
      }));

    return(
        <>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    
                    <NavLink to={'/'}
                    className={(isActive)=>isActive.isActive? "activeClassName navLink":"navLink"}
                    >DayNightMode</NavLink>
                    <Link to={'/Products'}
                    className={["/Products"].includes(pathname)?"activeClassName navLink":"navLink"} 
                    >Products</Link>
                    <IconButton aria-label="cart"  sx={{color:'white'}} onClick={()=>navigate('/Cart',{state:state.product})}>
                    <StyledBadge badgeContent={state.cart.length} color="primary">
                        <ShoppingCartIcon />
                    </StyledBadge>
                    </IconButton>
                </Container>
            </Navbar>
        </>
    )
}
export default TopNav;