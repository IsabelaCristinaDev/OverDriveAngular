import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCarroComponent } from './cadastro-carro.component';

describe('CadastroCarroComponent', () => {
  let component: CadastroCarroComponent;
  let fixture: ComponentFixture<CadastroCarroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroCarroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
