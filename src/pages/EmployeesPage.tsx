import EmployeeForm from "../components/employee/EmployeeForm";
import EmployeeTable from "../components/employee/EmployeeTable";
import React, { useEffect, useState } from "react";
import { getEmployees } from "../service/api";
const EmployeesPage = () => {
    const [employees, setEmployees] = useState<any>([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState("");
    
      useEffect(() => {
        fetchEmployees();
      }, []);
    
      const fetchEmployees = async () => {
        try {
          const response = await getEmployees();
          setEmployees(response.data);
        } catch (err) {
          setError("Failed to fetch employees");
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
    
  return (
    <div>
      <h1>Employee Management</h1>
      <EmployeeForm fetchEmployees={fetchEmployees} />
      <EmployeeTable employees={employees} loading={loading} error={error} fetchEmployees={fetchEmployees} />
    </div>
  );
};

export default EmployeesPage;
