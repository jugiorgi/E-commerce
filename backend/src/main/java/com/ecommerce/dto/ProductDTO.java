package com.ecommerce.dto;

import com.ecommerce.entities.Category;
import com.ecommerce.entities.Product;
import lombok.Data;
import lombok.ToString;

import javax.validation.constraints.*;
import java.io.Serializable;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Data
@ToString
public class ProductDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;

    @Size(min = 5, max = 60, message = "Deve ter entre 5 e 60 caracteres")
    @NotBlank(message = "Campo requerido")
    private String name;

    @NotBlank(message = "Campo requerido")
    private String description;

    @Positive(message = "Preço deve ser um valor positivo")
    private Double price;

    private String imgUrl;

    @PastOrPresent(message = "A data do produto não pode ser futura")
    private Instant date;

    @NotEmpty(message = "Produto sem categoria não é permitido")
    private List<CategoryDTO> categories = new ArrayList<>();

    public ProductDTO() {
    }

    public ProductDTO(Long id, String name, String description, Double price, String imgUrl, Instant date) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imgUrl = imgUrl;
        this.date = date;
    }

    public ProductDTO(Product entity) {
        this.id = entity.getId();
        this.name = entity.getName();
        this.description = entity.getDescription();
        this.price = entity.getPrice();
        this.imgUrl = entity.getImgUrl();
        this.date = entity.getDate();
    }

    public ProductDTO(Product entity, Set<Category> categories) {
        this(entity);
        categories.forEach(cat -> this.categories.add(new CategoryDTO(cat)));
    }
}
