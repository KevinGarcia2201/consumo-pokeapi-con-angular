import { Component, Input, OnInit } from '@angular/core';
import { ApiPokemonService } from 'src/app/utlity/service/api-pokemon.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() informacion: any

  public img = ""

  constructor(private apiPokemonService: ApiPokemonService) { }

  ngOnInit(): void {
    this.apiPokemonService.getQueryPokemon(this.informacion.url)
      .subscribe((response: any) => {
        // console.log(response)
        this.img = response.sprites.front_default;
        console.log(this.img)
      })
  }

}
