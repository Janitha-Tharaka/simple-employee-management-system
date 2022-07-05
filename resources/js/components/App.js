import React from 'react';
import ReactDOM from 'react-dom';
import Table from './employeeList/Table';

function App() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                {/* Call components */}
                <Table />
            </div>
        </div>
    );
}

export default App;