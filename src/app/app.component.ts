import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { PROFILE } from './shared/profile';
import { LocalService } from './shared/local.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  public profile;
  public selectedIndex = 0;
  public appPages = [
    {
      title: "About",
      url: "/about",
      icon: "person",
    },
    {
      title: "Work",
      url: "/work",
      icon: "clipboard",
    },
    {
      title: "Posts",
      url: "/posts",
      icon: "pencil",
    },
    {
      title: "Resume",
      url: "/resume",
      icon: "book",
    },
    {
      title: "Contact",
      url: "/contact",
      icon: "at",
    }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private local: LocalService,
    private router: Router
  ) {
    this.initializeApp();

    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
         /* Your code goes here on every router change */
        
         const path = window.location.pathname.split("/")[1];
         if (path !== undefined) {
           this.selectedIndex = this.appPages.findIndex(
             (page) => page.title.toLowerCase() === path.toLowerCase()
           );
         }
        }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  getProfile() {
    this.local.getProfile().subscribe((data) => {
      this.profile = data;
    });
  }

  ngOnInit() {

    this.getProfile();
  }
}

