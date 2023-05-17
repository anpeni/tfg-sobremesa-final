package com.micro.employeeservice.service;

import com.micro.employeeservice.entity.Employee;
import com.micro.employeeservice.feignclient.LaptopFeignClient;
import com.micro.employeeservice.feignclient.SmartphoneFeignClient;
import com.micro.employeeservice.model.Laptop;
import com.micro.employeeservice.model.Smartphone;
import com.micro.employeeservice.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@Service
public class EmployeeService {

    @Autowired
    EmployeeRepository employeeRepository;

    @Autowired
    SmartphoneFeignClient smartphoneFeignClient;

    @Autowired
    LaptopFeignClient laptopFeignClient;

    public List<Employee> getAll() {

        return employeeRepository.findAll();
    }

    public Employee GetById(int id) {


        return employeeRepository.findById(id).orElse(null);
    }

    public Employee save(Employee employee) {

        Employee newEmployee = employeeRepository.save(employee);
        return newEmployee;
    }

    public Laptop saveLaptop(int employeeId, Laptop laptop) {
        laptop.setUserId(employeeId);
        Laptop laptopNew = laptopFeignClient.save(laptop);

        return laptopNew;
    }

    public Smartphone saveSmartphone(int employeeId, Smartphone smartphone) {
        smartphone.setUserId(employeeId);
        Smartphone smartphoneNew = smartphoneFeignClient.save(smartphone);

        return smartphoneNew;
    }


    public List<Laptop> byUserId(int employeeId) {

        return laptopFeignClient.getLaptop(employeeId);
    }

    public List<Smartphone> byUserIdSmartphone(int employeeId) {

        return smartphoneFeignClient.getSmartphone(employeeId);
    }

    public Map<String, Object> getEmployeeAndDevice(int employeeId) {
        Map<String, Object> result = new HashMap<>();

        Employee employeeNew = employeeRepository.findById(employeeId).orElse(null);

        if (employeeNew == null) {
            result.put("Mensaje", "No existe el empleado");

            return result;
        }

        result.put("Employee", employeeNew);

        List<Laptop> listaLaptop = laptopFeignClient.getLaptop(employeeId);

        if (listaLaptop == null) {
            result.put("Laptos", "El empleado no tiene laptops");

            return result;
        } else {

            result.put("Laptos", listaLaptop);

        }

        List<Smartphone> listaSmartphone = smartphoneFeignClient.getSmartphone(employeeId);

        if (listaSmartphone == null) {
            result.put("Smartphones", "El empleado no tiene Smartphones");

            return result;
        } else {

            result.put("Smartphones", listaSmartphone);

        }


        return result;
    }
}

