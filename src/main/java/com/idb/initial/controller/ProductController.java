package com.idb.initial.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.idb.initial.entity.Product;
import com.idb.initial.service.ProductService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ProductController {

    private final ProductService productService;

    @PostMapping("/product")
    public Product postProduct(@RequestBody Product product) {
        return productService.postProduct(product);
    }

    @GetMapping("/products")
    private List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/product/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        Product product = productService.getProductById(id);
        if (product == null) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(product);
        }
    }

    @PutMapping("/product/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product product) {
        Product existingProduct = productService.getProductById(id);
        if (existingProduct == null) {
            return ResponseEntity.notFound().build();
        } else {
            existingProduct.setName(product.getName());
            existingProduct.setUnit(product.getUnit());
            existingProduct.setPrice(product.getPrice());
            existingProduct.setDescription(product.getDescription());
            existingProduct.setQuantity(product.getQuantity());
            existingProduct.setImage(product.getImage());
            Product updatedProduct = productService.updateProduct(existingProduct);
            return ResponseEntity.ok(updatedProduct);

        }

    }

    // Two methods for delete,and all are correct.
    @DeleteMapping("/product/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
        return ResponseEntity.noContent().build();
    }

    // @DeleteMapping("/product/{id}")
    // public ResponseEntity<?> deleteProduct(@PathVariable Long id) {
    // Product exisProduct = productService.getProductById(id);
    // if (exisProduct == null) {
    // return ResponseEntity.notFound().build();
    // } else {
    // productService.deleteProduct(id);
    // return ResponseEntity.ok().build();
    // }
    // }
}
