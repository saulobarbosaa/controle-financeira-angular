import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoLancamentoPipe'
})
export class TipoLancamentoPipePipe implements PipeTransform {

  transform(value: number): string {
    switch(value) {
      case 1:
        return 'Despesa'
      case 2: 
        return 'Receita'
      default:
        return 'Desconhecido'; 
    }
  }

}
