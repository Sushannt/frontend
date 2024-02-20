import { data } from "./data.mjs";
import shopListing from "./models/shopListing.model.mjs";
import User from "./models/User.model.mjs";

import { connectDB } from "./config/db.mjs";

const importData = async () => {
  connectDB();

  try {
    // Delete existing shop listings
    await shopListing.deleteMany({});

    // Find the admin user
    const user = await User.findOne({ email: "admin@email.com" });

    // Add the admin user to each shop listing
    const sampleData = data.map((products) => {
      return { ...products, user: user._id }; // Assuming user._id is the ObjectId of the admin user
    });

    // Insert the sample data
    await shopListing.insertMany(sampleData);

    console.log("Data imported successfully");
  } catch (error) {
    console.error("Error importing data:", error);
    process.exit(1);
  }
};

importData();
