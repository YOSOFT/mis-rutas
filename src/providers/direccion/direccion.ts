import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Direccion } from '../../models/direccion';

@Injectable()
export class DireccionProvider {

  direccionRef: AngularFireObject<Direccion>;
  direccion: Observable<Direccion>;

  direccionesRef : AngularFireList<Direccion>;
  direcciones: Observable<Direccion[]>;

  constructor(private afdb: AngularFireDatabase) {
    this.direccionRef = afdb.object('direccion');
    this.direccion = this.direccionRef.valueChanges();

    this.direccionesRef = afdb.list('direcciones');
    this.direcciones = this.direccionesRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  guardarDireccion(direccion:Direccion){
    // this.direccionRef.set(direccion);
    this.direccionesRef.push(direccion);
  }

}
