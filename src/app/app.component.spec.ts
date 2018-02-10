import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should work with rxjs fromEvent subscription', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const de = fixture.debugElement;
    const component = fixture.componentInstance;

    expect(component).toBeTruthy();

    component.createKeydownSubscription();

    spyOn(component, 'keydownHandler').and.callThrough();

    de.query(By.css('input')).triggerEventHandler('keydown', {
      keyCode: 13
    });

    expect(component.keydownHandler).toHaveBeenCalled();

    // extra expect to show the problem
    expect(de.query(By.css('input')).listeners.length).toBe(1);
  }));

  it(`should work with simple addEventListener`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const de = fixture.debugElement;
    const component = fixture.componentInstance;

    expect(component).toBeTruthy();

    component.createClickListener();

    spyOn(component, 'clickHandler').and.callThrough();

    de.query(By.css('input')).triggerEventHandler('click', null);

    expect(component.clickHandler).toHaveBeenCalled();

    // extra expect to show the problem
    expect(de.query(By.css('input')).listeners.length).toBe(1);
  }));
});
