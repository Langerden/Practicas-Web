class Dato{
    constructor(desc, valor){
        this._desc = desc;
        this._valor = valor;
    }

    get desc() {return this._desc;}
    get valor() {return this._valor;}

    set desc(desc){this._desc = desc;}
    set valor(val){this._valor = val;}
}