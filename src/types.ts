export type IMovie = {
  title: string;
  release_date: string;
  opening_crawl: string;
  director: string;
  producer: string;
  characters: string[];
};

export type ICharacter = {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
  }