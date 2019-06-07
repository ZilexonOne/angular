import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [ PostsService ]
})
export class PostsComponent implements OnInit {
  res = [];
  constructor(private photoPost: PostsService) { }
  ngOnInit() {
    this.res = this.photoPost.getPhotos();
    console.log(this.res);
  }
}
