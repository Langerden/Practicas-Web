class Ingreso extends Dato {

    static id = 0;

    constructor(desc, value) {
        super(desc, value);
        this._id = ++Ingreso.id;
    }

    get id(){return this._id;}
}