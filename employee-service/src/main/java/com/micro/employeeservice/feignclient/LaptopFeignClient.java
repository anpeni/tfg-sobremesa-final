package com.micro.employeeservice.feignclient;

import com.micro.employeeservice.model.Laptop;
import com.micro.employeeservice.model.Smartphone;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(name = "laptop-service", url ="http://localhost:8002" )
//@RequestMapping("/laptop")
public interface LaptopFeignClient {

    @PostMapping("/laptop")
    Laptop save(@RequestBody Laptop laptop);


    @GetMapping("/laptop/employee/{userId}")
    List<Laptop> getLaptop(@PathVariable("userId") int id);

    }





