import { useEffect, useState } from "react";

const ViewDetails = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/allToys`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  return (
    <div>
      <h5>{details.name}</h5>
    </div>
  );
};

export default ViewDetails;
