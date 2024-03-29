import { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
