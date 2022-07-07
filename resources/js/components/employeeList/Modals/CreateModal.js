import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class CreateModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employeeName: null,
            employeeSalary: null,
        }
    }

    //Creating Name and Salary Data State

    inputEmployeeName = (event) => {
        this.setState({
            employeeName: event.target.value,
        });
    }

    inputEmployeeSalary = (event) => {
        this.setState({
            employeeSalary: event.target.value,
        });
    }

    //Storing the Employee Data

    storeEmployeeData = () => {
        axios.post('/store.employee/data', {
            employeeName: this.state.employeeName,
            employeeSalary: this.state.employeeSalary,
        }).then(() => {
            toast.success("Employee Inserted Successfully");

            setTimeout(() => {
                location.reload();
            }, 2500)
        })
    }

    render() {
        return (
            <>
                <div className='row text-right mb-3 pb-3'>
                    <button className='btn btn-info text-right col-3 offset-md-9'
                        data-toggle="modal"
                        data-target="#modalCreate"
                    >
                        Add New Employee
                    </button>

                </div>
                <div className="modal fade" id="modalCreate" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Create New Employee</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form className="form">
                                    <div className="form-group">
                                        <input type="text"
                                            id="employeeName"
                                            className='form-control mb-3'
                                            placeholder="Employee Name"
                                            onChange={this.inputEmployeeName}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <input type="text"
                                            id="employeeSalary"
                                            className='form-control mb-3'
                                            placeholder="Salary"
                                            onChange={this.inputEmployeeSalary}
                                        />
                                    </div>

                                </form>
                            </div>
                            <div className="modal-footer">
                                <input
                                    type="button"
                                    value="Save"
                                    className='btn btn-info'
                                    onClick={this.storeEmployeeData}
                                />
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default CreateModal;