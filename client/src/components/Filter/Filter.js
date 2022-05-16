import React, { Component } from "react";


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      products: localStorage.getItem("data")
        ? JSON.parse(localStorage.getItem("data"))
        : Data,
      sort: localStorage.getItem("sort")
        ? JSON.parse(localStorage.getItem("sort"))
        : "",
      cat: ""
    };
  }

  //sorting
  sorting = (e) => {
    const sorting = e.target.value;

    const sortRes = this.state.products.sort((a, b) => {
      if (sorting === "All") {
        return a.id > b.id ? 1 : -1;
      }

      if (sorting === "Pending") {
        return a.price > b.price ? 1 : -1;
      }

      if (sorting === "Completed") {
        return a.price < b.price ? 1 : -1;
      }

      if (sorting === "On-Hold") {
        return a.price < b.price ? 1 : -1;
      }
    });

    this.setState(
      {
        sort: sorting,
        products: sortRes
      },
      () => {
        localStorage.setItem("sort", JSON.stringify(this.state.sort));
        localStorage.setItem("data", JSON.stringify(this.state.products));
      }
    );
  };

  // filtering by name
  filteringName = (e) => {
    let categ = e.target.value;

    if (categ === "") {
      this.setState({ cat: categ, products: Data });
    } else {
      this.setState({
        cat: categ,
        products: Data.filter((product) => {
          return product.category.indexOf(e.target.value) >= 0;
        })
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Filter
          sorting={this.sorting}
          sorts={this.state.sort}
          filteringName={this.filteringName}
          cat={this.state.cat}
        />
        <Products products={this.state.products} />
      </div>
    );
  }
}
