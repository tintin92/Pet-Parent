import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_POST, LOADING } from "../../utils/actions";
import API from "../../utils/API";

function CreateProfile() {
  const nameRef = useRef();
  const ageRef = useRef();
  const speciesRef = useRef();
  const weightRef = useRef();
  const birthdayRef = useRef();
  const locationRef = useRef();

  const [state, dispatch] = useStoreContext();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.savePost({
      name: nameRef.current.value,
      age: ageRef.current.value,
      birthday: birthdayRef.current.value,
      species: speciesRef.current.value,
      breed: breedRef.current.value,
      weight: weightRef.current.value,
      location: locationRef.current.value
    })
      .then(result => {
        dispatch({
          type: ADD_POST,
          post: result.data
        });
      })
      .catch(err => console.log(err));

    nameRef.current.value = "";
    ageRef.current.value = "";
    birthdayRef.current.value = "";
    speciesRef.current.value = "";
    breedRef.current.value = "";
    weightRef.current.value = "";
    locationRef.current.value = "";
  };

  return (
    <div>
      <div className="jumbotron">
        <img
          className="img-fluid img-thumbnail"
          src="https://images.pexels.com/photos/459688/pexels-photo-459688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
      </div>
      <h1>Add your Pet</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input className="form-control mb-5" required ref={nameRef} placeholder="Name" />
        <input className="form-control mb-5" required ref={ageRef} placeholder="Age" />
        <input className="form-control mb-5" ref={birthdayRef} placeholder="Birthday" />
        <input className="form-control mb-5" ref={speciesRef} placeholder="Species (i.e. cat, dog, etc)" />
        <input className="form-control mb-5" ref={breedRef} placeholder="Breed (i.e. domestic short hair, labrador, etc)" />
        <input className="form-control mb-5" ref={weightRef} placeholder="Weight" />
        <input className="form-control mb-5" ref={locationRef} placeholder="Location" />
        <button className="btn btn-success mt-3 mb-5" disabled={state.loading} type="submit">
          Save Profile
        </button>
      </form>
    </div>
  );
}

export default CreateProfile;
