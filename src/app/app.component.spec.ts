import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let compiled:  HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    expect(compiled.querySelector('router-outlet')).not.toBeNull();
  });


  it('should render router.outlet wrapped with css clases', () => {

    const divElement = compiled.querySelector('div');
    const mustHaveClasses =
    'min-w-screen min-h-screen bg-slate-700 flex items-center justify-center px-5 py-5'
    .split('');
    const divClasses = divElement?.classList.value.split('');

    expect(divElement).not.toBeNull();

    mustHaveClasses.forEach((className) => {
      expect(divClasses).toContain(className);
    })
  })
});
