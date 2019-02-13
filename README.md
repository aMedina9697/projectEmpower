# Hello Beautiful

## About This App

This is a Node/Express/React app designed for folks in need of easy inventory of their personal makeup preferences. This app keeps track of user's previously used makeup products, particularly brand, name, shade of thier favorite products so they never find themselves at a loss for what to buy in the makeup aisle.

## What problem does it solve?

Any makeup fan can relate to the issue of losing track of the various makeup products they personally use. Hello Beautiful helps users recall what they have purchased in the past, and has a notes feature so users can also track whether a product is worth buying again. Ideally the app will employ type completion or a barcode reader to assist users in form completion while they enter their products to the database so they do not ned to devote massive amounts of time to managing their makeups. 

## How does it work?

1. Users log in to the app, for which we used JWT authentication.
2. The user will see a face rendered on the first face, with clickable facial features. The onClicks for each feature will have a GET route to an SQL DB to render the stored makeup products associated with that facial feature for the user.
3. The user can go to the "notes" page that has a POST route built in so they can add notes to the DB
4. The user can also navigate to a third page with built in form to add new products using a post route as well. 
