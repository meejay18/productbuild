import { Router } from "express";
import { createProduct } from "../controller/productController";
import { addNewProduct } from "../controller/productController";

const router: any = Router();

router.route("/create-product").post(createProduct);
router.route("/add-new-product").post(addNewProduct);

export default router;
