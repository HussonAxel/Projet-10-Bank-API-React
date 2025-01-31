import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/api/v1";

const fetchUserProfile = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    console.error("No token found in local storage");
    return null;
  }

  
  try {
    const response = await axios.post(
      "/user/profile",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    localStorage.setItem("firstName", response.data.body.firstName);
    localStorage.setItem("lastName", response.data.body.lastName);

    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return null;
  }
};

export default fetchUserProfile;