import { Injectable } from '@angular/core';
import { PromiseType } from 'protractor/built/plugins';
import { post } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  listPost: any[] = [
  {
   titre: 'Le seigneur',
   date: '03/05/2019',
   resume: 'ce ci est un resumé',
   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse porro quod molestiae laborum facilis ',
   image: 'https://img.20mn.fr/V7t8OkcrSoK1AFaVwMcUqg/310x190_gollum-sam-gamgee-retour-roi.jpg',
   like: -1
  },
  {
   titre: 'Les avengers',
   date: '03/04/2015',
   resume: 'ce ci est un resumé de ...',
   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse porro quod molestiae laborum facilis ',
   image: 'https://www.rts.ch/2019/05/06/12/13/10396822.image?w=600&h=337',
   like: 5
  },
  {
   titre: 'Le foot',
   date: '03/05/2019',
   resume: 'ce ci est un resumé de foot ',
   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse porro quod molestiae laborum facilis ',
   image: 'https://i.f1g.fr/media/figaro/805x453_crop/2017/09/25/XVMf036b2be-a1e1-11e7-836f-8ba2a40ba05c.jpg',
   like: -2
  },
  {
   titre: 'Les misérables',
   date: '09/02/2019',
   resume: 'ce ci est un resumé des mis...',
   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse porro quod molestiae laborum facilis ',
   image: 'https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2012/12/24/Weekend/Images/Film_Review_Les_Miserables-02575.jpg?t=20170517',
   like: 3
  },
 
  ];
  constructor() { }

  getPosts(){
    return this.listPost;
  }

  getPost(i){
    return this.listPost[i];
  }

  addlike(i){
  return this.listPost[i].like += 1 ;
  }
  unlike(i){
  return this.listPost[i].like -= 1 ;
  }
  addPost(post){
    this.listPost.push(post)
  }

  delete(post){
    this.listPost.splice(post, 1)
  }

}
