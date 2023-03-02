import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PeliculaService } from 'src/app/Service/pelicula.service';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent {
      pelicula!:any;
      file!:any;

  		constructor(private peliculaService:PeliculaService, private router:Router){}

  		crearPelicula= new FormGroup({
    			nombre: new FormControl('', [Validators.required]),
    			tipo: new FormControl('', [Validators.required]),
    			imagen: new FormControl('', [Validators.required]),
          url: new FormControl('', [Validators.required])
  		})

  		ngOnInit(){
    			this.cargar();
  		}

  		cargar(){
    			this.peliculaService.indexPelicula().subscribe((data:any)=>{
      		console.log(data);
      		this.pelicula=data.peliculas;
      		console.log(this.pelicula);
    			});
  		}

      onFileSelected(event:any) {
        this.file = event.target.files[0];
      }

  		ingresoPelicula(form:any){
        const body:any=new FormData();
        body.append('nombre',this.crearPelicula.get('nombre')?.value);
        body.append('tipo',this.crearPelicula.get('tipo')?.value);
        body.append('imagen',this.file);
        body.append('url',this.crearPelicula.get('url')?.value);
        console.log(body);
        this.peliculaService.storePelicula(body).subscribe((data:any)=>{
          console.log(data);
          alert('Se creo la pelicula.');
          this.router.navigate(['/verPelicula']);
        },(e)=>{console.log(e);});
  		}
}
