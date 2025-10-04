

export enum Role {
    SuperAdmin = "Super Admin"
}
export interface IUser {
    role: Role;
    email: string;
    password: string;
}