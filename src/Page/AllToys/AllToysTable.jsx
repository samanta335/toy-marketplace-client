const AllToysTable = ({ toys, index }) => {
  const { name, Quantity, sellerName, price, category } = toys;
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box"></div>
      </div>
    </div>
  );
};

export default AllToysTable;
