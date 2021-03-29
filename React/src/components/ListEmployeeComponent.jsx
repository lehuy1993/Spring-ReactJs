import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state ={
            employees: []
        }
    }
    editEmployee = (id)=>{
        this.props.history.push(`/add-employee/${id}`);
    }
    delEmployee = (id)=>{
        EmployeeService.deleteEmployeeById(id).then(res =>{
            this.setState({employees:this.state.employees.filter(employee => employee.id !== id)});
        })
    }
    componentDidMount(){
        EmployeeService.getEmployees().then((res) =>{
            this.setState({employees: res.data});
        });
    }
    addEmployee = () =>{
        this.props.history.push('/add-employee/add');
    }
    viewEmployee = (id) =>{
        this.props.history.push(`/view-employee/${id}`);
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead >
                            <tr>
                                <th> Frist Name</th>
                                <th> Last Name</th>
                                <th> Email</th>
                                <th> Action</th>
                            </tr>
                            </thead>
                            <tbody>
                               {
                                   this.state.employees.map(
                                       employee =>
                                        <tr key= {employee.id}>
                                            <td> { employee.firstName}</td>
                                            <td> { employee.lastName}</td>
                                            <td> { employee.emailId}</td>
                                            <td>
                                                <button onClick = {() =>this.editEmployee(employee.id)} className="btn btn-info">
                                                    Update
                                                </button>
                                                <button style={{marginLeft:"10px"}} onClick = {() =>{if(window.confirm('Delete the item?')){this.delEmployee(employee.id)};}} className="btn btn-warning">
                                                    Delete
                                                </button>
                                                <button style={{marginLeft:"10px"}} onClick = {() =>this.viewEmployee(employee.id)} className="btn btn-info">
                                                    View
                                                </button>
                                            </td>
                                        </tr>
                                   )
                               }
                               
                            </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;