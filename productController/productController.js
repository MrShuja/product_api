import {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from '../models/productModel.js';

export const getProducts = async (req, res)=>{
    try {
        const products = await getAllProducts();
        res.status(201).json({data:products})
    } catch (error){
        res.status(500).json({error:error.message});
    }
};

export const getProduct = async (req, res)=>{
    try {
        const product = await getProductById(req.params.id);
        res.status(201).json({data:product})
    } catch (error){
        res.status(500).json({error:error.message});
    }
};

export const addProduct = async (req, res)=>{
    try {
        const newProduct = await createProduct(req.body);
        res.status(201).json(newProduct); 
    } catch (error){
        res.status(500).json({error:error.message});
    }
};

export const editProduct = async (req, res)=>{
    try {
        const updated = await updateProduct(req.params.id, req.body)
        res.json(updated);
    } catch(error){
        res.status(500).json({error:error.message});
    }
};

export const remove = async (req, res)=>{
    try {
        await deleteProduct(req.params.id);
        res.json("The product has been deteted")
    } catch(error){
        res.status(500).json({error:error.message});
    }
}