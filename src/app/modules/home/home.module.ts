import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Componentes
import { HeaderComponent } from './components/header/header.component';
import { ListButtonDeleteAllComponent } from './components/list-button-delete-all/list-button-delete-all.component';
import { ListInputAddItensComponent } from './components/list-input-add-itens/list-input-add-itens.component';
import { ListComponent } from './components/list/list.component';

//Page
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ListButtonDeleteAllComponent,
    ListInputAddItensComponent,
    ListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
