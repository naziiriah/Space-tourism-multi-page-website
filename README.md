# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#Space tourism website solution)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#routing with react)
  - [Continued development](#continued-development)
  - [Useful resources](#netninja)
- [Author](#Nazir)
- [Acknowledgments](#)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

```js
const proudOfThisFunc = () => {
  console.log('🎉')
}
```
import "./App.css"
import Home from "./components/homePage";
import Header from "./components/header";
import Destination from "./components/destinationPage";
import Crew from "./components/crewpage";
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Technology from "./components/technologyPage";



function App() {
  

  return (
    <Router>
      <div className="App">   
        <Header/>
          <Switch>
            <Route exact path= "/">
               <Home /> 
            </Route>

            <Route path = "/destination"> 
              <Destination /> 
            </Route>

            <Route path = "/crew">
              <Crew/>
            </Route>

            <Route path = "/technology">
              <Technology/>
            </Route>
          </Switch>
     
      </div>
    </Router>
      
  );
}

export default App;

### Continued development

The next areas of development are redux and responsive designs

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/naziiriah)
- Twitter - [@yourusername](https://www.twitter.com/nazirabubakar15)