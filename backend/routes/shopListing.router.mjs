import express from "express";
import {
  getAllProducts,
  addNewProduct,
  deleteProduct,
} from "../controllers/shopListing.controller.mjs";
import { isAuthenticatedUser } from "../middleware/authMiddleware.mjs";

const router = express.Router();

router.get("/", getAllProducts);
router.post("/listings/add", isAuthenticatedUser, addNewProduct);
router.delete(
  "/listings/delete/:productId",
  isAuthenticatedUser,
  deleteProduct
);

export default router;
