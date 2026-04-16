function Card() {
    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
            <div>
                <div className="card p-2 w-auto shadow">
                    <div className="card-body d-flex flex-column fw-semibold justify-content-center align-items-center m-4">
                        <img src="https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-623.jpg?semt=ais_hybrid&w=740&q=80" />
                        <div className="shareBtn">
                            <i className="bi bi-share"></i>
                        </div>
                        <span className="fs-2" id="contactName">John Doe</span>
                        <span className="text-muted fs-5" id="passion">Designer</span>
                        <div className="d-flex flex-row gap-2 mt-3 ">
                            <span className="badge text-bg-secondary rounded w-50" id="tag1">
                                Figma
                            </span>
                            <span className="badge text-bg-secondary rounded w-50" id="tag2">
                                Canva
                            </span>
                        </div>

                        <button className="btn btn-outline-success mt-4">
                            Get in touch
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card