package com.micro.laptopservice.controller;

import com.micro.laptopservice.entity.Laptop;
import com.micro.laptopservice.service.LaptopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/laptop")
public class LaptopController {

    @Autowired
    LaptopService laptopService;

    @GetMapping
    public ResponseEntity<List<Laptop>> getAll(){
        List<Laptop> listEmployee = laptopService.getAll();

        if (listEmployee.isEmpty())
            return ResponseEntity.noContent().build();
        return ResponseEntity.ok(listEmployee);

    }

    @GetMapping("/{id}")
    public ResponseEntity<Laptop> getById(@PathVariable("id") int id){

        Laptop laptopNew = laptopService.GetById(id);

        if (laptopNew == null) return ResponseEntity.notFound().build();

        return ResponseEntity.ok(laptopNew);

    }

    @PostMapping
    public ResponseEntity<Laptop> save(@RequestBody Laptop laptop){

        Laptop laptopNew = laptopService.save(laptop);

        return ResponseEntity.ok(laptopNew);
    }

    @GetMapping("/employee/{userId}")
    public ResponseEntity<List<Laptop>> getAllByIdEmployee(@PathVariable("userId") int userId){
        List<Laptop> listLaptop = laptopService.byUserId(userId);

        if (listLaptop.isEmpty())
            return ResponseEntity.noContent().build();
        return ResponseEntity.ok(listLaptop);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String,Boolean>> eliminarLaptop(@PathVariable("id") int id){
        Laptop employeeNew = laptopService.GetById(id);

        if (employeeNew == null)
            return ResponseEntity.notFound().build();

        laptopService.borrarLaptop(id);

        Map<String, Boolean> respuesta = new HashMap<>();
        respuesta.put("eliminar",Boolean.TRUE);
        return ResponseEntity.ok(respuesta);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Laptop> pasarAlmacen(@PathVariable("id") int id){
        Laptop laptopNew = laptopService.GetById(id);

        if (laptopNew == null) return ResponseEntity.notFound().build();

        laptopNew.setUserId(0);


        Laptop laptopActualizado = laptopService.save(laptopNew);
        return ResponseEntity.ok(laptopActualizado);

    }



}

