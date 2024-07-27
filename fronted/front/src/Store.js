import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { productDetailsReducers, productReducers,newCvReducers, addProductReducers } from "./reducers/productReducers";
import { newUserReducers, userReducers,updatePasswordReducers,adminUserReducers, deleteUserByAdmin, userDetailsReducers} from "./reducers/userReducers";


const reducer=combineReducers({
products:productReducers,
productDetails:productDetailsReducers,
user:userReducers,
newUser:newUserReducers,
updatePassword:updatePasswordReducers,
adminUsers:adminUserReducers,
cvReducer:newCvReducers,
deleteUser:deleteUserByAdmin,
userDetails: userDetailsReducers,
newProduct:addProductReducers
});

let initialState={}

const middleware=[thunk]

const store=createStore(reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)))


    export default store;