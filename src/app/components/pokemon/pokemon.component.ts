import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiPokemonService } from 'src/app/utlity/service/api-pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  public nombrePokemon = ""
  @Input() informacion: any
  public img = ""
  public experiencia=""
  public peso=""
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private apipokemonService: ApiPokemonService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params: any) => {
      this.nombrePokemon = params.nombre;
      console.log(this.nombrePokemon);
      this.infoPoke(this.nombrePokemon);
    })


  }




  infoPoke(nombre: string): void {

    this.apipokemonService.getQuery(nombre).subscribe((Response: any) => {
      console.log(Response);
      this.img = Response.sprites.front_default;
      this.experiencia = Response.base_experience;
      this.peso= Response.weight;
    }, err => {
      this.router.navigate(['/'])
    })

  }

}
