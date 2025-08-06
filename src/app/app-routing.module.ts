import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancamentosComponent } from './components/lancamentos/lancamentos.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: '', component:LancamentosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
