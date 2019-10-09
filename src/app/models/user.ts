export enum UserRole {
    Employee,
    Leader,
    Admin
}
 
export interface IUser {
    id: number;
    date: Date;   
    name: string;
    position: string;
    personalEmail: string;
    workEmail: string;
    phone: string;
    skype: string;
    hireDate: Date;
    teamName: string;
    teamLeader: string;
    role: UserRole;
    roleFormatted: string;
    avatarLink: string;
}