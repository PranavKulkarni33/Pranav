import { Component, OnInit } from "@angular/core";
import { LocalService } from "src/app/shared/local.service";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"],
})
export class PortfolioComponent implements OnInit {
  portfolio: any;
  constructor(private local: LocalService) {}

  getProfile(): void {
    this.local.getJSON('profile').subscribe((data) => {
      this.portfolio = data.portfolio;
    });
  }

  ngOnInit() {
    this.getProfile();
  }
}