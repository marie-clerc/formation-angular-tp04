export class Dives {
    // props
    public id!:number; // ! obligatoire
    public name!:string;
    public location!:string;
    public level!:number;
    public description!:string;
    public latitude?:number; // ? => optionnel
    public longitude?:number;
    public evaluation?:number[]; //  array number   
    public photo!:string;

    constructor(){
        // this.name='';
    }

    // méthodes
}
