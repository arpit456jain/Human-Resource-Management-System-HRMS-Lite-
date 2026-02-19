import { useEffect, useState } from "react";
import { addAttendance, getEmployees } from "../../service/api";



const AttendanceForm = () => {
  const [employees, setEmployees] = useState<any>([]);
  const [form, setForm] = useState({
    employee: "",
    date: "",
    status: "Present",
  });

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const res = await getEmployees();
      setEmployees(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
    const payload = {
  employee_id: Number(form.employee),  // now this is 101, 102 etc
  date: form.date,
  status: form.status.toUpperCase(),
};
      await addAttendance(payload);
      

      setForm({
        employee: "",
        date: "",
        status: "Present",
      });

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <h1>Mark Attendance</h1>
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <select
  name="employee"
  value={form.employee}
  onChange={handleChange}
  required
>
  <option value="">Select Employee</option>
  {employees.map((emp: any) => (
    <option key={emp.id} value={emp.employee_id}>
      {emp.full_name} ({emp.employee_id})
    </option>
  ))}
</select>
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        required
      />

      <select name="status" value={form.status} onChange={handleChange}>
        <option value="Present">Present</option>
        <option value="Absent">Absent</option>
      </select>

      <button type="submit">Mark Attendance</button>
    </form>
    </>
  );
};

export default AttendanceForm;
