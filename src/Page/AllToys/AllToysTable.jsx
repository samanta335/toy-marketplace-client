import { Link } from "react-router-dom";

const AllToysTable = ({ toys }) => {
  const { name, Quantity, sellerName, price, category } = toys;
  return (
    <tr>
      <td>{sellerName}</td>
      <td>{name}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{Quantity}</td>
      <hr />
      <Link to="/Teddy/toyDetails" className="text-purple-800">
        View Details
      </Link>
    </tr>
  );
};

export default AllToysTable;
