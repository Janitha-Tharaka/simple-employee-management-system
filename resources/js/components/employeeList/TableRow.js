import axios from 'axios';
import React, { Component } from 'react';
import TableActionButtons from './TableActionButtons';

class TableRow extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <th>{this.props.data.id}</th>
                <th>{this.props.data.employee_name}</th>
                <th>{this.props.data.salary}</th>
                <td>
                    <TableActionButtons eachRowId={this.props.data.id} />
                </td>
            </tr>
        )
    }
}

export default TableRow;