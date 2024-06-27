// src/App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import employeesData from './data/data';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import { Button } from 'react-bootstrap';
import { FaPlus, FaTrash } from 'react-icons/fa';

function App() {
    const [employees, setEmployees] = useState(employeesData);
    const [showForm, setShowForm] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const handleEdit = (employee) => {
        setSelectedEmployee(employee);
        setShowForm(true);
    };

    const handleDelete = (id) => {
        setEmployees(employees.filter(employee => employee.id !== id));
    };

    const handleSave = (employee) => {
        if (employee.id) {
            setEmployees(employees.map(emp => emp.id === employee.id ? employee : emp));
        } else {
            employee.id = employee.length + 1;
            setEmployees([...employees, employee]);
        }
        setShowForm(false);
    };

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between mb-3">
                <h2>Manage Employees</h2>
                <div>
                    <Button variant="danger" className="me-2">
                        <FaTrash /> Delete
                    </Button>
                    <Button variant="success" onClick={() => setShowForm(true)}>
                        <FaPlus /> Add New Employee
                    </Button>
                </div>
            </div>
            <EmployeeList employees={employees} onEdit={handleEdit} onDelete={handleDelete} />
            <EmployeeForm
                show={showForm}
                handleClose={() => setShowForm(false)}
                handleSave={handleSave}
                employee={selectedEmployee}
            />
            <div className="d-flex justify-content-between mt-3">
                <div>Showing {employees.length} out of {employeesData.length} entries</div>
                <ul className="pagination">
                    <li className="page-item disabled"><a className="page-link">Previous</a></li>
                    <li className="page-item"><a className="page-link">1</a></li>
                    <li className="page-item"><a className="page-link">2</a></li>
                    <li className="page-item active"><a className="page-link">3</a></li>
                    <li className="page-item"><a className="page-link">4</a></li>
                    <li className="page-item"><a className="page-link">5</a></li>
                    <li className="page-item"><a className="page-link">Next</a></li>
                </ul>
            </div>
        </div>
    );
}

export default App;
