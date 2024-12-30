import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts: Post[] = [
    {
      id: 1,
      title: 'Appartement',
      body: 'Un bel appartement à Paris 16ème',
      userId: 1,
      image: '../images/appartement 16eme paris.png',
      location: 'Paris 16ème',
      price: 750000,
    },
    {
      id: 2,
      title: 'Maison',
      body: 'Grande maison avec jardin à Lyon 5ème',
      userId: 2,
      image: '../images/maisonLyon.png',
      location: 'Lyon 5ème',
      price: 650000,
    },
    {
      id: 3,
      title: 'Studio',
      body: 'Petit studio idéal pour étudiant à Marseille 1er',
      userId: 3,
      image: '../images/studio marseille.png',
      location: 'Marseille 1er',
      price: 120000,
    },
    {
      id: 4,
      title: 'Villa',
      body: 'Maison de luxe avec vue sur mer à Nice',
      userId: 4,
      image: '../images/villa_nice.png',
      location: 'Nice',
      price: 1250000,
    },
    {
      id: 5,
      title: 'Loft',
      body: 'Espace moderne et lumineux à Bordeaux',
      userId: 5,
      image: 'assets/images/loft_bordeaux.png',
      location: 'Bordeaux',
      price: 850000,
    },
    {
      id: 6,
      title: 'Terrain',
      body: 'Terrain constructible à Lille',
      userId: 6,
      image: '../images/terrain_lille.png',
      location: 'Lille',
      price: 300000,
    },
    {
      id: 7,
      title: 'Penthouse',
      body: 'Appartement haut de gamme à Cannes',
      userId: 7,
      image: 'assets/images/penthouse_cannes.jpg',
      location: 'Cannes',
      price: 2500000,
    },
  ];

  async getPosts(): Promise<Post[]> {
    return this.posts; // Remplacez cette ligne par une promesse si vous prévoyez un fetch distant
  }
  

  getPostsById(postId: number): Post | null {
    return this.posts.find((post) => post.id === postId) || null;
  }
}
