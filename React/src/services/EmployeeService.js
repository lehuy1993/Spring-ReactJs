import axios from 'axios';
const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/employees";
class EmployeeService{

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
    createEmployees(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }
    getEmployeesById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
    putEmployeesById(employeeId, employee){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }
    deleteEmployeeById(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

}
export default new EmployeeService()