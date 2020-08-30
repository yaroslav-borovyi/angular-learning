import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-practice',
  templateUrl: './directive-practice.component.html',
  styleUrls: ['./directive-practice.component.css']
})
export class DirectivePracticeComponent implements OnInit {
  showSecrectParagraph = false;
  logs = [];
  constructor() { }

  ngOnInit(): void {
  }

  onClick () {
    this.showSecrectParagraph = !this.showSecrectParagraph;
    this.logs.push(new Date());
  }

}
