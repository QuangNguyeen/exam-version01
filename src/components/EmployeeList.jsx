// src/components/EmployeeList.js
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Table, Button } from 'react-bootstrap';

const EmployeeList = ({ employees, onEdit, onDelete }) => {
    return (
        <div className="table-responsive">
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>
                        <input type="checkbox" id="selectAll" />
                    </th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {employees.map((employee) => (
                    <tr key={employee.id}>
                        <td>
                            <input type="checkbox" id={`checkbox${employee.id}`} />
                        </td>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.address}</td>
                        <td>{employee.phone}</td>
                        <td>
                            <Button variant="warning" onClick={() => onEdit(employee)} className="me-2">
                                <FaEdit />
                            </Button>
                            <Button variant="danger" onClick={() => onDelete(employee.id)}>
                                <FaTrash />
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
};

export default EmployeeList;
