import { Component, OnInit } from '@angular/core';
import { ApiPokemonService } from 'src/app/utlity/service/api-pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public pokemones:Array<any> = []; 
  constructor(private apiPokemonService:ApiPokemonService) { }

  ngOnInit(): void {
    this.apiPokemonService.getQuery('').subscribe((response:any)=>{
      this.pokemones= response.results
      console.log(response.results)

    });
  }

}
