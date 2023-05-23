import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`https://toy-zone-server-dusky.vercel.app/toys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user]);

  // const handleUpdate = (data) => {
  //   fetch(`https://toy-zone-server-dusky.vercel.app/allToys/${data._id}`, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json())
  //     .then((result) => console.log(result));
  //   console.log(data);
  // };

  return (
    <div>
      <div className="pt-5">
        <table className="table table-compact w-full text-center ">
          <thead>
            <tr>
              <th></th>
              <th>Seller Name</th>
              {/* <th>Image</th> */}
              <th>Toy Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Description</th>
              <th>Action</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="p-5">
            {myToys.map((myToy, index) => (
              <tr key={myToy._id}>
                <td>{index + 1}</td>
                <td>{myToy.sellerName}</td>
                {/* <td>{myToy.image}</td> */}
                <td>{myToy.name}</td>
                <td>{myToy.category}</td>
                <td>{myToy.price} </td>
                <td>{myToy.Quantity} </td>
                <td>{myToy.description} </td>
                <td>
                  <label htmlFor="my-modal" className="btn btn-accent">
                    Update
                  </label>
                </td>
                <td className="btn btn-error">Delete</td>
              </tr>

              // <MyToystable
              //   key={myToy._id}
              //   myToy={myToy}
              //   index={index}
              //   handleUpdate={handleUpdate}
              // ></MyToystable>

              // {/* <Link onClick={handleUpdate}>Update</Link> */}
              // {/* <UpdateToy
              //   myToy={myToy}
              //   handleUpdate={handleUpdate}
              // ></UpdateToy> */}
            ))}
          </tbody>
          <hr />
        </table>
      </div>
    </div>
  );
};

export default MyToys;
