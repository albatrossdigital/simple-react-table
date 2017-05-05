import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import logo from './logo.svg';
import './App.css';

const jQuery = window.jQuery;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: [],
      data: []
    }
  }
  componentWillMount() {
    const setData = function( data ) {
      this.setState({
        fields: data.fields,
        data: data.data
      });
    }
    jQuery.getJSON('http://workhorse.albatrossdigital.com/labspace/charities/', setData.bind(this));
  }

  printHeader() {
    return this.state.fields.map((field, index) => {
      const props = {
        dataField: field.key
      };
      if(index === 0) {
        props.isKey = true;
      }
      return <TableHeaderColumn {...props}>{field.label}</TableHeaderColumn>
    });
  }

  printTable() {
    if (!this.state.fields.length) return <div className="loading"></div> 
    return (
      <BootstrapTable data={this.state.data} striped hover>
        {this.printHeader()}
      </BootstrapTable>
    );
  }

  render() {
    return (
      <div className="App">
        {this.printTable()}
      </div>
    );
  }
}

export default App;
