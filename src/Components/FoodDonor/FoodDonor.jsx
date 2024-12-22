import React, { useState } from "react";
import "./FoodDonor.css";

const FoodDonor = () => {
  const [donorName, setDonorName] = useState("");
  const [foodType, setFoodType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [products, setProducts] = useState([]); // Local list of products

  const handleAddMore = () => {
    if (!donorName || !foodType || !quantity) {
      alert("Please fill all fields before adding another product.");
      return;
    }

    const newProduct = {
      donorName,
      foodType,
      quantity,
      date: new Date().toLocaleDateString(),
      status: "Pending", // Add status for pending donations
    };

    setProducts((prevProducts) => [...prevProducts, newProduct]); // Add product to local list
    setFoodType("");
    setQuantity("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!donorName) {
      alert("Please fill in the donor name.");
      return;
    }

    if (products.length === 0 && (!foodType || !quantity)) {
      alert("Please fill all fields before submitting.");
      return;
    }

    const finalProducts =
      products.length > 0
        ? products
        : [
            {
              donorName,
              foodType,
              quantity,
              date: new Date().toLocaleDateString(),
              status: "Pending", // Add status for pending donations
            },
          ];

    try {
      // Send data to the backend
      const response = await fetch("http://localhost:8800/donations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalProducts),
      });

      if (!response.ok) {
        throw new Error("Failed to submit donations");
      }

      alert("Donation(s) added successfully!");

      setProducts([]); // Clear local list
      setDonorName("");
      setFoodType("");
      setQuantity("");
    } catch (error) {
      console.error("Error submitting donations:", error);
      alert("Error submitting donations.");
    }
  };

  return (
    <div className="food-donor">
      <h2>Add Donation</h2>
      <form>
        <label>
          Donor Name:
          <input
            type="text"
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
            required
            disabled={products.length > 0} // Lock donor name after the first product
          />
        </label>
        <label>
          Food Type:
          <input
            type="text"
            value={foodType}
            onChange={(e) => setFoodType(e.target.value)}
            required
          />
        </label>
        <label>
          Quantity:
          <input
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </label>
        <div className="buttons">
          <button type="button" onClick={handleAddMore}>
            Add More
          </button>
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>

      {products.length > 0 && (
        <div className="product-list">
          <h3>Products to be submitted:</h3>
          <ul>
            {products.map((product, index) => (
              <li key={index}>
                <strong>Food Type:</strong> {product.foodType}, <strong>Quantity:</strong>{" "}
                {product.quantity}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FoodDonor;
