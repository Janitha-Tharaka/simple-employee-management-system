import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class DeleteModal extends Component {

    constructor(props) {
        super(props);
    }

    deleteEmployeeData = (employee) => {
        axios.delete('/delete/employee/data/' + employee).then(() => {
            toast.error("Employee Deleted Successfully");

            setTimeout(() => {
                location.reload();
            }, 2000)
        })
    }

    render() {
        return (
            <div className="modal fade" id={"deleteModal_" + this.props.modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{this.props.employeeData.currentEmployeeName} Employee Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Are you sre, you want to delete this?
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                                onClick={() => { this.deleteEmployeeData(this.props.modalId) }}
                            >
                                Yes
                            </button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeleteModal;