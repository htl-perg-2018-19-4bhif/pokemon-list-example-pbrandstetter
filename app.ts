import * as path from 'path';
import * as express from 'express';

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));

$(document).ready(function () {
  $.getJSON('https://pokeapi.co/api/v2/pokemon/', function (data) {
    app.get('/', function (req, res) {
      res.render('index', {
        title: 'PokeList',
        pokemons: data.results
      });
    });
  });
});
app.listen(3000, () => console.log('API is listening on port 3000'));