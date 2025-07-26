import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLancamentoComponent } from './form-lancamento.component';

describe('FormLancamentoComponent', () => {
  let component: FormLancamentoComponent;
  let fixture: ComponentFixture<FormLancamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLancamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLancamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
