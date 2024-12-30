export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  image: string ; // pour les images des biens immobiliers
  location: string; // localisation du bien
  price: number; // prix du bien
}
