# Friend Finder

Week Seven Homework Part 1: [Node & Express Server](http://ucb.bootcampcontent.com/UCB-Coding-Bootcamp/09-11-2017-UCB-Class-Repository-FSF-FT/blob/master/07-week/homework/part-1/homework_instructions.md).

## Installation

```
git clone https://github.com/dbmarshall/friend-finder.git
cd node-mysql
npm install
```

## Available Node Commands and URLs

**Local:** 

* Run `node server.js` 
* Then load [http://localhost:5050/](http://localhost:5050/)

**Heroku Deployment:** 

* Load [https://friend-finder-davidm.herokuapp.com/](https://friend-finder-davidm.herokuapp.com/)

## Misc Notes

* HTML5 validation of survey form elements, with event.preventDefault() not invoked until after validation complete, or it would have prevented HTML5 validation. Better than [example app](https://friend-finder.herokuapp.com/survey), which only checked for blank fields without utilizing HTML5 validation (including checking validity of photo URL input). I feel like it's handled elegantly, using an array for invalid form elements, but open to feedback. 
* Github repo pushes autodeploy to Heroku.

## Shortcomings

* Didn't complete fully functioning app through the line until 10/29, a day and a half past deadline.
* Pre-populated scores for movie stars are loosely accurate at best.  No true personality assesssment was done, so, more or less, the data is faux.

## Author

* **David Morse** ([dbmarshall.github.io](https://dbmarshall.github.io))

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

