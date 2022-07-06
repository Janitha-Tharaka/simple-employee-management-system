import React, { Component } from 'react';

class UpdateModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employeeName: null,
            employeeSalary: null,
        }
    }

    //Updating Name and Salary Data State

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

    static getDerivedStateFromProps(props, current_state) {
        let employeeUpdate = {
            employeeName: null,
            employeeSalary: null,
        }

        //Updating fields, when typing
        if (current_state.employeeName && (current_state.employeeName !== props.employeeData.currentEmployeeName)) {
            return null;
        }

        if (current_state.employeeSalary && (current_state.employeeSalary !== props.employeeData.currentEmployeeSalary)) {
            return null;
        }

        //Updating the data fields with current data

        //First we check if the data inside is not equal to the current state name, then enter the name. That is when we click different employees.
        //Or when there is the same data and we click the same employee again, we need to show the data.
        if (current_state.employeeName !== props.employeeData.currentEmployeeName || current_state.employeeName == props.employeeData.currentEmployeeName) {
            employeeUpdate.employeeName = props.employeeData.currentEmployeeName;
        }

        if (current_state.employeeSalary !== props.employeeData.currentEmployeeSalary || current_state.employeeSalary == props.employeeData.currentEmployeeSalary) {
            employeeUpdate.employeeSalary = props.employeeData.currentEmployeeSalary;
        }

        return employeeUpdate;
    }

    updateEmployeeData = () => {

    }

    render() {
        return (
            <div className="modal fade" id={"updateModal_" + this.props.modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Employee Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="form">
                                <div className="form-group">
                                    <input type="text"
                                        name="employeeName"
                                        id="employeeName"
                                        value={this.state.employeeName ?? ""}
                                        onChange={this.inputEmployeeName}
                                    />
                                </div>

                                <div className="form-group">
                                    <input type="text"
                                        name="employeeSalary"
                                        id="employeeSalary"
                                        value={this.state.employeeSalary ?? ""}
                                        onChange={this.inputEmployeeSalary}
                                    />
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <input type="submit"
                                className="btn btn-info"
                                value="Update"
                                onClick={this.updateEmployeeData}
                            />
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateModal;