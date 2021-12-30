/**
    ## Buscando e contando dados em Array

    Baseado no Array de livros por Categoria abaixo, faça os seguintes desafios:

    * Contar o número de categorias e o número de livros em cada categoria
    * Contar o número de autores
    * Mostrar livros do autor Augusto Cury
    * Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
 */

    const booksByCategory = [
        {
            category: "Riqueza",
            books: [
                {
                    title: "Os segredos da mente milionária",
                    author: "T. Mark Eker"
                }, 
                {
                    title: "O homem mais rico da Babilônia",
                    author: "George S. Clason"
                },
                {
                    title: "Pai rico, pai poble",
                    author: "Robert T. Kiyosaki e Sharon L. Lechter"
                }
            ]
        },
        {
            category: "Inteligência emocional",
            books: [
                {
                    title: "Você é insubstituível",
                    author: "Augusto Cury",
                }, 
                {
                    title: "Ansiedade - Como enfrentar o mal do século",
                    author: "Augusto Cury"
                }, 
                {
                    title: "Os 7 hábitos das pessoas altamente eficazes",
                    author: "Stephen R. Covey"
                }
            ]
        },
    ];


// contar número de categorias 
let numberCategories = booksByCategory.length;
console.log(`Número de categorias: ${numberCategories}`)

// número de livros em cada categoria
let sumBooks = 0;
for(let category of booksByCategory){
    console.log(`Total de livros da categoria ${category.category}`);
    console.log(`${category.books.length}`)
}


// número de autores
let numAuthors = [];
for(category of booksByCategory){ // category -> index of the array booksByCategory

    for(book of category.books){ // book -> index of the array books
        
        if(numAuthors.indexOf(book.author) == -1){ // autor não está no array
            numAuthors.push(book.author); // adicionar
        }
    }
}


console.log(`Total de autores: ${numAuthors.length}`);
console.log(numAuthors);
console.log("")

// Procurar livros de um(a) autor(a)

function searchAuthor(author){
    const booksAuthor = [];

    for(category of booksByCategory){
        
        for(book of category.books){
            
            if(book.author == author){
                booksAuthor.push(book.title);
            }
        }
    }
    
    console.log(`Quantidade de livros de ${author}: ${booksAuthor.length}`)
    console.log(booksAuthor);
}

searchAuthor("Stephen R. Covey");
searchAuthor("Augusto Cury")