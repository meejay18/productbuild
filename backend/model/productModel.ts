import { model, Schema } from "mongoose";
import { Document } from "mongoose";

interface iProduct {
  price: string;
  category: string;
  productName: string;
  avatar: string;
  size: string;
}

interface iProductData extends iProduct, Document {}

const productModel = new Schema<iProductData>({
  price: {
    type: String,
  },
  category: {
    type: String,
  },
  productName: {
    type: String,
  },
  avatar: {
    type: String,
  },
  size: {
    type: String,
  },
});

export default model<iProductData>("products", productModel);
