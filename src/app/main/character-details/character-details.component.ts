import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Characters } from 'src/app/models/characters.model';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent {

  characterId: number = 1;
  character: Characters = new Characters;

  constructor(private characterService: CharactersService, private route: ActivatedRoute, private router: Router){}

  // Recogemos la id como parametro y accedemos al database.json utilizando la id
  ngOnInit(): void{  
    this.route.params.subscribe(params => {
      this.characterId = params ['id'];
    });

    this.characterService.getById(this.characterId).subscribe(result => {
      this.character = result;
    });
  }

  deleteCharacter(): void{
    this.characterService.delete(this.characterId).subscribe( result => {
      this.router.navigate(['/character-list']);
    });
  }
}
