package com.ecommerce.dto;


import com.ecommerce.services.validation.UserInsertValid;
import lombok.Data;
import lombok.ToString;

@Data
@ToString
@UserInsertValid
public class UserInsertDTO extends UserDTO {
    private static final long serialVersionUID = 1L;

    private String password;

    UserInsertDTO() {
        super();
    }
}
