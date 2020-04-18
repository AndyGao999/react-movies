import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Terminator",
    genre: {_id: "5b21ca3eeb7f6fbccd471818", name: "Action"},
    img: "/images/1.jpg",
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2019-11-03",
    content: `Aim of this work is to bridge the semantic gap with respect to the analysis of film content.
      Our novel approach is to systematically exploit collateral texts for films, such as audio description
      scripts and screenplays. We ask three questions: first, what information do these texts provide
      about film content and how do they express it? Second, how can machine-processable
      representations of film content be extracted automatically in these texts? Third, how can these
      representations enable novel applications for analysing and accessing digital film data? To answer
      these questions we have analysed collocations in corpora of audio description scripts (AD) and
      screenplays (SC), developed and evaluated an information extraction system and outlined novel
      applications based on information extracted from AD and SC scripts.`,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Die Hard",
    genre: {_id: "5b21ca3eeb7f6fbccd471818", name: "Action"},
    img: "/images/2.jpg",
    numberInStock: 5,
    dailyRentalRate: 2.5,
    publishDate: "2019-11-03",
    content: `Aim of this work is to bridge the semantic gap with respect to the analysis of film content.
    Our novel approach is to systematically exploit collateral texts for films, such as audio description
    scripts and screenplays. We ask three questions: first, what information do these texts provide
    about film content and how do they express it? Second, how can machine-processable
    representations of film content be extracted automatically in these texts? Third, how can these
    representations enable novel applications for analysing and accessing digital film data? To answer
    these questions we have analysed collocations in corpora of audio description scripts (AD) and
    screenplays (SC), developed and evaluated an information extraction system and outlined novel
    applications based on information extracted from AD and SC scripts.`,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Get Out",
    genre: {_id: "5b21ca3eeb7f6fbccd471820", name: "Thriller"},
    img: "/images/3.jpg",
    numberInStock: 8,
    dailyRentalRate: 3.5,
    publishDate: "2019-11-03",
    content: `Aim of this work is to bridge the semantic gap with respect to the analysis of film content.
    Our novel approach is to systematically exploit collateral texts for films, such as audio description
    scripts and screenplays. We ask three questions: first, what information do these texts provide
    about film content and how do they express it? Second, how can machine-processable
    representations of film content be extracted automatically in these texts? Third, how can these
    representations enable novel applications for analysing and accessing digital film data? To answer
    these questions we have analysed collocations in corpora of audio description scripts (AD) and
    screenplays (SC), developed and evaluated an information extraction system and outlined novel
    applications based on information extracted from AD and SC scripts.`,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Trip to Italy",
    genre: {_id: "5b21ca3eeb7f6fbccd471814", name: "Comedy"},
    img: "/images/4.jpg",
    numberInStock: 7,
    dailyRentalRate: 3.5,
    publishDate: "2019-11-19",
    content: `Aim of this work is to bridge the semantic gap with respect to the analysis of film content.
    Our novel approach is to systematically exploit collateral texts for films, such as audio description
    scripts and screenplays. We ask three questions: first, what information do these texts provide
    about film content and how do they express it? Second, how can machine-processable
    representations of film content be extracted automatically in these texts? Third, how can these
    representations enable novel applications for analysing and accessing digital film data? To answer
    these questions we have analysed collocations in corpora of audio description scripts (AD) and
    screenplays (SC), developed and evaluated an information extraction system and outlined novel
    applications based on information extracted from AD and SC scripts.`,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Airplane",
    genre: {_id: "5b21ca3eeb7f6fbccd471814", name: "Comedy"},
    img: "/images/5.jpg",
    numberInStock: 7,
    dailyRentalRate: 3.5,
    publishDate: "2019-11-19",
    content: `Aim of this work is to bridge the semantic gap with respect to the analysis of film content.
    Our novel approach is to systematically exploit collateral texts for films, such as audio description
    scripts and screenplays. We ask three questions: first, what information do these texts provide
    about film content and how do they express it? Second, how can machine-processable
    representations of film content be extracted automatically in these texts? Third, how can these
    representations enable novel applications for analysing and accessing digital film data? To answer
    these questions we have analysed collocations in corpora of audio description scripts (AD) and
    screenplays (SC), developed and evaluated an information extraction system and outlined novel
    applications based on information extracted from AD and SC scripts.`,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Wedding Crashers",
    genre: {_id: "5b21ca3eeb7f6fbccd471814", name: "Comedy"},
    img: "/images/6.jpg",
    numberInStock: 7,
    dailyRentalRate: 3.5,
    publishDate: "2019-11-19",
    content: `Aim of this work is to bridge the semantic gap with respect to the analysis of film content.
    Our novel approach is to systematically exploit collateral texts for films, such as audio description
    scripts and screenplays. We ask three questions: first, what information do these texts provide
    about film content and how do they express it? Second, how can machine-processable
    representations of film content be extracted automatically in these texts? Third, how can these
    representations enable novel applications for analysing and accessing digital film data? To answer
    these questions we have analysed collocations in corpora of audio description scripts (AD) and
    screenplays (SC), developed and evaluated an information extraction system and outlined novel
    applications based on information extracted from AD and SC scripts.`,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Gone Girl",
    genre: {_id: "5b21ca3eeb7f6fbccd471820", name: "Thriller"},
    img: "/images/7.jpg",
    numberInStock: 7,
    dailyRentalRate: 4.5,
    publishDate: "2019-11-19",
    content: `Aim of this work is to bridge the semantic gap with respect to the analysis of film content.
    Our novel approach is to systematically exploit collateral texts for films, such as audio description
    scripts and screenplays. We ask three questions: first, what information do these texts provide
    about film content and how do they express it? Second, how can machine-processable
    representations of film content be extracted automatically in these texts? Third, how can these
    representations enable novel applications for analysing and accessing digital film data? To answer
    these questions we have analysed collocations in corpora of audio description scripts (AD) and
    screenplays (SC), developed and evaluated an information extraction system and outlined novel
    applications based on information extracted from AD and SC scripts.`,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "The Sixth Sense",
    genre: {_id: "5b21ca3eeb7f6fbccd471820", name: "Thriller"},
    img: "/images/8.jpg",
    numberInStock: 4,
    dailyRentalRate: 3.5,
    publishDate: "2019-11-19",
    content: `Aim of this work is to bridge the semantic gap with respect to the analysis of film content.
    Our novel approach is to systematically exploit collateral texts for films, such as audio description
    scripts and screenplays. We ask three questions: first, what information do these texts provide
    about film content and how do they express it? Second, how can machine-processable
    representations of film content be extracted automatically in these texts? Third, how can these
    representations enable novel applications for analysing and accessing digital film data? To answer
    these questions we have analysed collocations in corpora of audio description scripts (AD) and
    screenplays (SC), developed and evaluated an information extraction system and outlined novel
    applications based on information extracted from AD and SC scripts.`,
  },
  {
    _id: "5b21ca3eebd7f6fbccd471821",
    title: "The Avengers",
    genre: {_id: "5b21ca3eeb7f6fbccd471818", name: "Action"},
    img: "/images/9.jpg",
    numberInStock: 7,
    dailyRentalRate: 3.5,
    publishDate: "2019-11-19",
    content: `Overview
      Bootstrap’s form controls expand on our Rebooted form styles with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices.
      
      Be sure to use an appropriate type attribute on all inputs (e.g., email for email address or number for numerical information) to take advantage of newer input controls like email verification, number selection, and more.
      
      Here’s a quick example to demonstrate Bootstrap’s form styles. Keep reading for documentation on required classes, form layout, and more.`,
  },

  {
    _id: "5b21ca3eeb7df6fbccd47741815",
    title: "Terminator",
    genre: {_id: "5b21ca3eeb7f6fbccd471818", name: "Action"},
    img: "/images/10.jpg",
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03 ",
    content: `Overview
    Bootstrap’s form controls expand on our Rebooted form styles with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices.
    
    Be sure to use an appropriate type attribute on all inputs (e.g., email for email address or number for numerical information) to take advantage of newer input controls like email verification, number selection, and more.
    
    Here’s a quick example to demonstrate Bootstrap’s form styles. Keep reading for documentation on required classes, form layout, and more.`,
  },
  {
    _id: "5b21ca3eeb784ff6fbccd471816",
    title: "Die Hard",
    genre: {_id: "5b21ca3eeb7f6fbccd471818", name: "Action"},
    img: "/images/11.jpg",
    numberInStock: 5,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03 ",
    content: `Overview
    Bootstrap’s form controls expand on our Rebooted form styles with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices.
    
    Be sure to use an appropriate type attribute on all inputs (e.g., email for email address or number for numerical information) to take advantage of newer input controls like email verification, number selection, and more.
    
    Here’s a quick example to demonstrate Bootstrap’s form styles. Keep reading for documentation on required classes, form layout, and more.`,
  },
  {
    _id: "5b21ca3eeb7f6fdbccd471817",
    title: "Get Out",
    genre: {_id: "5b21ca3eeb7f6fbccd471820", name: "Thriller"},
    img: "/images/12.jpg",
    numberInStock: 8,
    dailyRentalRate: 3.5,
    publishDate: "2018-01-03 ",
    content: `Overview
    Bootstrap’s form controls expand on our Rebooted form styles with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices.
    
    Be sure to use an appropriate type attribute on all inputs (e.g., email for email address or number for numerical information) to take advantage of newer input controls like email verification, number selection, and more.
    
    Here’s a quick example to demonstrate Bootstrap’s form styles. Keep reading for documentation on required classes, form layout, and more.`,
  },
  {
    _id: "5b21ca3eeb7f6fbccfd471819",
    title: "Trip to Italy",
    genre: {_id: "5b21ca3eeb7f6fbccd471814", name: "Comedy"},
    img: "/images/13.jpg",
    numberInStock: 7,
    dailyRentalRate: 3.5,
    publishDate: "2018-01-03 ",
    content: `Overview
      Bootstrap’s form controls expand on our Rebooted form styles with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices.
      
      Be sure to use an appropriate type attribute on all inputs (e.g., email for email address or number for numerical information) to take advantage of newer input controls like email verification, number selection, and more.
      
      Here’s a quick example to demonstrate Bootstrap’s form styles. Keep reading for documentation on required classes, form layout, and more.`,
  },
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find((m) => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find((m) => m._id === movie._id) || {};
  movieInDb.name = movie.name;
  movieInDb.genre = genresAPI.genres.find((g) => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find((m) => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}
