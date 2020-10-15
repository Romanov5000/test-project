import React from 'react';
import SearchBlock from './SearchBlock';
import DataList from './DataList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: [],
      search: '',
      checked: false,
      filter: 0,
    };
  }

  componentDidMount() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
      targetUrl = 'https://www.mrsoft.by/data.json'
    fetch(proxyUrl + targetUrl)
      .then(blob => blob.json())
      .then(json => this.setState({ data: json.data }));
  }

  search = (data, search, checked) => {
    if (!search) {
      return data
    }
    const newArr = data.filter((item) => {
      if (checked) {
        return item.includes(search)
      }
      return item.toLowerCase().includes(search.toLowerCase())

    });

    return newArr;
  }
  onSearch = (search) => {
    this.setState({
      search: search,
    })
  }
  onChecked = () => {
    this.setState({
      checked: !this.state.checked
    })
  }
  onFilter = (filter) => {
    this.setState({
      filter: filter
    })
  }
  lengthFilter = (data, filter) => {
    if (!filter) {
      return data
    }
    const result = data.filter(el => el.length > filter);
    return result
  }

  render() {

    const { data, search, checked, filter } = this.state;
    const visibleTodos = this.search(this.lengthFilter(data, filter), search, checked);

    return (
      <div>
        <div className='SearchBlk'>
          <input type='checkbox' onClick={this.onChecked} className='filterInput' ></input>
          <SearchBlock
            onSearch={this.onSearch}
            search={this.search}
            checked={this.onChecked}
            filter={this.onFilter} />
        </div>
        <DataList
          todos={visibleTodos} />

      </div>
    )
  }
}
