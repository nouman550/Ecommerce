import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../Loader";
import { useAlert } from "react-alert";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Sidebars from "../../Component/Sidebar";
import { addNewProduct, clearErrors } from "../../actions/productAction";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [hover, setHover] = useState(false);

  const { loading, error, success } = useSelector((state) => state.newProduct);

  const dispatch = useDispatch();
  const alert = useAlert();

  const productSubmit = (e) => {
    e.preventDefault();
 
    dispatch(addNewProduct(productName,productDesc,productPrice,productCategory));
  };

  const dataGridStyle = {
    height: "500px", // Adjust the height as needed
    width: "820px",
    overflowY: "auto",
    marginTop: "40px",
   
  };
  const filedStyle={
    width:"450px",
    height:"55px",
    marginTop:"20px",
    paddingLeft: '60px'
  }

const   iconStyle={
    
    fontSize: "35px",
    zIndex: "2",
    left:"50px",
    position:"relative",
    top:"10px"
  }

  const Sidestyle = {
    height: "500px",
    overflowY: "auto",
    marginTop: "20px",
  };

  const buttonStyle={
    width:"520px",
    height:"55px",
    marginTop:"40px",
    marginLeft:"30px",
    backgroundColor:hover? "red":"black",
    color:"white"

  }

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Product added successfully!");
      // Reset form fields after successful addition
      setProductName("");
      setProductCategory("");
      setProductPrice("");
      setProductDesc("");
    }
  }, [dispatch, error, success, alert]);

  return (
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={3} sx={Sidestyle}>
            <Sidebars />
          </Grid>
          <Grid item xs={9} sx={dataGridStyle}>
            {loading ? (
              <LoadingSpinner />
            ) : (
              <div className="product-block" style={{marginLeft:"250px",marginTop:"50px"}}>
                <form
                  className="productForm"
                  onSubmit={productSubmit}
                  encType="multipart/form-data"
                >
                  <div className="productname" >
                    <PersonIcon style={iconStyle}/>
                    <input style={filedStyle}
                      type="text"
                      placeholder="Enter product name"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                    />
                  </div>

                  <div className="Category">
                    <EmailIcon  style={iconStyle}/>
                    <input style={filedStyle}
                      type="text"
                      placeholder="Enter product category"
                      value={productCategory}
                      onChange={(e) => setProductCategory(e.target.value)}
                    />
                  </div>

                  <div className="product-price">
                    <LockIcon style={iconStyle}/>
                    <input style={filedStyle}
                      type="number"
                      placeholder="Enter product price"
                      value={productPrice}
                      onChange={(e) => setProductPrice(e.target.value)}
                    />
                  </div>

                  <div className="product-desc">
                    <LockIcon style={iconStyle}/>
                    <input style={filedStyle}
                      type="text"
                      placeholder="Enter product description"
                      value={productDesc}
                      onChange={(e) => setProductDesc(e.target.value)}
                    />
                  </div>

                  <Button style={buttonStyle}
                    onMouseEnter={() => setHover(true)} 
                    onMouseLeave={() => setHover(false)} 
                    className="btn-product-create"
                    type="submit"
                    disabled={loading}
                    endIcon={<SendIcon className="buton-icon" />}
                  >
                    Create Product
                  </Button>
                 
                </form>
              </div>
            )}
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default AddProduct;
