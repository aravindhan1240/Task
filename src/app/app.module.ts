import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderoneComponent } from './component/headerone/headerone.component';
import { HeadertwoComponent } from './component/headertwo/headertwo.component';
import { FooterComponent } from './component/footer/footer.component';
import { ScreenoneComponent } from './component/screenone/screenone.component';
import { ScreentwoComponent } from './component/screentwo/screentwo.component';
import { AddbuttonComponent } from './component/addbutton/addbutton.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { NameComponent } from './component/name/name.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderoneComponent,
    HeadertwoComponent,
    FooterComponent,
    ScreenoneComponent,
    ScreentwoComponent,
    AddbuttonComponent,
    NameComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatMenuModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
