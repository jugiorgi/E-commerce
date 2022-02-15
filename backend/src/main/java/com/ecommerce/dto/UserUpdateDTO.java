package com.ecommerce.dto;

import com.ecommerce.services.validation.UserUpdateValid;
import lombok.Data;
import lombok.ToString;

@Data
@ToString
@UserUpdateValid
public class UserUpdateDTO extends UserDTO {
    private static final long serialVersionUID = 1L;

}
