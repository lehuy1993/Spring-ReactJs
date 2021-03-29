import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:this.props.match.params.id,
            employee: {}
        }
    }
    componentDidMount(){
        EmployeeService.getEmployeesById(this.state.id).then(res =>{
            this.setState({employee:res.data})
        })
    }
    render() {
        return (
            <div>
                <div className="card col-md-6 offset-3">
                    <h3 className="text-center"> View Employee</h3>
                    <div className = "card-body">
                        <div className ="row">
                            <label> First Name</label>
                            <div>
                                {this.state.employee.firstName}
                            </div>
                        </div>
                        <div className ="row">
                            <label> Last Name</label>
                            <div>
                                {this.state.employee.lastName}
                            </div>
                        </div>
                        <div className ="row">
                            <label> Email </label>
                            <div>
                                {this.state.employee.emailId}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;