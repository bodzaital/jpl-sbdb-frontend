# JPL Small Body Database (SBDB) frontend

It has a search field where you can enter a search string to bring up that object's details. The database handles searching thankfully, so for example the following all point to the same object: 23238, Ocasio-Cortez, 23238 Ocasio-Cortez, 2000 WU111, 1992 UB9, 2023238.

Clicking the designation in the top left corner copies the url to the clipboard.

The default page is the object with the #1 designation (1 Ceres).

## TODO

Display more information

## System outages

The database api goes down periodically. The app displays a "forbidden" message if that happens.