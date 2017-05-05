import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Loading from './Loading';

const jQuery = window.jQuery;

class Table extends Component {
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
    jQuery.getJSON(this.props.url, setData.bind(this));
  }

  printHeader() {
    return this.state.fields.map((field, index) => {
      const props = {
        dataField: field.key
      };
      if (index === 0) {
        props.isKey = true;
      }
      if (field.sortable) {
        props.dataSort = true;
      }
      return <TableHeaderColumn key={index.toString()} {...props}>{field.label}</TableHeaderColumn>
    });
  }

  printTable() {
    if (!this.state.fields.length) return <Loading />
    return (
      <BootstrapTable data={this.state.data} striped hover>
        {this.printHeader()}
      </BootstrapTable>
    );
  }

  render() {
    return (
      <div className="table-wrapper">
        {this.printTable()}
        <hr />
        <div className="table-footer">
          <a className="btn btn-default btn-xs pull-right" 
             href={`${this.props.url}?format=csv`}>
             Download CSV
          </a>
        </div>
      </div>
    );
  }
}

export default Table;
