import { Router } from "express";
import { createProduct } from "../controller/shoeController/productController";
import { addNewProduct } from "../controller/shoeController/productController";

const router: any = Router();

router.route("/create-product").post(createProduct);
router.route("/add-new-product").post(addNewProduct);

export default router;
