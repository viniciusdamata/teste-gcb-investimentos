import api from "./config/api";

export const medicalSpecialtyService = {
  async index() {
    const response = await api.get("/medical-specialty");
    return response.data.data;
  },

}