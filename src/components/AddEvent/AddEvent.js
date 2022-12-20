import { React, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddEvent = () => {
  const [imageURL, setImageURL] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      setImageURL: imageURL,
    };
    const url = `http://localhost:5000/addEvent`;
    console.log(eventData);

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        
      },
      body: JSON.stringify(eventData)
    }).then((res) => console.log(res));
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "440b0bdaa9b4f7d82c91b63a1f2965d2");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          name="name"
          placeholder="Enter event name"
          {...register("name")}
        />
        <br />
        {/* include validation with required or other standard HTML validation rules */}
        <input type="file" onChange={handleImageUpload} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddEvent;
