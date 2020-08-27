fetch("https://ghibliapi.herokuapp.com/films")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for (i = 0; i < data.length; i++) {
      document.write(`<li>${data[i].title} - ${data[i].release_date}</li>`);
    }
  });
