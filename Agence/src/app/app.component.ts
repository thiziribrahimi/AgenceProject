import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    ListPostsComponent,
    TodoListComponent,
    HomeComponent,
    FormsModule,
    CommonModule,
    SearchBarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Agence';

  // Liste des biens immobiliers
  items = [
    { type: 'Appartement', location: 'Paris 16ème', price: 750000 },
    { type: 'Maison', location: 'Lyon 5ème', price: 650000 },
    { type: 'Studio', location: 'Marseille 1er', price: 120000 },
    { type: 'Villa', location: 'Nice', price: 1250000 },
    { type: 'Loft', location: 'Bordeaux', price: 850000 },
    { type: 'Terrain', location: 'Lille', price: 300000 },
    { type: 'Appartement', location: 'Nantes', price: 400000 },
    { type: 'Maison', location: 'Toulouse', price: 550000 },
    { type: 'Duplex', location: 'Strasbourg', price: 700000 },
    { type: 'Penthouse', location: 'Cannes', price: 2500000 },
  ];
  
  // Liste filtrée pour l'affichage
  filteredItems = [...this.items];

  // Méthode pour filtrer les biens en fonction de la recherche
  handleSearch(term: string) {
    const lowerTerm = term.toLowerCase();
    this.filteredItems = this.items.filter(item =>
      item.type.toLowerCase().includes(lowerTerm) ||
      item.location.toLowerCase().includes(lowerTerm) ||
      item.price.toString().includes(lowerTerm)
    );
  }
}
