export default class Movie {
    id: number;
    name: string; 
    nameEng: string; 
    year: number;
    country: string; 
    slogan: string; 
    genre: string;
    time: string;
    price: number;
    
    constructor(
        id: number, 
        name: string, 
        nameEng: string, 
        year: number, 
        country: string, 
        slogan: string, 
        genre: string, 
        time: string,
        price: number,
    )   {
            this.id = id;
            this.name = name;
            this.nameEng = nameEng;
            this.year = year;
            this.country = country;
            this.slogan = slogan;
            this.genre = genre;
            this.genre = genre;
            this.time = time;
            this.price = price;
        }
}