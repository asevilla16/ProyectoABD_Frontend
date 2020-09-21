export class purchase {
    
    constructor(proveedor = " ", idOrdenCompra = 0, fechacompra= " ", fechaingreso = " ", autorizadopor=" "){

    }
    
    proveedor?: string;
    IDOrdenCompra? : number;
    fechacompra?: string;
    fechaIngreso?: string;
    autorizadopor?: string;
    totalfacturado?: number;
    SuministroInsumo?: string;
    PrecioUnitario?: number;
    unidadMed?: string
}