const api = {
  async getEmissionsData() {
    return fetch("/emissions/emissions-data.json");
  },
};

export default api;
