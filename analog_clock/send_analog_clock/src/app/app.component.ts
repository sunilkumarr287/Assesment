import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  timerId: any;

  date: Date;
  hour: number = 0;
  minute: number = 0;
  second: number = 0;
  drift: number = 0;

  ngAfterViewInit() {
    this.timerId = this.getTime();
  }
  getTime() {
    return setInterval(() => {
      this.date = new Date();
      this.hour = this.date.getHours();
      this.minute = this.date.getMinutes() + this.drift;
      this.second = this.date.getSeconds();

    }, 1000);
  }

  fwdTime() {
    this.drift += 5
  }
  backTime() {
    this.drift -= 5
  }

}
