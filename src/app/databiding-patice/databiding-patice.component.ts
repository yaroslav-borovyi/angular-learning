import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databiding-patice',
  templateUrl: './databiding-patice.component.html',
})
export class DatabidingPaticeComponent implements OnInit {
  userName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onResetClick() {
    this.userName = '';
  }
}
