import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Characters } from 'src/app/models/characters.model';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit{

  characterArray: Characters[] = [];

  constructor(private characterService: CharactersService, private route: ActivatedRoute){}

  ngOnInit(): void{
    this.characterService.getAll().subscribe(result =>{
      this.characterArray = result;
    });
  }
}
