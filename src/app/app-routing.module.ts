import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './main/home/home.component'
import { CharacterListComponent } from './main/character-list/character-list.component';
import { AboutComponent } from './main/about/about.component';
import { CharacterDetailsComponent } from './main/character-details/character-details.component';
import { AddCharacterComponent } from './main/add-character/add-character.component';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'character-list',
    component: CharacterListComponent
  },
  {
    path:'about-us',
    component: AboutComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },{
    path:'character-detail/:id',
    component: CharacterDetailsComponent
  },
  {
    path:'character-add',
    component: AddCharacterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
