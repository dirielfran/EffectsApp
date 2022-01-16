import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AppState } from 'src/app/store/app.reducers';
import { cargarUsuarios } from '../../store/actions/usuarios.actions'

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  loading: boolean = false;
  error: any;

  /*clonedUsers: { [s: string]: Usuario; } = {};*/

  constructor( /*private userService: UsuarioService,*/
                private store: Store<AppState>) { }

  ngOnInit(): void {
    /*this.userService.getUsers().subscribe( data => {
      console.log( data );
      this.usuarios = data;
    });*/
    this.store.select('usuarios').subscribe( ({users, loading, error}) => {
      this.usuarios = users;
      this.loading = loading;
      this.error = error;
    })
    this.store.dispatch(cargarUsuarios());

  }

  /*onRowEditInit(book: Usuario) {
    console.log('Row edit initialized');
  }

  onRowEditSave(book: Usuario) {
    console.log('Row edit saved');
  }

  onRowEditCancel(book: Usuario, index: number) {
    console.log('Row edit cancelled');
  }*/

}
