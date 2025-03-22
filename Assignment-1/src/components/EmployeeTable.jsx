// EmployeeTable.js
import React, { useState } from 'react';
import './EmployeeTable.css'; // Import the CSS file

const EmployeeTable = () => {
  const [employees] = useState([
    { id: 1, name: "John Doe", position: "Developer", salary: 50000 },
    { id: 2, name: "Jane Smith", position: "Designer", salary: 55000 },
    { id: 3, name: "Mike Johnson", position: "Manager", salary: 60000 },
  ]);

  return (
    <table className="employee-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Position</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.position}</td>
            <td>{employee.salary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;