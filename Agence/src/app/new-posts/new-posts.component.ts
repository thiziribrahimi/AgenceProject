import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';

@Component({
  selector: 'app-new-posts',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './new-posts.component.html',
  styleUrl: './new-posts.component.scss'
})
export class NewPostsComponent {

}
