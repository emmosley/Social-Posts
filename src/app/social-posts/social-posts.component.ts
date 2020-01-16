import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [{
    title: "Class",
    thought: "is hard",
  },
  {
    title: "Lizzy",
    thought: "is hungry",
  }
];

  constructor() { }

  ngOnInit() {
  }



}
