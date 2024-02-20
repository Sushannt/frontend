import shopListing from "../models/shopListing.model.mjs";

export const getAllProducts = async (req, res) => {
  const { range } = req.query;
  try {
    const data = await shopListing.find({ price: { $lte: range } });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await shopListing.findOne({ _id: id });

    if (!product) {
      return res
        .status(404)
        .json({ message: "No Product Found with given ID." });
    }

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// CRUD Operations
export const addNewProduct = async (req, res) => {
  const user = req.user._id;
  const { title, category, description, price } = req.body;

  try {
    if (!title || !category || !description || !price) {
      return res.status(400).json({ message: "Please provide all fields" });
    }

    const newProduct = new shopListing({
      title,
      category,
      description,
      price,
      user,
    });

    await newProduct.save();
    return res
      .status(201)
      .json({ message: "Product Created Successfully!", newProduct });
  } catch (error) {
    return res.status(500).json({ message: "Server error while creating" });
  }
};

export const deleteProduct = async (req, res) => {
  const { productId } = req.params;

  try {
    const product = await shopListing.findByIdAndDelete(productId);
    if (!product) {
      return res
        .status(404)
        .json({ message: "No Product Found with given ID" });
    }

    return res.status(200).json({ message: "Deleted Successfully!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
