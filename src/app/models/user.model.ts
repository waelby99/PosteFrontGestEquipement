import { Commande } from "./commande.model";
import { Materiel } from "./materiels.model";

export class User{
    id?:any;
    username?:string;
    email?:string;
    password?:string;
    matss?:Materiel[];
    commss?:Commande[];
}