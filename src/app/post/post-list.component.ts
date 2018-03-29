import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Post } from './post';
import { PostService } from './post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[];
  constructor(
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getPosts());
    console.log(timer);
  }

  getPosts() {
    this.postService.getPosts()
      .subscribe(posts => this.posts = posts);
  }

  goToShow(post: Post): void{
    let postLink = ["/posts", post.id];
    this.router.navigate(postLink);
  }

}
