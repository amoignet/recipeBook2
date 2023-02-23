import { NgModule } from '@angular/core';

import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingRoutingModule } from './shopping-list-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [
    FormsModule,
    RouterModule.forChild([
      {path: 'shopping-list', component: ShoppingListComponent }
    ]),
    SharedModule,
    ShoppingRoutingModule
  ]
})
export class ShoppingListModule { }
