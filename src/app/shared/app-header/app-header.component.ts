import { Component, OnInit, Input } from '@angular/core';
import { MenuController } from "@ionic/angular";

@Component({
  selector: "app-header",
  templateUrl: "./app-header.component.html",
  styleUrls: ["./app-header.component.scss"],
})
export class AppHeaderComponent implements OnInit {
  @Input() title;

  constructor(public menu: MenuController) {

  }

  toggle() {
    this.menu.toggle();
  }

  ngOnInit() {}
}
