class Egreso extends Dato {
    static id = 0;

    constructor(desc, value) {
        super(desc, value);
        this._id = ++Egreso.id;
    }

    get id(){return this._id;}
}