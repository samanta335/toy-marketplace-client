import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative">
      <img
        className="w-full rounded-xl mt-3 "
        src="https://t3.ftcdn.net/jpg/05/71/49/22/360_F_571492234_iQMyxcAVpFaS1JNczL94nU5OBFdHjd3L.jpg"
        alt=""
      />
      <div className="absolute text-xl font-semibold  text-white bottom-28  left-1/2 -translate-x-1/2">
        <h2 className="text-center text-4xl text-pink-600 mb-3">Teddies</h2>
        <p>
          A teddy bear is a type of toy that looks like a bear. The teddy bear
          is normally a cub or baby bear. In Russia, bears were used as
          childrens toys for many years before they became popular in the United
          States.The teddy bear in Russia has been the subject of folklore or
          stories for many years.
        </p>
        <div>
          <Link to="/error" className="btn btn-error ">
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
