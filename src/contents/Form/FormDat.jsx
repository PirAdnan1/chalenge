import React, { useState } from "react";

function FormDat({ products }) {
  const [formData, setFormData] = useState({
    name: products.name || "",
    price: products.price || "",
    img: products.img || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send updated data to the API
      const response = await fetch("http://localhost:3000/api/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success
        console.log("Data updated successfully");
      } else {
        throw new Error("Failed to update data");
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <h1 className="text-4xl font-semibold">Put Items Up For Sale</h1>
      <form className="flex flex-col gap-y-3 mt-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="outline-none pl-3 py-3 rounded-md focus:outline-none border border-green-950 w-[350px] mx-auto"
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="outline-none pl-3 py-3 rounded-md focus:outline-none border border-green-950 w-[350px] mx-auto"
        />
        <input
          type="text"
          placeholder="Image URL"
          name="img"
          value={formData.img}
          onChange={handleChange}
          className="outline-none pl-3 py-3 rounded-md focus:outline-none border border-green-950 w-[350px] mx-auto"
        />
        <button type="submit" className="bg-green-800 text-white rounded-md py-2 px-2">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormDat;
