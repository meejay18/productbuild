import { Response, Request } from "express";

import productModel from "../model/productModel";

export const createProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { productName, category, price, avatar, size } = req.body;

    const product = await productModel.create({
      productName,
      price,
      category,
      avatar,
      size,
    });

    return res.status(201).json({
      message: "Product created successfully",
      data: product,
      status: 201,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "Error",
      data: error.message,
      status: 404,
    });
  }
};

export const addNewProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const [productName, category, price, avatar, size] = req.body;
    const product = await productModel.create({
      productName,
      price,
      category,
      avatar,
      size,
    });
    return res.status(201).json({
      message: "product added successfully",
      status: 201,
      data: product,
    });
  } catch (error) {
    return res.status(404).json({
      message: "error adding a new product",
      status: 404,
    });
  }
};
