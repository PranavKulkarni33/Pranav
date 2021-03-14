import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PostsComponent } from './posts/posts.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AppHeaderComponent } from './shared/app-header/app-header.component';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioComponent } from "./work/portfolio/portfolio.component";
import { PortfolioCardComponent } from "./work/portfolio/portfolio-card/portfolio-card.component";
import { ProfileCardComponent } from "./home/profile-card/profile-card.component";
import { LocalService } from './shared/local.service';
import { WorkComponent } from "./work/work.component";

import  {  PdfViewerModule  }  from  'ng2-pdf-viewer';

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ResumeComponent } from './resume/resume.component';

// 2. Add your credentials from step 1
const config = {
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
};

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    ContactComponent,
    HomeComponent,
    AppHeaderComponent,
    PortfolioComponent,
    PortfolioCardComponent,
    ProfileCardComponent,
    WorkComponent,
    ResumeComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    PdfViewerModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    LocalService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
