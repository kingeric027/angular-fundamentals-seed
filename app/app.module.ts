import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'; 
import { CommonModule } from '@angular/common'; //Gives us directives

import {AppComponent} from './app.component';

@NgModule({ 
  declarations: [
    AppComponent //This is where you register the component. This will be a list of all components.
  ],
  imports:[
    BrowserModule,
    CommonModule
  ],
  bootstrap: [AppComponent] //tell module to bootsrap component
})
export class AppModule {}