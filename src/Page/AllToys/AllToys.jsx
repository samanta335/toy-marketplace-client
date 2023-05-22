import { useEffect, useState } from "react";
import AllToysTable from "./AllToysTable";

const AllToys = () => {
  const [allToy, setAllToy] = useState([]);
  const [searchName, setSearchName] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => setAllToy(data));
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:5000/nameSearch/${searchName}`)
      .then((res) => res.json())
      .then((data) => {
        setAllToy(data);
      });
  };

  return (
    <div>
      <div className="text-center">
        <input
          onChange={(e) => setSearchName(e.target.value)}
          type="text"
          placeholder="Search with Toy Name"
          className="input input-bordered input-info w-full mt-5 mx-auto max-w-xs"
        />
        <button className="btn btn-primary ml-3" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="overflow-x-auto pt-10">
        <table className="table table-compact w-full text-center ">
          <thead>
            <tr>
              <th>Seller Name</th>
              <th>Toy Name</th>
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
    </div>
  );
};

export default AllToys;
