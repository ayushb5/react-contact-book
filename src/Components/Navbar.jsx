import React, { useState } from 'react'

function Navbar({ contactData, setContactData }) {

    const [formData, setFormData] = useState({
        name: "",
        passion: "",
        skills: "",
        avatar: "",
        email: ""
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const handleAddContact = () => {
        if (!formData.name || !formData.passion || !formData.skills || !formData.avatar || !formData.email) {
            alert("All fields are required.");
            return;
        }
        const exists = contactData.some(contact => contact.email === formData.email);
        if (exists) {
            alert("Contact with this email already exists!");
            return;
        }
        const newContact = {
            id: Date.now(),
            ...formData
        };

        const updatedContacts = [...contactData, newContact];
        setContactData(updatedContacts);

        localStorage.setItem("contacts", JSON.stringify(updatedContacts));

        setFormData({
            name: "",
            passion: "",
            skills: "",
            avatar: "",
            email: ""
        })

        const modal = document.getElementById('addContact');
        const modalInstance = window.bootstrap.Modal.getInstance(modal);
        modalInstance.hide();

        alert("Contact Added successfully.")
    }


    return (
        <>
            <nav className='navbar navbar-expand-lg bg-light'>
                <div className="container d-flex justify-content-between align-items-center">
                    <h2 className='text-primary'>My Contact Book</h2>
                    <div className="input-group w-50">
                        <label htmlFor="search" className="input-group-text">
                            <i className='bi bi-search'></i>
                        </label>
                        <input type="text" className='form-control' id='search' placeholder='Search contact...' />
                    </div>
                    <button className='btn btn-outline-primary' data-bs-toggle="modal" data-bs-target="#addContact">Add Contact</button>
                </div>
            </nav >

            {/* Modal */}
            <div className='modal fade' id="addContact">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <span className='modal-title'>Add Contact</span>
                            <button className='btn-close' data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="name" className='form-label'>Name</label>
                                <input type="text" className='form-control' value={formData.name} placeholder='Enter name...' id="name" onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="passion" className='form-label'>Passion</label>
                                <input type="text" className='form-control' value={formData.passion} placeholder='Enter passion...' id='passion' onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="skills" className='form-label'>Skills</label>
                                <input type="text" className='form-control' value={formData.skills} placeholder='Enter any 2 skills...' id='skills' onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="avatar" className='form-label'>Avatar</label>
                                <input type="text" className='form-control' value={formData.avatar} placeholder='Give Image (ID size avatar) url...' id='avatar' onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className='form-label'>Email Id</label>
                                <input type="text" className='form-control' value={formData.email} placeholder='Enter email id...' id='email' onChange={handleChange} />
                            </div>

                            <div className="d-flex justify-content-end gap-2">
                                <button className='btn btn-danger' data-bs-dismiss="modal">Cancel</button>
                                <button type='button' className='btn btn-success' onClick={handleAddContact}>Add Contact</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar