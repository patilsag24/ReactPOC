import React,{Component} from 'react';
import EditableCell from './EditableCell';

class ProductRow extends Component
{
    onDelEvent()
    {
        this.props.onDelEvent(this.props.product);
    }
    render(){
  
        return(
            <tr>
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    "type":"name",
                    value: this.props.product.name,
                    id: this.props.product.id
                }} />
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    "type":"price",
                    value: this.props.product.price,
                    id: this.props.product.id
                }}/>
                 <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    "type":"qty",
                    value: this.props.product.qty,
                    id: this.props.product.id
                }}/>
                 <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    "type":"category",
                    value: this.props.product.category,
                    id: this.props.product.id
                }}/>
                <td>
                    <input type="button" value="X" onClick={this.onDelEvent.bind(this)}/>
                </td>
            </tr>

        );
    }
}

export default ProductRow;