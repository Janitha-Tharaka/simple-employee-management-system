import axios from 'axios';
import React, { Component } from 'react';

class TableActionButtons extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="btn-group" role="group">
                <button type="button" className="btn btn-primary">View</button>
                <button type="button" className="btn btn-info">Update</button>
                <button type="button" className="btn btn-danger">Delete</button>
            </div>
        )
    }
}

export default TableActionButtons;