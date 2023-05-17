package com.micro.smartphoneservice.repository;


import com.micro.smartphoneservice.entity.Smartphone;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SmartphoneRepository extends JpaRepository<Smartphone, Integer> {

    List<Smartphone> findByUserId(int employeeId);

}
