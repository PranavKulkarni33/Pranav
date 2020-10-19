import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { PostsComponent } from './posts/posts.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "resume",
    component: ResumeComponent,
  },
  {
    path: "posts",
    component: PostsComponent,
  },
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path: "work",
    component: HomeComponent,
  },
  {
    path: "",
    component: HomeComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
