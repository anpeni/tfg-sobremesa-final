package com.micro.smartphoneservice.service;



import com.micro.smartphoneservice.entity.Smartphone;
import com.micro.smartphoneservice.repository.SmartphoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SmartphoneService {

    @Autowired
    SmartphoneRepository smartphoneRepository;

    public List<Smartphone> getAll() {

        return smartphoneRepository.findAll();
    }

    public Smartphone GetById(int id){
        return smartphoneRepository.findById(id).orElse(null);
    }

    public Smartphone save(Smartphone laptop){

        Smartphone newLaptop = smartphoneRepository.save(laptop);
        return newLaptop;
    }

    public List<Smartphone> byUserId(int userId) {

        return smartphoneRepository.findByUserId(userId);
    }

    public void borrarSmartphone(int id) {

        smartphoneRepository.deleteById(id);
    }
}

