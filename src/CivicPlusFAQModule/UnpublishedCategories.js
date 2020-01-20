import React,{Component} from 'react';
import CategoryRow from './CategoryRow';

class UnpublishedCategories extends Component
{
    constructor(props){
        super(props);
        this.handleName = this.handleName.bind(this);
    }
    handleCategoryDelete(categoryID)
    {
        this.props.onDeleteCategoryClick(categoryID)
    }
    handleName(categoryName,categoryStatus,id){
        this.props.onAddCategoryClick(this.refs.update.props.value,categoryName,categoryStatus,id);
    }
    

    render(){
        var handleName =this.handleName;
        
        var unpublishedCategories= this.props.categories.map((category)=>{
            if(category.Status == 0)
                return (<CategoryRow ref='update' value={0} category={category} key={category.id} onCategoryRowUpdateClick={handleName} onCategoryRowDeleteClick={this.handleCategoryDelete.bind(this)} />)
        });
        return(
            <table>
                <thead>
                        <tr>
                            <th>Unpublished Categories</th>
                            <th>Number of Questions</th>
                            <th>Status</th>
                        </tr>
                </thead>
                <tbody>
                    {unpublishedCategories}
                </tbody>
            </table>
        );
    }
}

export default UnpublishedCategories;