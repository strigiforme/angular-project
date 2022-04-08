import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("lasagna", "garfield??,.,......", "https://i.redd.it/4xiipp8gupe51.jpg"),
    new Recipe("lasagna", "garfield??,.,......", "https://i.redd.it/4xiipp8gupe51.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
