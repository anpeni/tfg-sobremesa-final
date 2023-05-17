package com.micro.smartphoneservice.controller;


import com.micro.smartphoneservice.entity.Smartphone;
import com.micro.smartphoneservice.service.SmartphoneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/smartphone")
public class SmartphoneController {

    @Autowired
    SmartphoneService smartphoneService;

    @GetMapping
    public ResponseEntity<List<Smartphone>> getAll(){
        List<Smartphone> listEmployee = smartphoneService.getAll();

        if (listEmployee.isEmpty())
            return ResponseEntity.noContent().build();
        return ResponseEntity.ok(listEmployee);

    }

    @GetMapping("/{id}")
    public ResponseEntity<Smartphone> getById(@PathVariable("id") int id){

        Smartphone laptopNew = smartphoneService.GetById(id);

        if (laptopNew == null) return ResponseEntity.notFound().build();

        return ResponseEntity.ok(laptopNew);

    }

    @PostMapping
    public ResponseEntity<Smartphone> save(@RequestBody Smartphone  smartphone){

        Smartphone smartphoneNew = smartphoneService.save(smartphone);

        return ResponseEntity.ok(smartphoneNew);
    }

    @GetMapping("/employee/{userId}")
    public ResponseEntity<List<Smartphone>> getAllByIdEmployee(@PathVariable("userId") int userId){
        List<Smartphone> listsmartphone = smartphoneService.byUserId(userId);

        if (listsmartphone.isEmpty())
            return ResponseEntity.noContent().build();
        return ResponseEntity.ok(listsmartphone);

    }

}

