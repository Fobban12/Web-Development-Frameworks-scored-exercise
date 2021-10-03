import React from 'react';
import OnScreen from './components/OnScreen';
import data from './components/DataFromAServer.json'
import './app.css'

class App extends React.Component {
  constructor(value)
  {
    super(value);
    this.state = {
      Products: data.Products,
      Search: "",
    }
  }

  AfterKeyboardUsage = (event) => {
    this.setState({ Search: event.target.value });
  }

  render()
  {
    var output =
      <>
        <div className="SearchBar">
          Search: <input type="Text" onChange={ this.AfterKeyboardUsage } value={ this.state.Search }/>
        </div>
        <OnScreen
          Product={ this.state.Products.filter((Product) => Product.ProductName.includes(this.state.Search)) }
          />
      </>
    return (output)
  }
}

export default App;