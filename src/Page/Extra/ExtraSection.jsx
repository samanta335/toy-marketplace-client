import { useEffect, useState } from "react";

const ExtraSection = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://toy-zone-server-dusky.vercel.app/toysData")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="container grid grid-cols-3 m-auto pt-5">
      {data.map((toys) => (
        <div key={toys._id}>
          <div className="  card w-96 bg-base-100 shadow-xl mt-5">
            <figure>
              <img src={toys.img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <p>Name: {toys.name}</p>

              <p>Price: {toys.price}</p>
              <p>Category: {toys.sub_category}</p>
              <p>Description:{toys.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExtraSection;
