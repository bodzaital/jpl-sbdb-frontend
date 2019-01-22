# JPL Small body database frontend

Enter a search string ?sstr= to read that object's details. They handle the searching thankfully, so for example, the following all point to the same object:

- 23238
- Ocasio-Cortez
- 23238 Ocasio-Cortez
- 2000 WU111
- 1992 UB9
- 2023238

Clicking the designation in the top left corner copies it to the clipboard.

## TODO

- A search box.
- A nicer style.
- More information.
- Handle no GET parameters.
- Handle when the api returns bad request/not found/200 but "specified object was not found."