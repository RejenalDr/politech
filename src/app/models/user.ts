export enum UserRole {
    Employee,
    Leader,
    Admin
}

export interface IUser {
    id: string;
    firstName: string;
    surname: string;
    avatar: string;
    birthdate: string;
    jobTitle: string;
    workEmail: string;
    email: string;
    phone: string;
    skype: string;
    workStartDate: string;
    isActive: boolean;
    workEndDate: string;
    deleted: boolean;
    balance: 0;
    teamId: string;
    teams?: ITeam[];

}

export interface ITeam {
    id: string;
    name: string;
    teamLeadId: string;
    deleted: true;
    teamLeadName: string;
    employeeCount: 0;
    employees: [
        null
    ]
}