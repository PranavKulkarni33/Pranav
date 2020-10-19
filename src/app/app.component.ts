import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { PROFILE } from './shared/profile';
import { StartPage } from "start";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  public profile = PROFILE;
  public selectedIndex = 0;
  public appPages = [
    {
      title: "Work",
      url: "/work",
      icon: "home",
    },
    {
      title: "Resume",
      url: "/resume",
      icon: "book",
    },
    {
      title: "Posts",
      url: "/posts",
      icon: "laptop",
    },
    {
      title: "Contact",
      url: "/contact",
      icon: "people",
    },
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split("/")[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
    }
  }
}

