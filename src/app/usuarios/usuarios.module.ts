import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { UsuarioComponent } from './usuario/usuario.component';
import {AccordionModule} from 'primeng/accordion';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListaComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    AccordionModule,
    ButtonModule,
    TableModule,
    FormsModule
  ],
  exports: [
    ListaComponent,
    UsuarioComponent
  ]
})
export class UsuariosModule { }
