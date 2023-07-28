/*const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded());

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>');
});


app.listen(4000);*/
const express = require('express');
const fs = require('fs');
const app = express();
const port = 4000;

app.use(express.urlencoded({ extended: true }));

app.get('/login', (req, res) => {
  res.send(`
    <form action="/login" method="POST">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required>
      <input type="submit" value="Submit">
    </form>
  `);
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  res.send(`
    <script>
      localStorage.setItem('username', '${username}');
      window.location.href = '/';
    </script>
  `);
});

app.get('/', (req, res) => {
  let messages = '';
  try {
    const data = fs.readFileSync('messages.txt', 'utf8');
    messages = data.split('\\n').map(message => `<p>${message}</p>`).join('');
  } catch (err) {
    console.error(err);
  }
  res.send(`
    <div>${messages}</div>
    <form action="/send" method="POST">
      <label for="message">Message:</label>
      <input type="text" id="message" name="message" required>
      <input type="submit" value="Send">
    </form>
    <script>
      document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();
        const message = document.querySelector('#message').value;
        const username = localStorage.getItem('username');
        fetch('/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: \`message=\${username}: \${message}\`
        }).then(() => window.location.reload());
      });
    </script>
  `);
});

app.post('/send', (req, res) => {
  const message = req.body.message;
  fs.appendFile('messages.txt', message + '\\n', (err) => {
    if (err) throw err;
    console.log('Message saved!');
  });
  res.end();
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});