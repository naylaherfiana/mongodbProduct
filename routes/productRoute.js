import express from "express";
import { create, deleteProduct, getAllProducts, getProductById, updateProduct } from "../controller/productController.js";

const route = express.Router();

route.post("/create", create);
route.get("/show", getAllProducts);
route.get("/find/:id", getProductById);
route.put("/update/:id", updateProduct);
route.delete("/delete/:id", deleteProduct);

export default route;
