export declare class UserService {
    private userRepository;
    constructor();
    checkLogin: (userLogin: any) => Promise<{
        check: boolean;
        token: string;
        userFind: any[];
    }>;
    checkRegister: (userRegister: any) => Promise<any>;
    createUser: (user: any) => Promise<any>;
    checkLoginFb: (userFb: any) => Promise<any>;
    checkChangePassword: (idUser: any, oldPassword: any, newPassword: any) => Promise<{
        check: boolean;
        userFind: any[];
    }>;
    updateProfile: (idUser: any, newFullName: any, newJob: any, newAddress: any, newPhone: any, newEmail: any) => Promise<{
        userFind: any[];
    }>;
}
