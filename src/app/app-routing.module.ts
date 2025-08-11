import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancamentosComponent } from './components/lancamentos/lancamentos.component';
import { AppComponent } from './app.component';
import { ListarLancamentoComponent } from './components/listar-lancamento/listar-lancamento.component';

const routes: Routes = [
  {path: '', component:LancamentosComponent},
  {path: 'lancamentos', component:ListarLancamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
