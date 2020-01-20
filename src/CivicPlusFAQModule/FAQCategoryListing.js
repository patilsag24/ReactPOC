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
        this.ID="";
        this.currentStatus="";
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
    handleAddCategoryClick(update,categoryName,categoryStatus,id)
    {
        this.updateflag=update;
        this.categoryName=categoryName;
        this.ID=id;
        this.categoryStatus=categoryStatus?categoryStatus:0;
        this.setState({AddCategoryScreenVisible: true});
    }
    handleDeleteCategoryClick(categoryID)
    {
        debugger;
        var array = this.state.categories; // make a separate copy of the array
        var index = array.findIndex(a=>a.id===categoryID)
        if (index !== -1) {
          array.splice(index,1);
          this.setState({categories: array});
        }
    }
    handleCancelClick()
    {
        this.setState({AddCategoryScreenVisible: false});
    }
    handleSaveClick(name,categoryUpdateFlag,ID,currentStatus)
    {
        if(categoryUpdateFlag==0){
            this.saveUpdateCategory(name,categoryUpdateFlag,ID,currentStatus);
        }else
        this.setSates(name, 0);
    }
    
    handleSaveAndPublishClick(name,categoryUpdateFlag,ID)
    {
        if(categoryUpdateFlag==0){
            this.saveUpdateCategory(name,categoryUpdateFlag,ID,1)
        }else
        this.setSates(name, 1);
    }

    handleUnpublishClick(name,categoryUpdateFlag,ID)
    {
        this.saveUpdateCategory(name,categoryUpdateFlag,ID,0);
    }

    saveUpdateCategory(name,categoryUpdateFlag,ID,currentStatus){
        var item={
                id:ID,
                Name:name,
                NumberOfQuestions:2,
                Status: currentStatus
          };
        var categories = this.state.categories.slice();
        var newCategories = categories.map(function(category){
            if(category.id==item.id)
            {
                category.Name=item.Name;
                category.Status=item.Status;
            }
            return category;
        });
        this.setState({AddCategoryScreenVisible: false});
        this.setState({categories:newCategories});
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
                    <AddCategory CategoryUpdate={this.updateflag} CategoryName={this.categoryName} CategoryID={this.ID} CategoryStatus={this.categoryStatus} OnCancelClick={this.handleCancelClick.bind(this)} OnSaveClick={this.handleSaveClick.bind(this)} OnSaveAndPublishClick={this.handleSaveAndPublishClick.bind(this)} onUnpublishClick={this.handleUnpublishClick.bind(this)}/>
                </div>
            );
        }
        else
        {
            return(
                <div>
                    <ButtonsContainer onAddCategoryClick={this.handleAddCategoryClick.bind(this)}/>
                    <UnpublishedCategories categories={this.state.categories} onDeleteCategoryClick={this.handleDeleteCategoryClick.bind(this)} onAddCategoryClick={this.handleAddCategoryClick.bind(this)} /> 
                    <PublishedCategories categories={this.state.categories} onAddCategoryClick={this.handleAddCategoryClick.bind(this)}/>
                </div>
            );
        }
    }
}

export default FAQCategoryListing;