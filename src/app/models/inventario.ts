import { ThrowStmt } from '@angular/compiler';

export class inventario{

    constructor(id=0, idinsumo=0, canidad=0){
        this.id=id;
        this.idinsummo=idinsumo;
        this.cantidad=canidad;

    }

    id?: number;
    idinsummo?: number;
    cantidad?: number;

}