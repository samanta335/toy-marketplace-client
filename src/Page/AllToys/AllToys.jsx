import { useEffect, useState } from "react";

const AllToys = () => {
  const [allToy, setAllToy] = useState([]);
  const [searchName, setSearchName] = useState([]);

  useEffect(() => {
    fetch("https://toy-zone-server-dusky.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => setAllToy(data));
  }, []);

  const handleSearch = () => {
    fetch(`https://toy-zone-server-dusky.vercel.app/nameSearch/${searchName}`)
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
              <th></th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="p-5">
            {allToy.map((toys, index) => (
              <tr key={toys._id}>
                <td>{index + 1}</td>
                <td>{toys.sellerName}</td>
                <td>{toys.name}</td>
                <td>{toys.category}</td>
                <td>{toys.price}</td>
                <td>{toys.Quantity}</td>
                <hr />
                <td>
                  <label htmlFor="my-modal" className="btn btn-primary">
                    View Details
                  </label>{" "}
                  <input
                    type="checkbox"
                    id="my-modal"
                    className="modal-toggle"
                  />
                  <div className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">{toys.name}</h3>
                      <p className="py-4">
                        Youve been selected for a chance to get one year of
                        subscription to use Wikipedia for free!
                      </p>
                      <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">
                          Yay!
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* <Details toys={toys}></Details> */}
                  {/* <Details toys={toys}> 
                    <Link to="/Teddy/details">view Details </Link>
                  </Details> */}
                </td>
              </tr>

              // <AllToysTable
              //   key={toys._id}
              //   toys={toys}
              //   index={index}
              // ></AllToysTable>
            ))}
          </tbody>
          <hr />
        </table>
      </div>
    </div>
  );
};

export default AllToys;
