export class Movie {
    id: number;
    title: string;
    release_date: string;
    overview: string;
    length: number;
    poster_path: string = "https://image.tmdb.org/t/p/w500";
    tagline: string;
}
