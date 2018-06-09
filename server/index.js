const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const chokidar = require('chokidar');

const watcher = chokidar.watch('./');

const production = process.env.NODE_ENV === 'production';
if (!production) {
  watcher.on('ready', () => {
    watcher.on('all', () => {
      Object.keys(require.cache).forEach((id) => {
        if (/[/\\]dist[/\\]/.test(id)) delete require.cache[id];
      });
    });
  });
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8000;

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'hooray! welcome to our api!' });
});

app.use('/api', router);

app.listen(port);
console.log(`Magic happens on port ${port}`);
console.log(`Magic happens on port ${port}`);
