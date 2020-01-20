import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
class Products extends Component {
  constructor(props){
    super(props);
      this.state={};
      this.state.filterText='';
      this.state.products=[
        {
          id:1,
          category:'Sporting Goods',
          price:'49.99',
          qty:12,
          name:'football'
        }, {
          id: 2,
          category: 'Sporting Goods',
          price: '9.99',
          qty: 15,
          name: 'baseball'
        }, {
          id: 3,
          category: 'Sporting Goods',
          price: '29.99',
          qty: 14,
          name: 'basketball'
        }, {
          id: 4,
          category: 'Electronics',
          price: '99.99',
          qty: 34,
          name: 'iPod Touch'
        }, {
          id: 5,
          category: 'Electronics',
          price: '399.99',
          qty: 12,
          name: 'iPhone 5'
        }, {
          id: 6,
          category: 'Electronics',
          price: '199.99',
          qty: 23,
          name: 'nexus 7'
        }
      ];
    
  }

  onHandleAddEvent(evt)
  {
    var id= (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var product={
      id:id,
      name:"",
      price:"",
      qty:0,
      category:""
    };
    this.state.products.push(product);
    this.setState(this.state.products);
  }

  handleCellUpdate(evnt)
  {
    var item={
      id:evnt.target.id,
      name:evnt.target.name,
      value:evnt.target.value
    };
    var products = this.state.products.slice();
    var newProducts = products.map(function(product){
      for(var k in product){
        if(k == item.name && product.id == item.id)
          product[k] = item.value;
      }
      return product;
    });
    this.setState({products:newProducts});
  }

  handleRowDelEvent(product)
  {
      var index=this.state.products.indexOf(product);
      this.state.products.splice(index,1);
      this.setState(this.state.products);
  }
  searchHandle(filterText)
  {
    // if(e == '')
    //   this.setState(this.state.products);

    // var products = this.state.products.slice();
    
    // var searchResults = products.filter(function(itm){
    //   return itm.name.indexOf(e) > -1;
    // });

    this.setState({filterText:filterText});
  }
  render() {
    
    return (
      <div>
          <SearchBar onSearchHandle={this.searchHandle.bind(this)}/>
          <ProductTable filterText={this.state.filterText} onRowDel={this.handleRowDelEvent.bind(this)} onProductTableUpdate={this.handleCellUpdate.bind(this)} products={this.state.products} onRowAdd={this.onHandleAddEvent.bind(this)}/>
     </div>
    );
  }
}

export default Products;
