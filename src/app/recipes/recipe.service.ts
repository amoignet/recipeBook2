import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [];

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Tarte au poireaux',
  //     'La reine des tartes',
  //     'https://assets.afcdn.com/recipe/20160325/58176_w1000h667c1cx2808cy1872.webp',
  //     [
  //       new Ingredient('Poireaux', 3),
  //       new Ingredient('Lardons', 400),
  //       new Ingredient('Oeufs', 3),
  //     ]),
  //   new Recipe(
  //     'Gnocchi',
  //     'Ne se prononce pas "nio-chi"',
  //     'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
  //     [
  //       new Ingredient('Gnocchi', 350),
  //       new Ingredient('Sauce tomates', 250),
  //       new Ingredient('Fromage rapée', 150)
  //     ])
  // ];


  constructor(private slService: ShoppingListService) { }

  setRecipes(recipes: Recipe[]): void {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(newRecipe: Recipe): void {
    this.recipes.push(newRecipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe): void {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number): void {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
