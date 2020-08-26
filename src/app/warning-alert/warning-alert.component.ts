import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: '<p>Something went wrong!!!</p>',
  styles: [`
  p {
    color: red;
    padding: 20px;
    background-color: mistyrose;
    border: 1px solid red;
    border-radius: 5px;
}
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
