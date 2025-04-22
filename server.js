import express from 'express'
import { create } from 'express-handlebars'
import { router } from './app/routes/router.js';
import session from 'express-session';
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
// Handle Bars Config
const hbs = create({
    extname: "hbs",
    helpers: {
        eq: (a, b) => a === b,
        and: (...args) => args.every(Boolean),
        or: (...args) => args.some(Boolean)
    }
})

app.engine(
    "hbs",
    hbs.engine
);

app.set("view engine", "hbs");
app.set("views", "app/views");

// Use Static files (Font end files "CSS, JS, Icons, Fonts")
app.use('/public', express.static('public'))
app.use('/uploads', express.static('uploads'))

// Project Routes
app.use('/', router)

// Run Server
app.listen(process.env.PORT)