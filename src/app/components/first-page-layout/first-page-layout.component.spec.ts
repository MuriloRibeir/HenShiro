import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirstPageLayoutComponent } from './first-page-layout.component';

describe('FirstPageLayoutComponent', () => {
  let fixture: ComponentFixture<FirstPageLayoutComponent>;
  let component: FirstPageLayoutComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstPageLayoutComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FirstPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have isDarkMode as false initially', () => {
    expect(component.isDarkMode).toBe(false);
  });

  it('should toggle dark mode', () => {
    component.toggleTheme();
    expect(component.isDarkMode).toBe(true);

    component.toggleTheme();
    expect(component.isDarkMode).toBe(false);
  });

  it('should have a list of mangas', () => {
    expect(component.mangas.length).toBeGreaterThan(0);
  });
});
