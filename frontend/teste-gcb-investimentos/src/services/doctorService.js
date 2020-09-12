import api from "./config/api";

export const doctorService = {
  async index() {
    const response = await api.get("/doctor");
    return response.data.data;
  },
  async delete(id) {
    const response = await api.delete(`/doctor/${id}`);
    return response.data.data;
  },
  async store(body) {
    const response = await api.post("/doctor", body);
    return response.data.data;
  },

  async update(id, body) {
    const response = await api.put(`/doctor/${id}`, body);
    return response.data.data;
  },
};
