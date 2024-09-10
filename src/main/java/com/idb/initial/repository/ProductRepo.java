package com.idb.initial.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.idb.initial.entity.Product;

public interface ProductRepo extends JpaRepository<Product, Long> {
    
}
