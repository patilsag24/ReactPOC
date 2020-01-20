import React,{Component} from 'react';
import ButtonsContainer from './ButtonsContainer';
import AddCategory from './AddCategory';
import UnpublishedCategories from './UnpublishedCategories';
import PublishedCategories from './PublishedCategories';
import './Styles/FAQTable.css';

class FAQCategoryListing extends Component
{
    constructor(props){
        super(props);
        this.state={};
        this.state.AddCategoryScreenVisible = false;
        this.updateflag = 1;
        this.categoryName="";
        this.categoryStatus=0;
        this.state.categories=[
            {   
                id:1,
                Name:'ABC1',
                NumberOfQuestions:2,
                Status: 0
            },
            {   
                id:2,
                Name:'ABC2',
                NumberOfQuestions:2,
                Status: 0
            },
            {   
                id:3,
                Name:'ABC3',
                NumberOfQuestions:2,
                Status: 1
            },
            {   
                id:4,
                Name:'ABC4',
                NumberOfQuestions:2,
                Status: 0
            },
            {   
                id:5,
                Name:'ABC5',
                NumberOfQuestions:2,
                Status: 1
            },
            {   
                id:6,
                Name:'ABC6',
                NumberOfQuestions:2,
                Status: 1
            },
            {   
                id:7,
                Name:'ABC7',
                NumberOfQuestions:2,
                Status: 0
            }
        ]
    }
    handleAddCategoryClick(update,categoryName,categoryStatus)
    {
        //currentCategory=category;
        this.updateflag=update;
        this.categoryName=categoryName;
        this.categoryStatus=categoryStatus?categoryStatus:0;
        this.setState({AddCategoryScreenVisible: true});
    }
    handleCancelClick()
    {
        this.setState({AddCategoryScreenVisible: false});
    }
    handleSaveClick(name)
    {
        this.setSates(name, 0);
    }
    handleSaveAndPublishClick(name)
    {
        this.setSates(name, 1);
    }
    setSates(name, status)
    {
        this.setState({AddCategoryScreenVisible: false});
        var id= (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
        var category={
            id:id,
            Name:name,
            NumberOfQuestions: 0,
            Status: status
        };
        this.state.categories.push(category);
        this.setState(this.state.categories);
    }
    render(){
        if (this.state.AddCategoryScreenVisible)
        {
            debugger;
            return(
                <div>
                    <AddCategory CategoryUpdate={this.updateflag} CategoryName={this.categoryName} CategoryStatus={this.categoryStatus} OnCancelClick={this.handleCancelClick.bind(this)} OnSaveClick={this.handleSaveClick.bind(this)} OnSaveAndPublishClick={this.handleSaveAndPublishClick.bind(this)}/>
                </div>
            );
        }
        else
        {
            return(
                <div>
                    <ButtonsContainer onAddCategoryClick={this.handleAddCategoryClick.bind(this)}/>
                    <UnpublishedCategories categories={this.state.categories} onAddCategoryClick={this.handleAddCategoryClick.bind(this)} catupdate/> 
                    <PublishedCategories categories={this.state.categories} onAddCategoryClick={this.handleAddCategoryClick.bind(this)}/>
                </div>
            );
        }
    }
}

export default FAQCategoryListing;