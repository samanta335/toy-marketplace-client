import { Link } from "react-router-dom";

const AllToysTable = ({ toys }) => {
  const { img, name, sub_category, price, available_quantity, seller_name } =
    toys;
  return (
    <tr>
      <td>{seller_name}</td>
      <img className="w-12 h-15 ml-32 mask mask-squircle" src={img} alt="" />
      <hr />
      <td>{name}</td>
      <td>{sub_category}</td>
      <td>{price}</td>
      <td className="pl-28">
        {available_quantity}
        <Link to="" className="text-purple-800 pl-16">
          View Details
        </Link>
      </td>
    </tr>
  );
};

export default AllToysTable;
