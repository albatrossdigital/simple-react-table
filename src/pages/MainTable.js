import React, { Component } from 'react';
import Table from '../components/Table';

class MainTable extends Component {
  render() {
    return (
      <div className="main-table-page">
        <h1>Main Table</h1>
        <Table url='//charities.kbox.site/reports-api/report/test-search?accountnumber=A0003616&year=2017' />
      </div>
    );
  }
}

export default MainTable;
