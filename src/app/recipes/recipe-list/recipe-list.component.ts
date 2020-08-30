import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Pizza', 'Super cheese pizza!', 'https://i.pinimg.com/originals/5b/dd/07/5bdd070ea344c21ef870c8d81dee345e.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
 