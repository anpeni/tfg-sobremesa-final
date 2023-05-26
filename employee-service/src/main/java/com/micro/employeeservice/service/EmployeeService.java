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

import java.util.*;

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

    public void borrarUsuario(int id) {

        employeeRepository.deleteById(id);
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

    public Laptop saveLaptopAlmacen(int employeeId, Laptop laptop) {
        laptop.setUserId(0);
        Laptop laptopNew = laptopFeignClient.save(laptop);

        return laptopNew;
    }

    public Smartphone saveSmartphoneAlmacen(int employeeId, Smartphone smartphone) {
        smartphone.setUserId(0);
        Smartphone smartphoneNew = smartphoneFeignClient.save(smartphone);

        return smartphoneNew;
    }

    public Smartphone saveSmartphone(int employeeId, Smartphone smartphone) {
        smartphone.setUserId(employeeId);
        Smartphone smartphoneNew = smartphoneFeignClient.save(smartphone);

        return smartphoneNew;
    }




    public List<Laptop> byUserId(int employeeId) {

        List<Laptop> laptops = laptopFeignClient.getLaptop(employeeId);
        if(laptops == null) {
            return new ArrayList<>();
        }
        return laptops;
    }

    public List<Smartphone> byUserIdSmartphone(int employeeId) {

        List<Smartphone> smartphones = smartphoneFeignClient.getSmartphone(employeeId);
        if(smartphones == null) {
            return new ArrayList<>();
        }
        return smartphones;
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

