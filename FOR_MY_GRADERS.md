# For My Graders

**Hello!**

I just learned how to make .md files *beautiful* to do this file.

Decided to write a short document based on the Vue implementation of my website, given that I doubt anyone wants to sift through thousands of lines to fill a short rubric of two requirements!

Sovereign is made up four different pages, **program.html** being the main component to the whole site.

Vue was used for program.html, about.html and start.html for... pretty much everything. I didn't realize til too late that putting thousands of lines of code into one Vue object would be a nightmare.

The app's page changing and other aspects was made using **v-if**. Data was displayed through **data binding** and **computed properties**. **Data binding** was used for the small text box under the game and to the left for cheat codes. I didn't use a form in that case with **v-model**, but whatever I did had the same effect.

I can't tell you how much of a pain it was to figure out **components** for Vue in order to bring up the tutorial messages. Not only that, but sharing a **prop** between them was a foreign topic for me. **V-bind** was used in that instance to display the correct messages in the component, which was set from the main Vue object.

**V-on:click** was pretty much used for each button, as well as **@click** for the tutorial button.

I used a **created()** function to set the interval that ran through the caluclations. I didn't know how to use Vue to track *TIME* without a setInterval().

I started this project after our first creative project when I made [Doors](http://cproj1.andrewdanielyoung.com/), so maybe 60% of the easy functions, like checking if you can build a house, were written then when I knew what I did there! Translating the code to work with Vue instead of HTML canvas was a long process so I added functioniality from Vue when nessisary but certainly could have harnessed its power further with more time!