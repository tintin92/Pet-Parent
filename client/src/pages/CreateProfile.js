import React, { useEffect, useState } from "react";
// import { useStoreContext } from "../utils/GlobalState";
// import { ADD_POST, LOADING } from "../utils/actions";
import API from "../components/utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/grid/grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import DeleteBtn from "../components/DeleteBtn";
import { Jumbotron } from "reactstrap";
// import Jumbotron from "../components/Jumbotron";
// import tracker component here like navbar above

function CreateProfile() {
  // setting component's initial state
  const [profiles, setProfiles] = useState([])
  const [formObject, setFormObject] = useState({})
//   chip, allergies, nickname

// load all profiles and store them with setProfiles
useEffect(() => {
  loadProfiles()
}, [])

// loads all profiles and sets them
function loadProfiles() {
  API.getProfiles()
  .then(res => 
    API.setProfiles(res.data)
    )
    .catch(err => console.log(err));
  
};

// deletes a profile from the database with a given id then reloads profiles from the db
function deleteProfile(id) {
  API.deleteProfile(id)
  .then(res => loadProfiles())
  .catch(err => console.log(err));
}

// handles updating component state when the user types into the input field
function handleInputChange(event) {
  const { name, value } = event.target;
  setFormObject({...formObject, [name]: value})
};

// when the form is submitted, use API saveProfile method to save the profile data, then reload profiles from the database
function handleFormSubmit(event) {
  event.preventDefault();
  if (formObject.name && formObject.species) {
    API.saveProfile({
      name: formObject.name,
      age: formObject.age,
      birthday: formObject.birthday,
      species: formObject.species,
      breed: formObject.breed,
      weight: formObject.weight,
      location: formObject.location
    })
    .then(res => loadProfiles())
    .catch(err => console.log(err));
  }
};

return (
  <Container fluid>
    <Row>
    <Col size="md-6">
            <Jumbotron>
              <h1>Enter your Pet</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="name"
                placeholder="Name (required)"
              />
              <Input
                onChange={handleInputChange}
                name="age"
                placeholder="Age (required)"
              />
              <Input
                onChange={handleInputChange}
                name="birthday"
                placeholder="Birthday (Optional)"
              />
              <Input
                onChange={handleInputChange}
                name="species"
                placeholder="Species (required)"
              />
              <Input
              onChange={handleInputChange}
              name="breed"
              placeholder="Breed (required)"
            />
            <Input
                onChange={handleInputChange}
                name="weight"
                placeholder="Weight (required)"
              />
              <Input
                onChange={handleInputChange}
                name="location"
                placeholder="Location (required)"
              />
              <FormBtn
                disabled={!(formObject.name && formObject.species)}
                onClick={handleFormSubmit}
              >
                Submit Profile
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Pet Profile(s)</h1>
            </Jumbotron>
            {profiles.length ? (
              <List>
                {profiles.map(profile => (
                  <ListItem key={profile._id}>
                    <Link to={"/profiles/" + profile._id}>
                      <strong>
                        {profile.name} - {profile.species}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteProfile(profile._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Profiles to Display</h3>
            )}
          </Col>
    </Row>
  </Container>
)
}

export default CreateProfile;
