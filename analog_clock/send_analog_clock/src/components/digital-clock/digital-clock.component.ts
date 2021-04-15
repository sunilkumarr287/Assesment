import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css']
})
export class DigitalClockComponent implements OnInit {
  @Input() hour
  @Input() minute
  @Input() second

  constructor() { }

  ngOnInit(): void {
  }

  format(num: number) {
    return (num + '').length === 1 ? '0' + num : num + '';
  }

}
