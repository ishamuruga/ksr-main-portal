import { Role } from "./role";

export class VUser {
    id: string = "";
    password: string = "";
    active: boolean = false;
    roles: Role[] = [];
    photoURL?: string;
    displayName: string="";
    loggedInTS!: Date;
    accessToken:string="";
    refreshToken:string="";
    name:string="";
    constructor(){}
}

// export const users: VUser[] = [
//     {
//         id: "rajk",
//         password: "rajk123",
//         active: true,
//         loggedInTS: new Date(),
//         roles: [
//             { id: 1, name: "admin" },
//             { id: 2, name: "vol" }
//         ],
//         accessToken:"",
//         refreshToken:""
//     },
//     {
//         id: "kala",
//         password: "kala123",
//         active: true,
//         loggedInTS: new Date(),
//         roles: [
//             { id: 2, name: "vol" }
//         ],
//         accessToken:"",
//         refreshToken:""
//     }
// ]