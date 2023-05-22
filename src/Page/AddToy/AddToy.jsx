import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const added = () => toast.success("Toy Added Done");

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  // console.log(watch);

  const onSubmit = (data) => {
    fetch("http://localhost:5000/addToy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    console.log(data);
  };

  return (
    <div className="grid grid-rows-1 p-20 text-center gap-4">
      <form onSubmit={handleSubmit(onSubmit)} className="">
        {errors.exampleRequired && <span>This field is required</span>}
        <label className="label">
          <input
            className="text-input input input-bordered"
            value={user?.email}
            {...register("postedBy")}
            placeholder="Your email"
            type="email"
          />
        </label>
        <label className="label">
          <input
            className="text-input input input-bordered"
            {...register("sellerName", { required: true })}
            placeholder="Seller Name"
          />
        </label>
        <label className="label">
          <input
            className="text-input input input-bordered"
            {...register("name")}
            placeholder="Toy Name"
          />
        </label>
        <label className="label">
          <input
            className="text-input input input-bordered"
            {...register("price", { required: true })}
            placeholder="Price"
          />
        </label>
        <label className="label">
          <input
            className="text-input input input-bordered"
            {...register("Quantity", { required: true })}
            placeholder="Quantity"
          />
        </label>
        {/* <label className="label">
          <input
            className="text-input input input-bordered"
            {...register("rating", { required: true })}
            placeholder="Rating"
          />
        </label> */}
        <label className="label ">
          <select
            className="text-input input input-bordered"
            {...register("category")}
          >
            <option>Bear Teddy </option>
            <option>Cat Teddy</option>
            <option>Panda Teddy</option>
            <option>Pikachu Teddy</option>
          </select>
        </label>

        <label className="label">
          <input
            className="text-input input input-bordered"
            {...register("image")}
            placeholder="image url"
            type="url"
          />
        </label>

        <label className="label">
          <input
            className="text-input input input-bordered"
            {...register("description")}
            placeholder="Description"
          />
        </label>
        <div>
          <input
            onClick={added}
            className="submit-btn bg-purple-800 text-white mt-10 px-20 py-2"
            value="Post Toy"
            type="submit"
          />
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddToy;
