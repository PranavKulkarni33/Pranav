import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from "./work/work.component";
import { ResumeComponent } from './resume/resume.component';


const routes: Routes = [
  {
    path: "posts",
    component: PostsComponent,
  },
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path: "about",
    component: HomeComponent,
  },
  {
    path: "work",
    component: WorkComponent,
  },
  {
    path: "resume",
    component: ResumeComponent,
  },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
