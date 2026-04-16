import React from 'react'

function Navbar() {
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
                                <label htmlFor="personName" className='form-label'>Name</label>
                                <input type="text" className='form-control' placeholder='Enter name...' id="personName" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="passion" className='form-label'>Passion</label>
                                <input type="text" className='form-control' placeholder='Enter passion...' id='passion' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="skills" className='form-label'>Skills</label>
                                <input type="text" className='form-control' placeholder='Enter any 2 skills...' id='skills' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="avatar" className='form-label'>Avatar</label>
                                <input type="text" className='form-control' placeholder='Give Image (ID size avatar) url...' id='avatar' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className='form-label'>Email Id</label>
                                <input type="text" className='form-control' placeholder='Enter email id...' id='email' />
                            </div>

                            <div className="d-flex justify-content-end gap-2">
                                <button className='btn btn-danger' data-bs-dismiss="modal">Cancel</button>
                                <button className='btn btn-success'>Add Contact</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar