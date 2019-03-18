import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturasListaComponent } from './faturas-lista.component';

describe('FaturasListaComponent', () => {
  let component: FaturasListaComponent;
  let fixture: ComponentFixture<FaturasListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaturasListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaturasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
