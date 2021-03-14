import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {

  title = 'Resume';
  resume = '../../assets/resume.pdf';

  constructor() { }

  ngOnInit() {}

}
