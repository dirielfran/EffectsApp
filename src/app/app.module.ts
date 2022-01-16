import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//PrimeNg
import {ButtonModule} from 'primeng/button';
//ngrx store
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './store/app.reducers';
//ngrx effects
import { EffectsModule } from '@ngrx/effects';
import { EffectsArray } from './store/effects';
import { SharedModule } from './shared/shared.module';
//Modulos
import { UsuariosModule } from './usuarios/usuarios.module';
import {SidebarModule} from 'primeng/sidebar';
//Componentes
import { AppComponent } from './app.component';
//Entorno
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    UsuariosModule,
    SharedModule,
    ButtonModule,
    SidebarModule,
    StoreModule.forRoot( appReducers ),
    EffectsModule.forRoot(EffectsArray),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
