import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component
{
    render(){
        const filterText =this.props.filterText;

        var onProductTableUpdate = this.props.onProductTableUpdate;
        var onRowDelEvent=this.props.onRowDel;
        var product1= this.props.products.map(function(product){
            if(product.name.indexOf(filterText)===-1)
                return;
            return(<ProductRow onDelEvent={onRowDelEvent.bind(this)} onProductTableUpdate={onProductTableUpdate} product={product} key={product.id} />)
        });
        return(
            <div>
                <button type="button" className="btn btn-success pull-right" onClick={this.props.onRowAdd}>Add</button>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product1}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductTable;