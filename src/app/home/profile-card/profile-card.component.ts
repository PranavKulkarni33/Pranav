import { Component, OnInit } from "@angular/core";
import { LocalService } from "../../shared/local.service";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-profile-card",
  templateUrl: "./profile-card.component.html",
  styleUrls: ["./profile-card.component.scss"],
})
export class ProfileCardComponent implements OnInit {
  profile: any;
  constructor(private local: LocalService, public sanitizer: DomSanitizer) {}

  getProfile(): void {
   this.local.getProfile().subscribe((data) => {
    this.profile = data;
  });
  }

  ngOnInit() {
    this.getProfile();
  }
}
