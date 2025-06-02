import { ApiPaths } from "@/shared/api/apiPaths";
import api from "@/shared/api/axiosInstance";

export const getCurrentUser = async () => {
  const response = await api.get(ApiPaths.getMe())

  return response.data
};
