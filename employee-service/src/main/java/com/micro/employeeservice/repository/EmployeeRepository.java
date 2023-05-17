package com.micro.employeeservice.repository;

import com.micro.employeeservice.entity.Employee;
import com.micro.employeeservice.model.Laptop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

    //List<Laptop> findByUserId(int employeeId);

}
