package com.brecho.dto;


import com.brecho.services.validation.UserInsertValid;
import lombok.Data;

@Data
@UserInsertValid
public class UserInsertDTO extends UserDTO {
    private static final long serialVersionUID = 1L;

    private String password;

    UserInsertDTO() {
        super();
    }
}
