const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const Book = require("../api/models/book.model");

const MONGODB_URL = process.env.MONGODB_URL;

const arrayBooks = [
    {
      name: "Un guijarro en el cielo",
      publication: 1950,
      pages: 210,
      series: "Imperio, Universo de la Fundacion"
  },
  {
      name: "En la Arena Estelar",
      publication: 1951,
      pages: 210,
      series: "Imperio, Universo de la Fundacion"
  },
  {
      name: "Fundacion",
      publication: 1951,
      pages: 256,
      series: "Fundacion,Universo de la Fundacion"
  },
  {
      name: "Fundacion e Imperio",
      publication: 1952,
      pages: 320,
      series: "Fundacion,Universo de la Fundacion"
  },
  {
      name: "Segunda Fundacion",
      publication: 1953,
      pages: 320,
      series: "Fundacion,Universo de la Fundacion"
  },
  {
      name: "Bovedas de Acero",
      publication: 1954,
      pages: 272,
      series: "Robots,Universo de la Fundacion"
  },
  {
      name: "El sol desnudo",
      publication: 1957,
      pages: 288,
      series: "Robots,Universo de la Fundacion"
  },
  {
      name: "Los limites de la Fundacion",
      publication: 1982,
      pages: 528,
      series: "Fundcion,Universo de la Fundacion"
  },
  {
      name: "Los robots del amanecer",
      publication: 1983,
      pages: 448,
      series: "Robots,Universo de la Fundacion"
  },
  {
      name: "Robots e Imperio",
      publication: 1985,
      pages: 512,
      series: "Robots,Universo de la Fundacion"
  },
  {
      name: "Fundacion y Tierra",
      publication: 1986,
      pages: 528,
      series: "Fundacion,Universo de la Fundacion"
  },
  {
      name: "Preludio a la Fundacion",
      publication: 1988,
      pages: 464,
      series: "Fundacion,Universo de la Fundacion"
  },
  {
      name: "Hacia la Fundacion",
      publication: 1988,
      pages: 464,
      series: "Fundacion,Universo de la Fundacion"
  },
    {
      name: "Pórtico",
      publication: 1977,
      pages: 344,
      series: "Saga de los Heeche"
    },
    {
      name: "Tras el incierto Horizonte",
      publication: 1980,
      pages: 368,
      series: "Saga de los Heeche"
    },
    {
      name: "El encuentro",
      publication: 1984,
      pages: 400,
      series: "Saga de los Heeche"
    },
    {
      name: "Los anales de los Heeche",
      publication: 1987,
      pages: 448,
      series: "Saga de los Heeche"
    },
    {
      name: "Los exploradores de Pórtico",
      publication: 1990,
      pages: 272,
      series: "Saga de los Heeche"
    },
    {
      name: "Mercaderes del Espacio",
      publication: 1952,
      pages: 250,
      series: "Mercaderes del Espacio"
    },
    {
      name: "La guerra de los Mercaderes",
      publication: 1984,
      pages: 279,
      series: "Mercaderes del Espacio"
    },
    {
      name: "2001: UNa odisea Espacial",
      publication: 1968,
      pages: 240,
      series: "Odisea Espacial"
    },
    {
      name: "2010: Odisea Dos",
      publication: 1982,
      pages: 368,
      series: "Odisea Espacial"
    },
    {
      name: "2061: Odisea Tres",
      publication: 1987,
      pages: 272,
      series: "Odisea Espacial"
    },
    {
      name: "3001: Odisea Final",
      publication: 1997,
      pages: 304,
      series: "Odisea Espacial"
    },
    {
      name: "Cita con Rama",
      publication: 1973,
      pages: 448,
      series: "Cita con Rama"
    },
    {
      name: "Rama II",
      publication: 1989,
      pages: 768,
      series: "Cita con Rama"
    },
    {
      name: "El Jardin de Rama",
      publication: 1991,
      pages: 704,
      series: "Cita con Rama"
    },
    {
      name: "Rama revelada",
      publication: 1993,
      pages: 800,
      series: "Cita con Rama"
    },
  ]


mongoose.connect(MONGODB_URL)
.then(async () => {
    const allBooks = await Book.find();
    if (allBooks.length > 0) {
        await Book.series.drop();
        console.log("Todos los libros han sido borrados");
    }
})
.catch((error) => console.log("Ha ocurrido un error al borrar los libros", error))
.then(async () => {
    const bookMap = arrayBooks.map((book) => new Book(book));
    await Book.insertMany(bookMap);
    console.log("libros insertados");
})
.catch((error) => console.log("Ha ocurrido un error al borrar los libros",error))
.finally(() => mongoose.disconnect());