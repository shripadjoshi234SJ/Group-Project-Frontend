import api from "./api";

export const uploadBill = async (formData) => {
  try {
    const response = await api.post("/upload/bill", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Bill upload failed.",
      }
    );
  }
};

export const getBills = async () => {
  try {
    const response = await api.get("/bills");

    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Unable to fetch bills.",
      }
    );
  }
};

export const getBillById = async (id) => {
  try {
    const response = await api.get(`/bills/${id}`);

    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Bill not found.",
      }
    );
  }
};

export const deleteBill = async (id) => {
  try {
    const response = await api.delete(`/bills/${id}`);

    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Unable to delete bill.",
      }
    );
  }
};