import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from './recipe.model';
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private slService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe("lasagna",
      "garfield??,.,......",
      "https://i.redd.it/4xiipp8gupe51.jpg",
      [
        new Ingredient("tomato sauce", 1),
        new Ingredient("noodles", 2),
        new Ingredient("cheese", 4)
      ]),
    new Recipe("wine",
      "5 year hannibal buress vintage",
      "https://www.liquor.com/thmb/fALkuBlNg6LKJbVftHaeFKJzBBY=/140x140/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/03beerwine-wine-d60b0db5770b41c284cadaecaa5b5c96.png",
      [
        new Ingredient("poop", 10)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
