import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoCardComponent } from './plano-card.component';

describe('PlanoCardComponent', () => {
  let component: PlanoCardComponent;
  let fixture: ComponentFixture<PlanoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
