import React,{Component} from 'react';
import CategoryRow from './CategoryRow'

class PublishedCategories extends Component
{
    constructor(props){
        super(props);
        this.handleName = this.handleName.bind(this);
    }
    handleName(categoryName,categoryStatus,id){
        this.props.onAddCategoryClick(this.refs.update.props.value,categoryName,categoryStatus,id);
    }
    render(){
        var handleName =this.handleName;
        var publishedCategories= this.props.categories.map(function(category){
            if(category.Status == 1)
                return (<CategoryRow ref='update' value={0} category={category} key={category.id} onCategoryRowUpdateClick={handleName}/>)
        });
        return(
            <table>
                <thead>
                        <tr>
                            <th>Published Categories</th>
                            <th>Number of Questions</th>
                            <th>Status</th>
                        </tr>
                </thead>
                <tbody>
                    {publishedCategories}
                </tbody>
            </table>
        );
    }
}

export default PublishedCategories;