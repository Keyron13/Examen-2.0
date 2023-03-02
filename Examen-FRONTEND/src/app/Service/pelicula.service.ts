import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private api='http://127.0.0.1:8000/api/';

  	constructor(private http: HttpClient) { }

  	indexPelicula(){
    		return this.http.get(`${this.api}pelicula`);
  	}

  	showPelicula(id:any){
    		return this.http.get(`${this.api}pelicula/${id}`);
  	}

  	storePelicula(body:any){
    		return this.http.post(this.api+'pelicula',body);
  	}

  	updatePelicula(id:any,body:any){
    		return this.http.post(`${this.api}pelicula/${id}`,body);
 	}

  	destroyPelicula(id:any){
    		return this.http.delete(`${this.api}pelicula/${id}`);
  	}
}
