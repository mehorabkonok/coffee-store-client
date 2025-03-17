import React from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  console.log(coffee);
  const { _id, name, chef, taste, photo_url } = coffee;
  console.log("Coffee id: ", _id);

  const handleDelete = (_id) => {
    console.log("Delete btn clicked of the id: ", _id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Delete operation confirmed.");
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Status: ", data);
            console.log("Data.deletedCount: ", data.deletedCount);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id);
              setCoffees(remaining);
            }
          });
      } else {
        console.log("Delete operation cancelled.");
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl flex flex-row border-2 border-red-500">
      <figure className="border-2 border-red-500 w-1/3">
        <img src={photo_url} alt="Coffee" />
      </figure>
      <div className="card-body flex flex-row border-2 border-red-500 items-center justify-end">
        <div className="border-2 border-red-500 text-start">
          <p>Name: {name}</p>
          <p>Chef: {chef}</p>
          <p>Taste: {taste}</p>
        </div>
        <div className="border-2 border-green-500 flex flex-col gap-2 p-2">
          <div className="join join-vertical">
            <button className="btn join-item ">
              <FaEye />
            </button>
            <Link to={`updateCoffee/${_id}`}>
              <button className="btn join-item bg-blue-400 text-white">
                <FaPen />
              </button>
            </Link>

            <button
              onClick={() => handleDelete(_id)}
              className="btn join-item bg-red-500 text-white"
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
