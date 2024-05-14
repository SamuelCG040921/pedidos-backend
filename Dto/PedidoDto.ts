class Pedido {
    private _idMenu: number;
    private _direccion: string;
    private _nombreUsuario: string;
    private _email: string;

    constructor(
        idMenu: number, direccion:string,
        nombreUsuario:string, email:string
    ){
        this._idMenu = idMenu;
        this._direccion = direccion;
        this._nombreUsuario = nombreUsuario;
        this._email = email;
    }
    //getters 
    get idMenu(){
        return this._idMenu
    }
    get direccion(){
        return this._direccion
    }
    get nombreUsuario(){
        return this._nombreUsuario
    }
    get email(){
        return this._email
    }

    //setters
    set idMenu(idMenu:number){
        this._idMenu = idMenu;
    }
    set direccion(direccion:string){
        this._direccion = direccion;
    }
    set nombreUsuario(nombreUsuario:string){
        this._nombreUsuario = nombreUsuario;
    }
    set email(email:string){
        this._email = email;
    }

}
export default Pedido