// a user can be a developer, student, businessperson
export interface User {
    username: string;
    password: string;
    phone?: number;
    email?:string;
    id?: string;
    academicLevel?: string;
    businessCategory?: string;
    developmentField?: string;
    token?: string;
}
