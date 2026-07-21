import api from "./api";

export const submitComplaint = async (complaintData) => {
  try {
    const response = await api.post("/complaints", complaintData);

    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Failed to submit complaint.",
      }
    );
  }
};

export const getComplaints = async () => {
  try {
    const response = await api.get("/complaints");

    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Unable to fetch complaints.",
      }
    );
  }
};

export const getComplaintById = async (id) => {
  try {
    const response = await api.get(`/complaints/${id}`);

    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Complaint not found.",
      }
    );
  }
};

export const updateComplaint = async (id, complaintData) => {
  try {
    const response = await api.put(`/complaints/${id}`, complaintData);

    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Unable to update complaint.",
      }
    );
  }
};

export const deleteComplaint = async (id) => {
  try {
    const response = await api.delete(`/complaints/${id}`);

    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Unable to delete complaint.",
      }
    );
  }
};