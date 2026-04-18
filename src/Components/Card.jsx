function Card({ contactData }) {

    return (
        <div className="container d-flex flex-wrap justify-content-center mt-5 gap-4">
            {contactData.length === 0 ? (
                <h3>No Contacts Found</h3>
            ) : (
                contactData.map((contact) => (
                    <div key={contact.id} className="card p-2 shadow" style={{ width: "250px", height: "360px" }}>
                        <div className="card-body d-flex flex-column align-items-center justify-content-between h-100 p-4">
                            <img src={contact.avatar} alt="avatar" className="img-fluid" onError={(e) => {
                                e.target.src = "https://via.placeholder.com/80";
                            }} />
                            <div className="shareBtn">
                                <i className="bi bi-share"></i>
                            </div>
                            <span className="fs-2" id="contactName">{contact.name}</span>
                            <span className="text-muted fs-5" id="passion">{contact.passion}</span>
                            <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
                                {contact.skills.split(",").map((skill) => (
                                    <span key={skill} className="badge text-bg-secondary">{skill.trim()}</span>
                                ))}
                            </div>

                            <button className="btn btn-outline-success mt-4">
                                Get in touch
                            </button>
                        </div>
                    </div>
                ))
            )

            }
        </div>
    )
}

export default Card