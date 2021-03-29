import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId:''
        }
    }
    componentDidMount(){
        EmployeeService.getEmployeesById(this.state.id).then( (res) =>{
            let employee = res.data;
            this.setState ( {
                firstName: employee.firstName,
                lastName: employee.lastName,
                emailId: employee.emailId
            })
        })
    }
   saveOrUpdateEmployee = (e) =>{
       e.preventDefault();
       let employee = {firstName: this.state.firstName, lastName:this.state.lastName, emailId:this.state.emailId};
       console.log(JSON.stringify(employee));
       EmployeeService.putEmployeesById(this.state.id, employee).then(res=>{
        this.props.history.push('/employees');
       })

      
   }
   cancel = () =>{
       this.props.history.push('/employees');
   }
    onChangeLastName = (event)=>{
        this.setState({lastName: event.target.value});
    }
    onChangeFirstName = (event)=>{
        this.setState({firstName: event.target.value});
    }
    onChangeEmail = (event)=>{
        this.setState({emailId: event.target.value});
    }
    render() {
        return (
            <div>
                <div className ="container">
                    <div className ="row">
                        <div className ="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> First Name:</label>
                                          <input type="text" value={this.state.firstName} onChange={this.onChangeFirstName}
                                            className="form-control" name="firstName" id="" aria-describedby="helpId" placeholder="First Name"/>
                                       
                                    </div>
                                    <div className="form-group">
                                        <label> Last Name:</label>
                                          <input type="text" value={this.state.lastName} onChange={this.onChangeLastName}
                                            className="form-control" name="lastName" id="" aria-describedby="helpId" placeholder="Last Name"/>
                                       
                                    </div>
                                    <div className="form-group">
                                        <label> Email:</label>
                                          <input type="text" value={this.state.emailId} onChange={this.onChangeEmail}
                                            className="form-control" name="email" id="" aria-describedby="helpId" placeholder="Email"/>
                                       
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default UpdateEmployeeComponent;