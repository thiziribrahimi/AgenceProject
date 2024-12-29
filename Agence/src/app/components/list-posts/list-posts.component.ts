import { Component , inject} from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { CommonModule } from '@angular/common';
import { Post } from '../../interfaces/post';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.scss'
})
export class ListPostsComponent {
postsService = inject(PostsService);
postList : Post[] = [];

constructor(){
  this.postsService.getPosts().then((posts: Post[]) => {
    this.postList = posts;
  });

//   this.postList = this.postsService.getPost();
}

selectedPost: any = null;

  showDetails(post : any) {
    // Si le même todo est cliqué, masquer les détails
    this.selectedPost = this.selectedPost === post ? null : post;
  }
}

