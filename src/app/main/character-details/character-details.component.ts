import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import datos from 'src/assets/database.json';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent {

  characterId: string = '';
  character: any ;

  constructor(private route: ActivatedRoute){}

  // Recogemos la id como parametro y accedemos al database.json utilizando la id
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.characterId = params['id'];

      this.character = datos.characters.find(
        (char) => char.id === parseFloat(this.characterId)
        );
    });
  }
}
