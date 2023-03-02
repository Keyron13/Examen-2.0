import { Component } from '@angular/core';
import { PeliculaService } from 'src/app/Service/pelicula.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-ver-pelicula',
  templateUrl: './ver-pelicula.component.html',
  styleUrls: ['./ver-pelicula.component.css']
})
export class VerPeliculaComponent {
  constructor(private peliculaService:PeliculaService, private _sanitizer: DomSanitizer){}

      term!:any;
  		pelicula!:any;

  		ngOnInit(): void {
    			this.verPelicula();
  		}

  		verPelicula(){
    			this.peliculaService.indexPelicula().subscribe((data:any)=>{
      		console.log(data);
      		this.pelicula=Object.values(data.peliculas);
    			},(e)=>{console.log(e);})
  		}

  		eliminarPelicula(id:any){
    			this.peliculaService.destroyPelicula(id).subscribe((data:any)=>{
      		alert('Se Elimino Correctamente.');
      		this.ngOnInit()
    			},(e)=>{console.log(e)})
  		}

      getVideoIframe(url:any) {
        let video, results;

        if (url === null) {
            return '';
        }
        results = url.match('[\\?&]v=([^&#]*)');
        video   = (results === null) ? url : results[1];

        return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);
      }
}
