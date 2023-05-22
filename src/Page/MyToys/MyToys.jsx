import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/toys/${user?.email}`)
      .then((result) => result.json())
      .then((data) => setMyToys(data));
  }, [user]);
  return (
    <div>
      <div className="overflow-x-auto pt-5">
        <table className="table table-compact w-full text-center ">
          <thead>
            <tr>
              <th>Seller Name</th>
              <th>Image</th>
              <th>Toy Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="p-5">
            {myToys.map((myToy) => (
              <tr key={myToy._id}>
                <td>{myToy.sellerName}</td>
                <td>{myToy.image}</td>
                <td>{myToy.name}</td>
                <td>{myToy.category}</td>
                <td>{myToy.price} </td>
                <td>{myToy.Quantity} </td>
                <td>{myToy.description} </td>
                <td className="btn btn-accent mr-5">Update</td>
                <td className="btn btn-error">Delete</td>
                <hr />
              </tr>
            ))}
          </tbody>
          <hr />
        </table>
      </div>
    </div>
  );
};

export default MyToys;
