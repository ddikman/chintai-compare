import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property-card/property-card.component';
import { YenPipe } from './yen.pipe';
import { AddPropertyInputComponent } from './add-property-input/add-property-input.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    YenPipe,
    AddPropertyInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
