import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioUsoComponent } from './relatorio-uso.component';

describe('RelatorioUsoComponent', () => {
  let component: RelatorioUsoComponent;
  let fixture: ComponentFixture<RelatorioUsoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatorioUsoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioUsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
