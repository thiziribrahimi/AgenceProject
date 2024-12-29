import { Routes } from '@angular/router';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HomeComponent } from './home/home.component';
import { NewPostsComponent } from './new-posts/new-posts.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Page Accueil',
  },
  {
    path: 'posts',
    component: ListPostsComponent,
    title: 'List post page',
  },
  {
    path: 'posts/new',
    component: NewPostsComponent,
    title: 'New post page',
  },
  {
    path: 'todos',
    component: TodoListComponent,
    title: 'List todos page',
  },
];
