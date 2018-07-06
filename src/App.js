import React, { Component } from 'react';
import AboutMe from './Aboutme/Aboutme';
import PortfolioPage from './PortfolioPage/PortfolioPage';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import './App.css';

class App extends Component {
  state = {
    showAboutMe: false,
    showPortfolio: false,
    showHome: false,
    show: false,
  }

  toggleAboutMeHandler = () => {
    this.setState({ showHome: false });
    this.setState({ showPortfolio: false });
    this.setState({ showContact: false });
    this.setState({ showAboutMe: true });
  }

  togglePortfolioHandler = () => {
    this.setState({ showHome: false });
    this.setState({ showAboutMe: false });
    this.setState({ showContact: false });
    this.setState({ showPortfolio: true });
  }

  toggleHomeHandler = () => {
    this.setState({ showPortfolio: false });
    this.setState({ showAboutMe: false });
    this.setState({ showContact: false });
    this.setState({ showHome: true });
  }

  toggleContactHandler = () => {
    this.setState({ showPortfolio: false });
    this.setState({ showAboutMe: false });
    this.setState({ showHome: false });
    this.setState({ showContact: true })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <header className="App-header">
          <button
            style={style}
            onClick={this.toggleAboutMeHandler}>About Me</button>
          <button
            style={style}
            onClick={this.togglePortfolioHandler}>Portfolio</button>
          <button
            style={style}
            onClick={this.toggleHomeHandler}>Home</button>
          <button
            style={style}
            onClick={this.toggleContactHandler}>Contact</button>
        </header>

        {this.state.showAboutMe ?
          <div>
            <AboutMe />
          </div> : null
        }
        {this.state.showPortfolio ?
          <div>
            <PortfolioPage />
          </div> : null
        }
        {this.state.showHome ?
          <div>
            <Home />
          </div> : null
        }
        {this.state.showContact ?
          <div>
            <Contact />
          </div> : null
        }
      </div>

    );
  }
}

export default App;
