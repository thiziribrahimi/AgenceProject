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

  // Liste des biens immobiliers avec images
  items = [
    { type: 'Appartement', location: 'Paris 16ème', price: 750000, image: 'assets/images/appartement 16eme paris.png' },
    { type: 'Maison', location: 'Lyon 5ème', price: 650000, image: 'assets/images/maisonLyon.png' },
    { type: 'Studio', location: 'Marseille 1er', price: 120000, image: 'assets/images/studio marseille.png' },
    { type: 'Villa', location: 'Nice', price: 1250000, image: 'assets/images/villa_nice.png' },
    { type: 'Loft', location: 'Bordeaux', price: 850000, image: 'assets/images/loft_bordeaux.png' },
    { type: 'Terrain', location: 'Lille', price: 300000, image: 'assets/images/terrain_lille.png' },
    { type: 'Appartement', location: 'Nantes', price: 400000, image: 'assets/images/appartement_nantes.png' },
    { type: 'Maison', location: 'Toulouse', price: 550000, image: 'assets/images/maison_toulouse.png' },
    { type: 'Duplex', location: 'Strasbourg', price: 700000, image: 'assets/images/duplex_strasbourg.png' },
    { type: 'Penthouse', location: 'Cannes', price: 2500000, image: 'assets/images/penthouse_cannes.png' },
  ];

  // Liste filtrée pour l'affichage
  filteredItems = [...this.items];

  // Méthode pour filtrer les biens en fonction de la recherche
  handleSearch(term: string) {
    const lowerTerm = term.toLowerCase();
    this.filteredItems = this.items.filter(item =>
      item.type.toLowerCase().includes(lowerTerm) || // Filtrage par type
      item.location.toLowerCase().includes(lowerTerm) || // Filtrage par localisation
      item.price.toString().includes(lowerTerm) // Filtrage par prix
    );
  }
}
