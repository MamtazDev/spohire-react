    
const DeleteModal = () => {
    return (
        <div>
            <div className="modal fade" id="exampleModalToggle2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content delete_modal" style={{ padding: "40px", wordWrap: "unset" }}>

                        <div className="modal-body" style={{ padding: "10px", marginBottom: "14px" }}>
                            Are you sure want to delete Player Recruitment?
                        </div>
                        <div className="mx-auto delete_body_btns">
                            <button type="button" className="no_btn">No</button>
                            <button type="button" className="yes_btn" data-bs-dismiss="modal">Yes</button>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default DeleteModal;