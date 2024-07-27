import { Sidebar, Menu, MenuItem,SubMenu  } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import "../Component/Sidebar.css";

const Sidebars = () =>{
   

    const sideBarStyle={
        backgroundColor:'#333333',
        color: 'white',
        padding:'20px',
        borderRadius: '20px',
        boxShadow : '5px 5px 10px 2px rgba(0, 0, 0, 0.5)'
    }

    const sideBar={
        padding:'20px',
        width:'280px',
        borderRadius: '20px'
    }

 

    return (

        <>
        <Sidebar  style={sideBar}>
  <Menu  style={sideBarStyle}
          
    menuItemStyles={{
      button: {

        backgroundColor:'#333333',
        fontFamily: 'Roboto, sans-serif',
        borderRadius: '20px',
        '&:hover': {
            backgroundColor: '#48556a', // Change this to your desired color
            color: 'white' // Change this to your desired text color
          },
        // the active class will be added automatically by react router
        // so we can use it to style the active menu item
        [`&.active`]: {
          backgroundColor: '#333333',
          color: '#b6c8d9',
        },
      },
      MenuItem:{
       
      }
      
    }}
  >
    <MenuItem component={<Link to="/Dashboard" />}  > Dashboard</MenuItem> 
    <SubMenu label="Users">
    <MenuItem component={<Link to="/admin/users/" />}  ><PersonIcon className='icon-menu'/> All User </MenuItem>
    </SubMenu>
   
    <MenuItem component={<Link to="/admin/products" />} > All Products</MenuItem>
    <MenuItem component={<Link to="/admin/add/product" />} > Add new product </MenuItem>
       
    <MenuItem component={<Link to="/calendar" />} > Calendar</MenuItem>
    <MenuItem component={<Link to="/e-commerce" />} > E-commerce</MenuItem>

       
    <MenuItem component={<Link to="/calendar" />} > Calendar</MenuItem>
    <MenuItem component={<Link to="/e-commerce" />} > E-commerce</MenuItem>
  </Menu>
</Sidebar>;
        </>
    )

}

export default Sidebars



