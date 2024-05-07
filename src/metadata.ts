/* eslint-disable */
export default async () => {
    const t = {};
    return { "@nestjs/swagger": { "models": [[import("./users/dto/create-user.dto"), { "CreateUserDto": { firstname: { required: true, type: () => String }, lastname: { required: true, type: () => String }, username: { required: true, type: () => String, minLength: 8 }, email: { required: true, type: () => String }, password: { required: true, type: () => String, minLength: 8 }, userSettingsId: { required: true, type: () => Number, minimum: 1, maximum: 10 }, userRolSettingsId: { required: true, type: () => Number, minimum: 1, maximum: 10 } } }], [import("./users/dto/update-user.dto"), { "UpdateUserDto": { firstname: { required: false, type: () => String }, lastname: { required: false, type: () => String }, username: { required: false, type: () => String }, email: { required: false, type: () => String }, password: { required: false, type: () => String }, userSettingsId: { required: false, type: () => Number, minimum: 1, maximum: 10 }, userRolSettingsId: { required: false, type: () => Number, minimum: 1, maximum: 10 } } }], [import("./auth/dto/login-auth.dto"), { "LoginAuthDto": { email: { required: true, type: () => String }, password: { required: true, type: () => String, minLength: 8, maxLength: 20 } } }], [import("./auth/dto/register-auth.dto"), { "RegisterAuthDto": { username: { required: true, type: () => String } } }], [import("./auth/entities/auth.entity"), { "Auth": {} }], [import("./users/entities/user.entity"), { "User": {} }]], "controllers": [[import("./users/users.controller"), { "UsersController": { "getAllUsers": { type: Object }, "getUserById": {}, "createUser": { type: Object }, "updateUser": {}, "removeUser": {} } }], [import("./auth/auth.controller"), { "AuthController": { "registerUser": { type: String }, "login": { type: Object } } }]] } };
};