const { auth } = require('express-openid-connect');
const { requiresAuth } = require('express-openid-connect');
const express = require('express');
const app = express();
const userRouter = require('./src/routes/user.router');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'DYEMBztSZDPIL5zPdUjePRoxO7xbw1TNfcDZYb-Xy2tYolNPXUN-uHqLpnnznRy1',
  baseURL: 'http://localhost:3000',
  clientID: '9K9CkEnkPdL4oLJdgqWZtKUfqHL9iRck',
  issuerBaseURL: 'https://dev-nwx7l3el8wiojdji.us.auth0.com'
};

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));
app.use('/fa', express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free'));
app.use(auth(config));

app.use('/users', userRouter);

app.get('/', requiresAuth(), async (req, res) => {
  res.render('index', {isAuthenticated: req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out'});
});

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(req.oidc.user);
});

app.get('/callback', async (req, res) => {
  res.render('index', {isAuthenticated: req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out'});
});




app.get('/signup', async (req, res) => {
  res.render('signup');
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
