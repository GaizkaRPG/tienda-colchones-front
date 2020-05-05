import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColchonesComponent } from './components/colchones/colchones.component';
import { SomieresComponent } from './components/somieres/somieres.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { IndexComponent } from './components/index/index.component';
import {MatCardModule} from '@angular/material/card';
import { ColchonComponent } from './components/colchon/colchon.component';
import { SomierComponent } from './components/somier/somier.component'; 


@NgModule({
  declarations: [
    AppComponent,
    ColchonesComponent,
    SomieresComponent,
    LoginComponent,
    NavComponent,
    IndexComponent,
    ColchonComponent,
    SomierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
