import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts : Post[] = [];

  getPosts = async () :Promise<Post[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return (await response.json()) ?? [];
  }

  getPostsById  = async (postId : Number) :Promise<Post> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return (await response.json()) ?? null;
   }

}
//cree interface post avec id content et auteur
