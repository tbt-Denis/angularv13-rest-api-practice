import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";



export interface httpPractice {
    id: number,
    title: string,
    body: string
}

@Injectable({providedIn:'root'})

export class HttpService {
    public arrayService: httpPractice[] = []

    constructor(private http: HttpClient) {}

    // fetchPosts(): Observable<httpPractice[]> {
    //     return this.http.get<httpPractice[]>('https://jsonplaceholder.typicode.com/posts?_limit=8')
    //     .pipe(tap(posts => this.arrayService = posts))
    // }

    // onSubmit(data: httpPractice) {
    //     let endPoints = "/posts"
    //     this.http.post(this.url + endPoints, data.value)
    //     .subscribe()
    //     this.arrayService.push(data)
    //   }
    
      deleteData(post: httpPractice): Observable<httpPractice[]>{
        return this.http.delete<httpPractice[]>('https://jsonplaceholder.typicode.com/posts/' + post.id, post)
      }
    
     post: httpPractice = {
         title: 'TEST',
         id: 3,
         body: 'pls rabotai'
     }

      putData(post: httpPractice): Observable<httpPractice[]>{
        return this.http.put<httpPractice[]>('https://jsonplaceholder.typicode.com/posts/' + post.id, post) 
      }
    
    
      //GET ALL
      getData(): Observable<httpPractice[]> {
        return this.http.get<httpPractice[]>('https://jsonplaceholder.typicode.com/posts?_limit=8')
        .pipe(tap(posts => this.arrayService = posts))
    }
    

}