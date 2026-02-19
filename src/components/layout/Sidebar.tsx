import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={{
      width: "220px",
      background: "#1f2937",
      color: "white",
      padding: "1.5rem"
    }}>
      <h2 style={{ marginBottom: "2rem" }}>HRMS Lite</h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Employees
        </Link>
        <Link to="/attendance" style={{ color: "white", textDecoration: "none" }}>
          Attendance
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
