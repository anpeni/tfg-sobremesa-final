package com.micro.laptopservice.repository;

import com.micro.laptopservice.entity.Laptop;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LaptopRepository extends JpaRepository<Laptop, Integer> {

    List<Laptop> findByUserId(int employeeId);

}
