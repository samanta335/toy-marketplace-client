import { useForm } from "react-hook-form";

const UpdateToy = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  //   const onSubmit = (data) => console.log(data);

  //   console.log(watch("example"));
  //   console.log(props.myToy);
  const { handleUpdate } = props;

  //   console.log(handleUpdate);
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(handleUpdate)}>
            <div>
              <input
                placeholder="Price"
                className="input input-bordered mb-5"
                {...register("price")}
                defaultValue={props?.myToy?.price}
              />
            </div>
            <input
              className="d-none"
              {...register("_id", { required: true })}
              value={props?.myToy?._id}
            />
            <div>
              <input
                placeholder="Quantity"
                className="input input-bordered mb-5"
                {...register("quantity")}
              />
            </div>
            <div>
              <input
                placeholder="Description"
                className="input input-bordered"
                {...register("description", { required: true })}
              />
            </div>

            {errors.exampleRequired && <span>This field is required</span>}
            <div className="modal-action">
              <label htmlFor="my-modal " className="btn btn-primary">
                <input type="submit" />
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateToy;
