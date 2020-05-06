import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"],
})
export class PostsComponent implements OnInit {
  
  title = "Posts";

  constructor() {}

  ngOnInit() {}
}
