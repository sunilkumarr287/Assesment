import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.css']
})
export class AnalogClockComponent implements OnChanges {
  @Input() hour
  @Input() minute
  @Input() second

  hoursStyle;
  secondsStyle;
  minutesStyle;

  animateAnalogClock() {
    const offset = -90

    this.hoursStyle = {
      "transform": `rotate(${offset + 30 * this.hour}deg)`
    }
    this.secondsStyle = {
      "transform": `rotate(${offset + 6 * this.second}deg)`
    }
    this.minutesStyle = {
      "transform": `rotate(${offset + 6 * this.minute}deg)`
    }

  }

  ngOnChanges() {
    this.animateAnalogClock()
  }

}
