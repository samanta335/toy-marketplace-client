const MyToystable = ({ myToy, index }) => {
  const { _id, sellerName, name, category, price, Quantity, description } =
    myToy;
  //   console.log(myToy);
  const handleDelete = (id) => {
    const proceed = confirm("sure");
    if (proceed) {
      fetch(`https://toy-zone-server-dusky.vercel.app//allToys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  return (
    <div>
      <tr>
        <td>{index + 1}</td>
        <td>{sellerName}</td>
        {/* <td>{myToy.image}</td> */}
        <td>{name}</td>
        <td>{category}</td>
        <td>{price} </td>
        <td>{Quantity} </td>
        <td>{description} </td>
        <td>
          <label htmlFor="my-modal" className="btn">
            Update
          </label>

          {/* <UpdateToy myToy={myToy} handleUpdate={handleUpdate}></UpdateToy> */}
        </td>
        <td className="btn btn-error" onClick={() => handleDelete(_id)}>
          Delete
        </td>
      </tr>
    </div>
  );
};

export default MyToystable;
