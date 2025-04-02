export default class Movie {
    
    constructor(
       readonly id: number, 
       readonly name: string, 
       readonly nameEng: string, 
       readonly year: number, 
       readonly country: string, 
       readonly slogan: string, 
       readonly genre: string, 
       readonly time: string,
       readonly price: number,
    ){}
}