import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listPost: object[];
  like: number = 0;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts()
  }
  getPosts(){
    this.listPost = this.postService.getPosts();
  }

 addlike(i){
   this.postService.addlike(i)
 }
 unliked(i) {
  this.postService.unlike(i)
 }

 delete(i){
   this.postService.delete(i);
 }
}
