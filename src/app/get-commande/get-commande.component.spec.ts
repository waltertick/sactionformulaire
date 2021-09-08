import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCommandeComponent } from './get-commande.component';

describe('GetCommandeComponent', () => {
  let component: GetCommandeComponent;
  let fixture: ComponentFixture<GetCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
