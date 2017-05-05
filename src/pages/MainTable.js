import React, { Component } from 'react';
import Table from '../components/Table';

class MainTable extends Component {
  render() {
    return (
      <div className="main-table-page">
        <h1>Main Table</h1>
        <Table url='http://workhorse.albatrossdigital.com/labspace/charities/' />
      </div>
    );
  }
}

export default MainTable;
