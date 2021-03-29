package fa.spring.service;

import java.util.List;
import java.util.Optional;

import fa.spring.model.Employee;

public interface EmployeeService {
	List<Employee> findAll();
	Employee save(Employee employee);
	void delete(Employee employee);
	 Optional<Employee> findById(Long id);
	

}
