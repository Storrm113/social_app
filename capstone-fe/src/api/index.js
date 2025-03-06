import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://social-app-wauj.onrender.com";

/* ======================
   AUTHENTICATION
   ====================== */

// Register New User
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/auth/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error.response?.data || error.message);
    throw error;
  }
};

// Login User
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/auth/login`, credentials);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error.response?.data || error.message);
    throw error;
  }
};

/* ======================
   USERS
   ====================== */

// Fetch All Users
export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/users`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error.response?.data || error.message);
    throw error;
  }
};

// Fetch User's Communities (if your backend exposes user-based communities this way)
export const fetchUserCommunities = async (username) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/users/${username}/communities`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user's communities:", error.response?.data || error.message);
    throw error;
  }
};

/* ======================
   COMMUNITIES & POSTS
   ====================== */

// Fetch All Communities
export const fetchCommunities = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/communities`);
    return response.data;
  } catch (error) {
    console.error("Error fetching communities:", error.response?.data || error.message);
    throw error;
  }
};

// Fetch All Posts (Community-Wide)
export const fetchCommunityPosts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/posts`);
    return response.data;
  } catch (error) {
    console.error("Error fetching community posts:", error.response?.data || error.message);
    throw error;
  }
};

// Fetch Posts by Community
export const fetchPostsByCommunity = async (communityId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/communities/${communityId}/posts`);
    return response.data;
  } catch (error) {
    console.error("Error fetching community posts:", error.response?.data || error.message);
    throw error;
  }
};

// Create Community Post
export const createCommunityPost = async (communityId, postData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/communities/${communityId}/posts`, postData);
    return response.data;
  } catch (error) {
    console.error("Error creating community post:", error.response?.data || error.message);
    throw error;
  }
};

// Delete Community Post
export const deleteCommunityPost = async (communityId, postId) => {
  try {
    await axios.delete(`${API_BASE_URL}/api/communities/${communityId}/posts/${postId}`);
  } catch (error) {
    console.error("Error deleting community post:", error.response?.data || error.message);
    throw error;
  }
};

/* ======================
   MESSAGES
   ====================== */

// Send Direct Message
export const sendMessage = async (messageData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/messages`, messageData);
    return response.data;
  } catch (error) {
    console.error("Error sending message:", error.response?.data || error.message);
    throw error;
  }
};

// Fetch Direct Messages
export const fetchDirectMessages = async (senderId, receiverId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/messages/${senderId}/${receiverId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching messages:", error.response?.data || error.message);
    throw error;
  }
};

/* ======================
   IMAGES
   ====================== */

// Upload Image
export const uploadImage = async (imageData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/images`, imageData);
    return response.data;
  } catch (error) {
    console.error("Error uploading image:", error.response?.data || error.message);
    throw error;
  }
};

// Fetch Image
export const fetchImage = async (filename) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/images/${filename}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching image:", error.response?.data || error.message);
    throw error;
  }
};
