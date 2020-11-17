import axios from "axios";

export default {
  // Gets all profiles
  getProfiles: function() {
    return axios.get("/api/Profile");
  },
  // Gets the profile with the given id
  getProfile: function(id) {
    return axios.get("/api/createProfile/" + id);
  },
  // Deletes the profile with the given id
  deleteProfile: function(id) {
    return axios.delete("/api/Profile/" + id);
  },
  // Saves a profile to the database
  saveProfile: function(profileData) {
    return axios.post("/api/Profile", profileData);
  }
};
