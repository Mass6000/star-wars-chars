import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './welcome/welcome.component';
import { CharacterListComponent } from './characters/character-list/character-list.component';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatGridListModule, MatIconModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FilterCharacterPipe } from './characters/filter-character.pipe';
import { ForceComponent } from './characters/force/force.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterComponent } from './characters/character/character.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CharacterListComponent,
    FilterCharacterPipe,
    ForceComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
