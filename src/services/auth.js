import API from "./api";

// Register User
export const registerUser = async (userData) => {
  try {
    const response = await API.post("/api/auth/register", userData);
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Registration failed",
      }
    );
  }
};

// Login User
export const loginUser = async (credentials) => {
  try {
    const response = await API.post("/api/auth/login", credentials);
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Login failed",
      }
    );
  }
};

// Get Logged-in User
export const getCurrentUser = async () => {
  try {
    const response = await API.get("/api/auth/me");
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Unable to fetch user",
      }
    );
  }
};

// Update Profile
export const updateProfile = async (profileData) => {
  try {
    const response = await API.put("/api/users/profile", profileData);
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Profile update failed",
      }
    );
  }
};

// Change Password
export const changePassword = async (passwordData) => {
  try {
    const response = await API.put(
      "/api/users/change-password",
      passwordData
    );
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Password change failed",
      }
    );
  }
};

// Logout
export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};