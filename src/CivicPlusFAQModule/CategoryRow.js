import React,{Component} from 'react';

class CategoryRow extends Component
{
    constructor(props)
    {
        super(props);
        this.handleName=this.handleName.bind(this);
    }  
    handleName()
    {
        this.props.onCategoryRowUpdateClick(this.refs.categoryName.attributes.categoryName.value,this.refs.categoryName.attributes.categoryStatus.value, this.props.category.id);
    }
    handleCategoryDelete()
    {
        this.props.onCategoryRowDeleteClick(this.props.category.id);
    }
    render(){
        var category=this.props.category;
        var handleName=this.handleName;
        return( 
            <tr>
                <td>{category.Name}</td>
                <td>{category.NumberOfQuestions}</td>
                <td>{category.Status == 0 ? "Draft" : "Active"}</td>
                <td>
                    <input type="button" ref='categoryName' value="Update" categoryName={category.Name} categoryStatus={category.Status}id="btnFAQTopicUpdate" onClick={handleName}/>
                </td>
                <td>
                    {category.Status == 0 ? <input type="button" value="Delete" id="btnFAQTopicDelete" onClick={this.handleCategoryDelete.bind(this)}/>: ""}
                </td>
            </tr>
        );
    }
}

export default CategoryRow;