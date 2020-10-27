import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LocalService } from '../shared/local.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  title = 'Posts';
  today: number = Date.now();

  posts: any;
  profile: any;
  constructor(private local: LocalService, public sanitizer: DomSanitizer) {}

  getPosts(): void {
    this.local.getJSON('posts').subscribe((data) => {
      this.posts = data;
    });
  }

  getProfile(): void {
    this.local.getJSON('profile').subscribe((data) => {
      this.profile = data;
    });
  }

  ngOnInit() {
    this.getProfile();
    this.getPosts();
  }
}
