import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Post } from './post.model';

@Injectable({providedIn: 'root'})
export class PostService {
  /* Note: import + providers in file module (~.module.ts) or ignore this message. */
  private data: Post[] = [];
  private dataUpdated = new Subject<Post[]>();

  constructor(  ){  }

  getData(){
    return [...this.data];
      // return this.data;
  }

  getDataUpdateList(){
    return this.dataUpdated.asObservable();
  }

  addData(title: string, content: string){
    const post: Post = {title: title, content: content};
    this.data.push(post);
    this.dataUpdated.next([...this.data]);
  }
}
