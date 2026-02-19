import axios from "axios";

const BASE_URL = "https://111arpit1.pythonanywhere.com/";

export const getEmployees = async () => {
  return axios.get(`${BASE_URL}/employees/`);
};


export const getAttendanceByEmployee = async (employeeId: any) => {
  return axios.get(`${BASE_URL}/attendance/${employeeId}/`);
};


export const addEmployee = async (data: any) => {
  return axios.post(`${BASE_URL}/employees/`, data);
};

export const getAttendance = async () => {
  return axios.get(`${BASE_URL}/attendance/`);
};

export const addAttendance = async (data: any) => {
  console.log(data)
  
  return axios.post(`${BASE_URL}/attendance/mark/`, data);
};


export const deleteEmployee = async (id: number) => {
  return axios.delete(`${BASE_URL}/employees/${id}/`);
};
