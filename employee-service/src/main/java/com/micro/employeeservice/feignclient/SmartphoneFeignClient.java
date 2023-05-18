package com.micro.employeeservice.feignclient;

import com.micro.employeeservice.model.Laptop;
import com.micro.employeeservice.model.Smartphone;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(name = "smartphone-service")
//@RequestMapping("/smartphone")
public interface SmartphoneFeignClient {

    @PostMapping("/smartphone")
    Smartphone save(@RequestBody Smartphone smartphone);

    @GetMapping("/smartphone/employee/{userId}")
    List<Smartphone> getSmartphone(@PathVariable("userId") int id);


}
