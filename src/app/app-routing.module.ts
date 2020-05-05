import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { ColchonesComponent } from './components/colchones/colchones.component';
import { ColchonComponent } from './components/colchon/colchon.component';
import { SomieresComponent } from './components/somieres/somieres.component';
import { SomierComponent } from './components/somier/somier.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'colchones', component: ColchonesComponent },
  { path: 'colchones/:id', component: ColchonComponent },
  { path: 'somieres', component: SomieresComponent },
  { path: 'somieres/:id', component: SomierComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }