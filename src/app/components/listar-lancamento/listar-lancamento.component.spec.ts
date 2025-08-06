import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarLancamentoComponent } from './listar-lancamento.component';

describe('ListarLancamentoComponent', () => {
  let component: ListarLancamentoComponent;
  let fixture: ComponentFixture<ListarLancamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarLancamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarLancamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
