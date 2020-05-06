import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { PROFILE } from '../shared/profile';
import { ActionSheetController } from "@ionic/angular";

@Component({
  selector: "app-resume",
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.scss"],
})
export class ResumeComponent implements OnInit {
  title = "Resume";
  src = PROFILE.resume;

  constructor(
    private route: ActivatedRoute,
    public actionSheetController: ActionSheetController
  ) {}

  ngOnInit() {}
}
