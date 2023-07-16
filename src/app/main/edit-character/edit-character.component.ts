import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Characters } from 'src/app/models/characters.model';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.css']
})
export class EditCharacterComponent {

  characterId: number = 1;
  character: Characters = new Characters;

  constructor(private characterService: CharactersService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void{  
    this.route.params.subscribe(params => {
      this.characterId = params ['id'];
    });

    this.characterService.getById(this.characterId).subscribe(result => {
      this.character = result;
    });
  }

  modifyCharacter(): void{
    let datosNuevos = {
      name: this.character.name,
      status: this.character.status,
      species: this.character.species,
      gender: this.character.gender,
      origin: this.character.origin,
      location: this.character.location,
      image: this.character.image,
    };

    this.characterService.update(this.characterId, datosNuevos).subscribe( result => {
      this.router.navigate(['/character-list']);
      console.log(result);
    });
  }
}
