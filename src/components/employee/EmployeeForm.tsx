import { useState } from "react";
import { addEmployee } from "../../service/api";
import { Button } from 'primereact/button';


const EmployeeForm = ({fetchEmployees}:any) => {
  const [form, setForm] = useState({
    employee_id: "",
    full_name: "",
    email: "",
    department: "",
  });

  const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

  const handleChange = (e:any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    // setMessage("");

    try {
      await addEmployee(form);

    //   setMessage("Employee added successfully ✅");

      // reset form
      setForm({
        employee_id: "",
        full_name: "",
        email: "",
        department: "",
      });

      fetchEmployees();

    } catch (error) {
      console.error(error);
    //   setMessage("Failed to add employee ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
    <div className="card">
      <input
        name="employee_id"
        placeholder="Employee ID"
        value={form.employee_id}
        onChange={handleChange}
        required
      />

      <input
        name="full_name"
        placeholder="Full Name"
        value={form.full_name}
        onChange={handleChange}
        required
      />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <input
        name="department"
        placeholder="Department"
        value={form.department}
        onChange={handleChange}
        required
      />   
          
    <Button severity="info" className="ml-2"  type="submit" >{loading ? "Adding..." : "Add Employee"}</Button>
       
    </div>
    </form>
    
  );
};

export default EmployeeForm;
