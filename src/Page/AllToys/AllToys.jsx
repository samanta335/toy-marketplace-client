import { useEffect, useState } from "react";
import AllToysTable from "./AllToysTable";

const AllToys = () => {
  const [allToy, setAllToy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => setAllToy(data));
  }, []);

  return (
    <div className="overflow-x-auto pt-5">
      <table className="table table-compact w-full text-center ">
        <thead>
          <tr>
            <th>Seller Name</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="p-5">
          {allToy.map((toys) => (
            <AllToysTable key={toys._id} toys={toys}></AllToysTable>
          ))}
        </tbody>
        <hr />
      </table>
    </div>
  );
};

export default AllToys;
