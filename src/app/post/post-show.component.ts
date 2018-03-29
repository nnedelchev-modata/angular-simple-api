import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Http } from '@angular/http';
import { Post } from './post';
import { PostService } from './post.service';

@Component({
    selector: "post-show",
    templateUrl: './post-show.component.html',
    styleUrls: ['./post.component.css']
})

export class PostShowComponent implements OnInit{

    id: number;
    routeId: any;

    constructor(
        private http: Http,
        private postservice: PostService,
        private route: ActivatedRoute
    ){}

    @Input() post: Post;

    ngOnInit() {
        this.routeId = this.route.params.subscribe(
            params => {
                this.id = +params['id']; // + - конвертира от стринг към int в javaScript
            }
        )

        let postRequest = this.route.params.flatMap((
            params: Params) => 
            this.postservice.getPost(+params['id']));
        postRequest.subscribe(response => this.post = response.json())
    }
}