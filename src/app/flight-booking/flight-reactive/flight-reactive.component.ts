import { Component, OnInit, OnDestroy } from '@angular/core';
import { timer, Observable, Subscription, Subject } from 'rxjs';
import { tap, share, take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-flight-reactive',
  templateUrl: './flight-reactive.component.html',
  styleUrls: ['./flight-reactive.component.css']
})
export class FlightReactiveComponent implements OnInit, OnDestroy {
  timer$: Observable<number>;
  timerSubscription: Subscription;
  destroySubject = new Subject<boolean>();
  
  constructor() { }
  
  ngOnInit() {
    this.timer$ = timer(0, 1000)
      .pipe(
        tap(num => console.log('Observable implementation', num)),
        share()
      );
    
    this.timerSubscription =
      this.timer$
        .pipe(
          takeUntil(this.destroySubject)
          //take(5)
        )
        .subscribe(num => console.log('TS Subscription', num));
  }

  ngOnDestroy(): void {
    //this.timerSubscription.unsubscribe();
    this.destroySubject.next(true);
  }
}
