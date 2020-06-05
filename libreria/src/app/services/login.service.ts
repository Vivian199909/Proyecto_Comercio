import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Injectable() //Servicio
export class LoginService {
    constructor(
        private readonly _httpClient: HttpClient
    ){}

    metodoGet(url: string){
        return this._httpClient.get(url);
    }

    metodoPost(url: string, datos){
        return this._httpClient.post(url,datos);
    }

    metodoPut(url: string, dataEditar){
        return this._httpClient.put(url,dataEditar);
    }

    metodoDelete(url: string){
        return this._httpClient.delete(url);
    }

    crearRegistro(datosRegistroCrear){
        const url = 'http://localhost:1337/registro';
        return this._httpClient.post(url,datosRegistroCrear);
    }
    crearCredenciales(datosCredencialesCrear){
        const url = 'http://localhost:1337/ingreso';
        return this._httpClient.post(url,datosCredencialesCrear);
    }
    editarRegistro(datosRegistroCrear){
        const url = 'http://localhost:1337/registro';
        return this._httpClient.put(url,datosRegistroCrear);
    }
    editarCredenciales(datosCredencialesCrear){
        const url = 'http://localhost:1337/ingreso';
        return this._httpClient.put(url,datosCredencialesCrear);
    }

    }
