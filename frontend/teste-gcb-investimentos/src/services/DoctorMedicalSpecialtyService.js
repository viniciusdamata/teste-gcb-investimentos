import api from "./config/api";

export const doctorMedicalSpecialtyService = {
  async store(body) {
    const response = await api.post("/doctor-medical-specialty", body);
    return response.data.data;
  },
};
