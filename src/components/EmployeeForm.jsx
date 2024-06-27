import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EmployeeForm = ({ show, handleClose, handleSave, employee }) => {
    const [form, setForm] = useState({ id: '', name: '', email: '', address: '', phone: '' });
    const [error, setError] = useState('');

    useEffect(() => {
        if (employee) {
            setForm(employee);
        } else {
            setForm({ id: '', name: '', email: '', address: '', phone: '' });
        }
    }, [employee]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'phone') {
            if (!/^0[0-9]*$/.test(value) && value !== '') {
                setError('Số điện thoại phải bắt đầu bằng số 0 và chỉ chứa số.');
                return;
            }
            if (value.length > 10) {
                setError('Số điện thoại không được quá 10 ký tự.');
                return;
            }
            setError('');
        }

        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (error) return;
        handleSave(form);
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{employee ? 'Edit Employee' : 'Add Employee'}</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" value={form.name} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" value={form.email} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" name="address" value={form.address} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="formPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" name="phone" value={form.phone} onChange={handleChange} required minLength="10" />
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" type="submit">
                        {employee ? 'Save Changes' : 'Add Employee'}
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default EmployeeForm;
