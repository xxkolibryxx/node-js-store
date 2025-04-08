import express from 'express'
import { create } from 'express-handlebars'
import { router } from './app/routes/router.js';
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handle Bars Config
const hbs = create({
    extname: "hbs",
    defaultLayout: "main",
    layoutsDir: "app/views/layouts",
    partialsDir: "app/views/partials"
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