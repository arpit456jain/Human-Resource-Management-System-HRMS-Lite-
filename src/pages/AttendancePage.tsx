import { useEffect, useState } from "react";
import { getAttendance } from "../service/api";
import AttendanceForm from "../components/attendance/AttendanceForm";
import AttendanceTable from "../components/attendance/AttendanceTable";

interface Attendance {
  id: number;
  employee: number;   // employee id (FK)
  date: string;
  status: string;
}

const AttendancePage = () => {
 
  
  return (
    <>
      <AttendanceForm  />
      <AttendanceTable  />
    </>
  );
};

export default AttendancePage;
