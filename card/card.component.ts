import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { httpPractice, HttpService } from './http-service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public profileForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
  });

  url: string;

  constructor(public posts: HttpService) { 
    this.url = "https://jsonplaceholder.typicode.com"
  }

  ngOnInit() {    
  }

  onSubmit(data: any) {
    // this.postsService.getData()
  }

  deleteData() {
    this.posts.deleteData(this.posts.post).subscribe()
  //   let endPoints = "/posts/"
  //   this.http.delete(this.url + endPoints + id).subscribe(data => {
  //   console.log(data);
  // });

  //   this.array = this.array.filter((t: { id: any; }) => t.id != id)

  //   console.log(this.array);
  }

  putData() {
    this.posts.putData(this.posts.post).subscribe()
 
  }


  //GET ALL
  getData() {
    this.posts.getData().subscribe()

    // this.http.get('https://jsonplaceholder.typicode.com/posts?_limit=8')
    // .pipe(tap(res => this.array = res)).subscribe()
    // console.log(this.array)
    // let endPoints="/posts?_limit=8"
    // this.http.get(this.url+endPoints).pipe(tap(res => this.array = res)).subscribe(data => {
    
    // console.log(data);

  }

  //GET1
  getPostById() {
  //   let id: number = 1;
  //   let endPoints = "/posts/" + id;
  //  return  this.http.get(this.url + endPoints).subscribe(data => {
  //     console.log(data);
  //     this.array.push(data)
  //   });
  }
}
