import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  flightData = [
    {title: 'Cancelled Flights', count: '8 886', pastDay: '0'},
    {title: '# of Scheduled Flights', count: '450 017', pastDay: '0'},
    {title: 'D0', count: '61%', pastDay: '0%'},
    {title: 'D15', count: '78%', pastDay: '0%'},
    {title: 'A0', count: '59%', pastDay: '0%'},
    {title: 'Distance Travelled', count: '383,5M'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
