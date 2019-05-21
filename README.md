# JPL Small Body Database (SBDB) frontend

Live version: http://webns.zsoltboda.hu/jpl-sbdb/

Displays data from the [NASA JPL Small-body database API](https://ssd-api.jpl.nasa.gov/doc/sbdb.html) in a nicer form.

## How it works

Sends the `sstr` GET parameter to the API as the search string.

If the `sstr` GET parameter is missing, `1 Ceres` is displayed. If it exists but it doesn't have a value, it returns an error.

The database handles searching thankfully, so for example the following all point to the same object: 23238, Ocasio-Cortez, 23238 Ocasio-Cortez, 2000 WU111, 1992 UB9, 2023238.

Clicking the designation in the top left corner copies the url to the clipboard.

## To-do

Legend: 🏃 ongoing, ⌛ in-progress, (empty) not-started

- ‍‍‍‍‍🏃 Display more information
- ⌛ Animate transitions
- Handle mutliple search results
- Handle invalid `sstr` parameter

## System outages

The database api goes down periodically. The app displays a "forbidden" message if that happens.
