import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculosListaComponent } from './veiculos-lista.component';

describe('VeiculosListaComponent', () => {
  let component: VeiculosListaComponent;
  let fixture: ComponentFixture<VeiculosListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiculosListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
