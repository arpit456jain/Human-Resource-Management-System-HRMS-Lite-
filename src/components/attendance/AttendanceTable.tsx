import { useEffect, useState } from "react";
import { getEmployees, getAttendanceByEmployee } from "../../service/api";


const AttendanceTable = () => {
  const [employees, setEmployees] = useState<any>([]);
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [attendanceList, setAttendanceList] = useState<any[]>([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const res = await getEmployees();
    setEmployees(res.data);
  };

  const handleEmployeeChange = async (e: any) => {
    const empId = e.target.value;
    setSelectedEmployee(empId);

    if (empId) {
      const res = await getAttendanceByEmployee(Number(empId));
      setAttendanceList(res.data);
    } else {
      setAttendanceList([]);
    }
  };

  return (
    <div>
      <h2>View Attendance for Employee</h2>

      <select value={selectedEmployee} onChange={handleEmployeeChange}>
        <option value="">Select Employee</option>
        {employees.map((emp:any) => (
          <option key={emp.id} value={emp.employee_id}>
            {emp.full_name} ({emp.employee_id})
          </option>
        ))}
      </select>

      <br /><br />

      {attendanceList.length > 0 && (
        <table border={1} cellPadding={8}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceList.map((att) => (
              <tr key={att.id}>
                <td>{att.date}</td>
                <td>{att.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AttendanceTable;
