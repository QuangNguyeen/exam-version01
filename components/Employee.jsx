import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

const Employee = ({ employee, onEdit, onDelete }) => {
    return (
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
    );
};

export default Employee;
