import express from 'express';
import {
    getProducts, 
    getProduct,
    addProduct,
    editProduct,
    remove


} from '../productController/productController.js';

console.log("routes is ready to use");
const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", addProduct);
router.put("/:id", editProduct);
router.delete("/:id", remove);

export default router;
