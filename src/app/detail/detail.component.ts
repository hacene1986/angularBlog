import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  listPost: object[];
  key:number;
  post:object;
  constructor(private route : ActivatedRoute, private postService: PostService) {
    this.route.params
    .subscribe(params => 
      {
        this.key = params.key;
       // this.movie = this.listMovie[this.key];
       
      });
   }

  ngOnInit() {
    this.getPost(this.key);
  }
  getPosts(){
    this.listPost = this.postService.getPosts();
  }
  getPost(i){
    this.post = this.postService.getPost(i);
  }
}
