package com.micro.employeeservice.controller;

import com.micro.employeeservice.entity.Employee;
import com.micro.employeeservice.model.Laptop;
import com.micro.employeeservice.model.Smartphone;
import com.micro.employeeservice.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/employee")
//@CrossOrigin(origins = "http://http://localhost:4200", exposedHeaders = {"Access-Control-Allow-Origin","Access-Control-Allow-Credentials"}, allowCredentials = "true")
//@CrossOrigin(exposedHeaders = {"Access-Control-Allow-Origin","Access-Control-Allow-Credentials"})
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    //@CrossOrigin(origins = "http://localhost:4200")

    @GetMapping
    public ResponseEntity<List<Employee>> getAll(){
        List<Employee> listEmployee = employeeService.getAll();

        if (listEmployee.isEmpty())
            return ResponseEntity.noContent().build();
        return ResponseEntity.ok(listEmployee);

    }

    @GetMapping("/{id}")
    public ResponseEntity<Employee> getById(@PathVariable("id") int id){

        Employee employeeNew = employeeService.GetById(id);

        if (employeeNew == null) return ResponseEntity.notFound().build();

        return ResponseEntity.ok(employeeNew);

    }

    @PutMapping("/{id}")
    public ResponseEntity<Employee> actualizarEmpleado(@PathVariable("id") int id, @RequestBody Employee employee){
        Employee employeeNew = employeeService.GetById(id);

        if (employeeNew == null) return ResponseEntity.notFound().build();

        employeeNew.setName(employee.getName());
        employeeNew.setApellidos(employee.getApellidos());
        employeeNew.setEmail(employee.getEmail());

        Employee employeeActualizado = employeeService.save(employeeNew);
        return ResponseEntity.ok(employeeActualizado);

    }
    //@CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/empleados/{id}")
    public ResponseEntity<Map<String,Boolean>> eliminarEmpleado(@PathVariable("id") int id){
        Employee employeeNew = employeeService.GetById(id);

        if (employeeNew == null)
            return ResponseEntity.notFound().build();

        employeeService.borrarUsuario(id);

        Map<String, Boolean> respuesta = new HashMap<>();
        respuesta.put("eliminar",Boolean.TRUE);
        return ResponseEntity.ok(respuesta);
    }
    //@CrossOrigin(origins = "http://localhost:4200")
    @PostMapping
    public ResponseEntity<Employee> save(@RequestBody Employee employee){

        Employee employeeNew = employeeService.save(employee);

        return ResponseEntity.ok(employeeNew);
    }
    //@CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/guardarempleado")
    public Employee guardar(@RequestBody Employee employee){

        Employee employeeNew = employeeService.save(employee);

        return employeeNew;
    }

    @PostMapping("/savelaptop/{userid}")
    public ResponseEntity<Laptop> saveLaptop(@PathVariable("userid") int userid, @RequestBody Laptop laptop){

        Employee employeeNew = employeeService.GetById(userid);

        if (employeeNew == null) return ResponseEntity.notFound().build();

        Laptop laptopNew = employeeService.saveLaptop(userid,laptop);

        return ResponseEntity.ok(laptopNew);
    }

    @PostMapping("/savesmartphone/{userid}")
    public ResponseEntity<Smartphone> saveSmartphone(@PathVariable("userid") int userid, @RequestBody Smartphone smartphone){

        Employee employeeNew = employeeService.GetById(userid);

        if (employeeNew == null) return ResponseEntity.notFound().build();

        Smartphone smartphoneNew = employeeService.saveSmartphone(userid,smartphone);

        return ResponseEntity.ok(smartphoneNew);
    }

    @GetMapping("/laptop/{employeeId}")
    public ResponseEntity<List<Laptop>> getAllByIdEmployee(@PathVariable("employeeId") int employeeId){
        Employee employeeNew = employeeService.GetById(employeeId);

        if (employeeNew == null) return ResponseEntity.notFound().build();

        List<Laptop> listLaptop = employeeService.byUserId(employeeId);

        if (listLaptop.isEmpty())
            return ResponseEntity.noContent().build();
        return ResponseEntity.ok(listLaptop);

    }

    @GetMapping("/smartphone/{employeeId}")
    public ResponseEntity<List<Smartphone>> getAllByIdEmployeeSmartphone(@PathVariable("employeeId") int employeeId){
        Employee employeeNew = employeeService.GetById(employeeId);

        if (employeeNew == null) return ResponseEntity.notFound().build();

        List<Smartphone> listSmartphone = employeeService.byUserIdSmartphone(employeeId);

        if (listSmartphone.isEmpty())
            return ResponseEntity.noContent().build();
        return ResponseEntity.ok(listSmartphone);

    }

    @GetMapping("/getAll/{employeeId}")
    public ResponseEntity<Map<String,Object>> getAllDevice(@PathVariable("employeeId") int employeeId){
        Map<String,Object> result = employeeService.getEmployeeAndDevice(employeeId);
        return ResponseEntity.ok(result);

    }








}
