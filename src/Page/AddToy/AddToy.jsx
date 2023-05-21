import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form";

const AddToy = () => {
  const { user } = useContext(AuthContext);
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
    <div className="grid grid-cols-1 p-20 text-center gap-4">
      <form onSubmit={handleSubmit(onSubmit)} className="">
        {errors.exampleRequired && <span>This field is required</span>}
        <label className="label">
          <input
            className="text-input"
            {...register("name")}
            placeholder="Name"
          />
        </label>
        <label className="label">
          <input
            className="text-input"
            value={user?.email}
            {...register("postedBy")}
            placeholder="your email"
            type="email"
          />
        </label>
        <label className="label">
          <input
            className="text-input"
            {...register("sellerName", { required: true })}
            placeholder="Seller Name"
          />
        </label>
        <label className="label">
          <input
            className="text-input"
            {...register("price", { required: true })}
            placeholder="Price"
          />
        </label>
        <label className="label">
          <input
            className="text-input"
            {...register("Quantity", { required: true })}
            placeholder="Quantity"
          />
        </label>
        <label className="label">
          <select className="text-input" {...register("category")}>
            <option>Bear Teddy </option>
            <option>Cat Teddy</option>
            <option>Panda Teddy</option>
            <option>Pikachu Teddy</option>
          </select>
        </label>

        <label className="label">
          <input
            className="text-input"
            {...register("image")}
            placeholder="image url"
            type="url"
          />
        </label>

        <label className="label">
          <input
            className="text-input"
            {...register("description")}
            placeholder="Description"
          />
        </label>
        <div>
          <input
            className="submit-btn bg-purple-800 text-white mt-10 px-20 py-2"
            value="Added Toy"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default AddToy;
