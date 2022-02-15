package com.ecommerce.dto;

import com.ecommerce.entities.Category;
import lombok.Data;
import lombok.ToString;

import java.io.Serializable;

@Data
@ToString
public class CategoryDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    private String name;

    public CategoryDTO() {
    }

    public CategoryDTO(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public CategoryDTO(Category entity) {
        this.id = entity.getId();
        this.name = entity.getName();
    }
}
