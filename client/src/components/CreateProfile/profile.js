// import React, { useState } from "react";
// import { useStoreContext } from "../../utils/GlobalState";
// import { ADD_POST, LOADING } from "../../utils/actions";
// import API from "../../utils/API";
// // import Navbar from '../Navbar/navbar'
// // import tracker component here like navbar above

// function CreateProfile() {
//   const [name, changeName] = useState('');
//   const [age, changeAge] = useState('');
//   const [birthday, changeBirthday] = useState('');
//   const [species, changeSpecies] = useState('');
//   const [breed, changeBreed] = useState('');
//   const [weight, changeWeight] = useState('');
//   const [location, changeLocation] = useState('');

//   const [state, dispatch] = useStoreContext();

//   const handleSubmit = e => {
//     e.preventDefault();
//     dispatch({ type: LOADING });
//     API.savePost({
//       name,
//       age,
//       birthday,
//       species,
//       breed,
//       weight,
//       location
//     })
//       .then(result => {
//         dispatch({
//           type: ADD_POST,
//           post: result.data
//         });
//       })
//       .catch(err => console.log(err));

//     name = "";
//     age = "";
//     birthday = "";
//     species = "";
//     breed = "";
//     weight = "";
//     location = "";
//   };

//   return (
//     <div>
//       {/* to add tracker/budget render it here like below with navbar*/}
//       {/* <Navbar /> */}
//       <div className="jumbotron">
//         <img
//           className="img-fluid img-thumbnail"
//           src="https://images.pexels.com/photos/459688/pexels-photo-459688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
//         />
//       </div>
//       <h1>Add your Pet</h1>
//       <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
//         <input className="form-control mb-5" required onChange={(event) => changeName(event.target.value)} value={name} placeholder="Name" />
//         <input className="form-control mb-5" required onChange={(event) => changeAge(event.target.value)} value={age} placeholder="Age" />
//         <input className="form-control mb-5" required onChange={(event) => changeBirthday(event.target.value)} value={birthday} placeholder="Birthday" />
//         <input className="form-control mb-5" required onChange={(event) => changeSpecies(event.target.value)} value={species} placeholder="Species (i.e. cat, dog, etc)" />
//         <input className="form-control mb-5" required onChange={(event) => changeBreed(event.target.value)} value={name} placeholder="Breed (i.e. domestic short hair, labrador, etc)" />
//         <input className="form-control mb-5" required onChange={(event) => changeWeight(event.target.value)} value={weight} placeholder="Weight" />
//         <input className="form-control mb-5" required onChange={(event) => changeLocation(event.target.value)} value={location} placeholder="Location" />
//         <button className="btn btn-success mt-3 mb-5" disabled={state.loading} type="submit">
//           Save Profile
//         </button>
//       </form>
//     </div>
//   );
// }

// export default CreateProfile;
