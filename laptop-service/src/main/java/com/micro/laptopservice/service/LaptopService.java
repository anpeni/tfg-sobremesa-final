package com.micro.laptopservice.service;

import com.micro.laptopservice.entity.Laptop;
import com.micro.laptopservice.repository.LaptopRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LaptopService {

    @Autowired
    LaptopRepository laptopRepository;

    public List<Laptop> getAll() {

        return laptopRepository.findAll();
    }

    public Laptop GetById(int id){
        return laptopRepository.findById(id).orElse(null);
    }

    public Laptop save(Laptop laptop){

        Laptop newLaptop = laptopRepository.save(laptop);
        return newLaptop;
    }

    public List<Laptop> byUserId(int userId) {

        return laptopRepository.findByUserId(userId);
    }
}

