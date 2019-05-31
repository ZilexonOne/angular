import { Component, OnInit } from '@angular/core';
import { PhotoPostService } from '../../services/photo-post/photo-post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [ PhotoPostService ]
})
export class PostsComponent implements OnInit {
  res = [];
  visibility = false;
  constructor(private photoPost: PhotoPostService) { }
  ngOnInit() {
    this.res = this.photoPost.getPhotos();
    console.log(this.res);
  }
  toggle() {
    this.visibility = !this.visibility;
  }
}
