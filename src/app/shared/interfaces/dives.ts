export interface Dives {
    id:number; // requis par défaut
    name:string;
    location?:string ; // optionnel 
    level:number;
    description:string;
    latitude?:number;
    longitude?:number;
    evaluation?:number[];    
    photo:string;
}
