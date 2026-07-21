import api from "./api";

export const getReports = async () => {
  try {
    const response = await api.get("/reports");

    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Unable to fetch reports.",
      }
    );
  }
};

export const getReportById = async (id) => {
  try {
    const response = await api.get(`/reports/${id}`);

    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Report not found.",
      }
    );
  }
};

export const downloadReport = async (id) => {
  try {
    const response = await api.get(`/reports/${id}/download`, {
      responseType: "blob",
    });

    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: "Download failed.",
      }
    );
  }
};