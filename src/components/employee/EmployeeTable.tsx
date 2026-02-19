


import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from "primereact/button"; 

import { deleteEmployee } from "../../service/api";
const EmployeeTable = ({ employees,loading,error, fetchEmployees }:any) => {
  

   const handleDelete = async (rowData: any) => {
    // const confirmDelete = window.confirm(
    //   `Delete ${rowData.full_name}?`
    // );

    // if (!confirmDelete) return;
    console.log(rowData)
    try {
      await deleteEmployee(rowData?.id
);
      fetchEmployees();   //  refresh table
    } catch (error) {
      console.error("Delete failed", error);
    }
  };
  const actionBodyTemplate = (rowData: any) => {
    return (
      <Button
        label="Delete"
        icon="pi pi-trash"
        severity="danger"
        onClick={() => handleDelete(rowData)}
      />
    );
  };


  return (
    <div>
      <h3>Employee List</h3>

         
      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <div className="card">
            <DataTable value={employees} tableStyle={{ minWidth: '50rem' }}>
                <Column field="employee_id" header="Employee ID"></Column>
                <Column field="full_name" header="Name"></Column>
                <Column field="email" header="Email"></Column>
                <Column field="department" header="Department"></Column>
                <Column
                    header="Actions"
                    body={actionBodyTemplate}
                    style={{ width: "8rem" }}
                    />
            </DataTable>
        </div>
      )}
    </div>
  );
};

export default EmployeeTable;
