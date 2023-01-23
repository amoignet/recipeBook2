import { EventEmitter, Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tarte au poireaux',
      'La reine des tartes',
      'https://assets.afcdn.com/recipe/20160325/58176_w1000h667c1cx2808cy1872.webp',
      [
        new Ingredient('Poireaux', 3),
        new Ingredient('Lardons', 400),
        new Ingredient('Oeufs', 3),
      ]),
    new Recipe(
      'Gnocchi',
      'Ne se prononce pas "nio-chi"',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
      [
        new Ingredient('Gnocchi', 350),
        new Ingredient('Sauce tomates', 250),
        new Ingredient('Fromage rapée', 150)
      ])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.slService.addIngredients(ingredients);
  }

}
