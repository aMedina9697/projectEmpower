# Hello Gorgeous

https://projectempower.herokuapp.com/

https://docs.google.com/presentation/d/1xjpct-FOrpIgSCGQd_jEjUxX1-E-C66Xbq3pYZASPso/edit?usp=sharing

## About This App

This is a Node/Express/React app designed for folks in need of easy inventory of their personal makeup preferences. Hello gorgeous has a face map for looking at products sorted by facial features and a notes page to keep more detailed thoughts by product. Users with an easy way to keep track of previously used makeup products-- particularly brand, name, shade of thier favorite products-- should never find themselves at a loss for what to buy in the makeup aisle!

## What problem does it solve?

Any makeup fan can relate to the issue of trying to recall information of the various makeup products they personally use. Hello georgeous helps users log what they have purchased in the past, whether a product is worth buying again, their shade and so on. Ideally the app future development would employ type completion or a barcode reader to assist users with form completion while they enter their products to the database, so they do not ned to devote massive amounts of time to managing their makeups. 

## How does it work?

1. Users log in to the app, for which we used Firebase authentication.
2. The user will see a face rendered on the first page, with clickable facial features. The onClicks for each feature will have a GET route to mongo DB to render the stored makeup products associated with that facial feature for the user.
3. POST routes allow users to add products and notes to the DB using a form.

## New packages used:

1. popup
2. react font awesome
3. recompose
4. react responsive modal

## Group Members:

Front and Backend:

Theo- React routing and app set up, connecting front end and backend with Mongo, CSS styling
Kayla- React Routing, modals and rendering information in nested React components, CSS styling

Backend:
Layla- Mongo seeds, Mongo DB, popup
Alex- Authentication!!!

## Sample login:
test@gmail.com, pass: test123

