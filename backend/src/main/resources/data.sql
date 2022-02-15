INSERT INTO tb_user (first_name, last_name, email, password) VALUES ('Clarke', 'Griffin', 'clarke@test.com', '$2a$10$WFNsDxUo/Pu9kQBto2GDC.731bJovSBfspwrZmtgAuSFHqTz1VYnq');

INSERT INTO tb_role (authority) VALUES ('ROLE_OPERATOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 2);
