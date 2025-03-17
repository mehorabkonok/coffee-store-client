import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, category, taste, details, photo_url } =
    coffee;

  const handleUpdatedCoffee = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const photo_url = form.photo_url.value;

    const newCoffee = {
      name,
      chef,
      supplier,
      category,
      taste,
      details,
      photo_url,
    };

    console.log(newCoffee);

    // send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    // form.reset();
  };

  return (
    <div className="bg-[#f4f3f0] p-24">
      <h2 className="text-3xl font-extrabold">Add coffee</h2>
      <form onSubmit={handleUpdatedCoffee}>
        {/* name chef form row */}
        <div className="flex border-2 justify-center border-x-green-600 gap-2">
          <div className="flex flex-col p-2 border-2 border-red-500 w-full">
            <label htmlFor="info_1" className="text-start">
              Name
            </label>
            <input
              type="text"
              id="info_1"
              placeholder="Type here"
              className="input input-bordered w-auto"
              name="name"
              defaultValue={name}
            />
          </div>
          <div className="flex flex-col p-2 border-2 border-red-500 w-full">
            <label htmlFor="info_1" className="text-start">
              Chef
            </label>
            <input
              type="text"
              id="info_1"
              placeholder="Type here"
              className="input input-bordered w-auto "
              name="chef"
              defaultValue={chef}
            />
          </div>
        </div>
        {/* Supplier taste form row */}
        <div className="flex border-2 justify-center border-x-green-600 gap-2">
          <div className="flex flex-col p-2 border-2 border-red-500 w-full">
            <label htmlFor="info_1" className="text-start">
              Supplier
            </label>
            <input
              type="text"
              id="info_1"
              placeholder="Type here"
              className="input input-bordered w-auto"
              name="supplier"
              defaultValue={supplier}
            />
          </div>
          <div className="flex flex-col p-2 border-2 border-red-500 w-full">
            <label htmlFor="info_1" className="text-start">
              Taste
            </label>
            <input
              type="text"
              id="info_1"
              placeholder="Type here"
              className="input input-bordered w-auto "
              name="taste"
              defaultValue={taste}
            />
          </div>
        </div>
        {/* Category details form row */}
        <div className="flex border-2 justify-center border-x-green-600 gap-2">
          <div className="flex flex-col p-2 border-2 border-red-500 w-full">
            <label htmlFor="info_1" className="text-start">
              Category
            </label>
            <input
              type="text"
              id="info_1"
              placeholder="Type here"
              className="input input-bordered w-auto"
              name="category"
              defaultValue={category}
            />
          </div>
          <div className="flex flex-col p-2 border-2 border-red-500 w-full">
            <label htmlFor="info_1" className="text-start">
              Details
            </label>
            <input
              type="text"
              id="info_1"
              placeholder="Type here"
              className="input input-bordered w-auto "
              name="details"
              defaultValue={details}
            />
          </div>
        </div>
        <div className="flex border-2 justify-center border-x-green-600 gap-2">
          <div className="flex flex-col p-2 border-2 border-red-500 w-full">
            <label htmlFor="info_1" className="text-start">
              Photo url
            </label>
            <input
              type="text"
              id="info_1"
              placeholder="Type here"
              className="input input-bordered w-auto"
              name="photo_url"
              defaultValue={photo_url}
            />
            <input
              className="btn btn-primary my-4"
              type="submit"
              value="Update Coffee"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
