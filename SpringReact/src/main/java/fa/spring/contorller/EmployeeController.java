package fa.spring.contorller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fa.spring.exception.ResourceNotFoundException;
import fa.spring.model.Employee;
import fa.spring.service.EmployeeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;
	
	// get All
	@GetMapping("/employees")
	public List<Employee> getAll() {
		return employeeService.findAll();
		
	}
	//create employee
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeeService.save(employee);
	}
	
	// get employee by id rest api
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
		Employee employee = employeeService.findById(id
				).orElseThrow(()-> new ResourceNotFoundException("Employee not exist with id :" + id));
		return ResponseEntity.ok(employee);
	}
	
	 // update employee rest api
    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails){
		Employee employee = employeeService.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Employee not exist with id :" + id));
		employee.setFirstName(employeeDetails.getFirstName());
		employee.setLastName(employeeDetails.getLastName());
		employee.setEmailId(employeeDetails.getEmailId());
		Employee updateEmployee = employeeService.save(employee);
		return ResponseEntity.ok(updateEmployee);

    }
    // delete employee rest api
    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
    	Employee employee = employeeService.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Employee not exist with id :" + id));
    	employeeService.delete(employee);
    	Map<String, Boolean> response = new HashMap<>();
    	response.put("delete", Boolean.TRUE);
    	 return ResponseEntity.ok(response);
    }
}
