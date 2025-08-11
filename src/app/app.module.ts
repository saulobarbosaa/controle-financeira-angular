import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LancamentosComponent } from './components/lancamentos/lancamentos.component';
import { AdicionaLancamentoComponent } from './components/adiciona-lancamento/adiciona-lancamento.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormLancamentoComponent } from './components/form-lancamento/form-lancamento.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListarLancamentoComponent } from './components/listar-lancamento/listar-lancamento.component';
import { MatTableModule } from '@angular/material/table';
import { TipoLancamentoPipePipe } from './pipes/tipo-lancamento-pipe.pipe';
import { MatIconModule } from '@angular/material/icon';
import { ExcluirLancamentoComponent } from './components/excluir-lancamento/excluir-lancamento.component';

@NgModule({
  declarations: [
    AppComponent,
    LancamentosComponent,
    AdicionaLancamentoComponent,
    FormLancamentoComponent,
    ListarLancamentoComponent,
    TipoLancamentoPipePipe,
    ExcluirLancamentoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
