import { Component, OnInit, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  keydown$: Observable<any>;
  @ViewChild('input') input: ElementRef;

  createKeydownSubscription() {
    this.keydown$ = Observable.fromEvent(this.input.nativeElement, 'keydown');

    this.keydown$.subscribe(event => this.keydownHandler(event));
  }

  ngOnInit() {
    this.createClickListener();
    this.createKeydownSubscription();
  }

  createClickListener() {
    this.input.nativeElement.addEventListener('click', (event) => this.clickHandler(event));
  }

  clickHandler(event) {
    console.log(event);
  }

  keydownHandler(event) {
    console.log(event);
  }
}
