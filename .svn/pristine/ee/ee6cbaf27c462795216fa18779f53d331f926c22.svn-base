import React,{Component} from 'react';
import CategoryRow from './CategoryRow';

class UnpublishedCategories extends Component
{
    constructor(props){
        super(props);
        this.handleName = this.handleName.bind(this);
    }
    handleName(categoryName,categoryStatus){
        //this.props.catupdate(0);
        this.props.onAddCategoryClick(this.refs.update.props.value,categoryName,categoryStatus);
    }

    render(){
        var handleName =this.handleName;
        //var cat=this.props.onAddCategoryClick;
        var unpublishedCategories= this.props.categories.map(function(category){
            if(category.Status == 0)
                return (<CategoryRow ref='update' value={0} category={category} key={category.id} onCategoryRowUpdateClick={handleName}/>)
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