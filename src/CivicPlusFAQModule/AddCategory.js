import React,{Component} from 'react';

class AddCategory extends Component
{
    constructor(props) {
        super(props);
        this.state = {
          input: ''
        };
      }
    
    saveAndPublish()
    {
        this.props.OnSaveAndPublishClick(this.refs.name.value, this.props.CategoryUpdate,this.props.CategoryID);
    }
    save()
    {
        this.props.OnSaveClick(this.refs.name.value, this.props.CategoryUpdate,this.props.CategoryID,this.props.CategoryStatus);
    }
    unpublish()
    {
        this.props.onUnpublishClick(this.refs.name.value, this.props.CategoryUpdate,this.props.CategoryID);
    }
    handleChange(e)
    {
        this.setState({input: e.target.value});
    }
    render(){
        var text=this.props.CategoryName;
        return(
            
            <div>
                <div class="heading admin"> 
                    <span>{this.props.CategoryUpdate == 1 ? "Add" : "Update"} Category</span>
                    <input type="button" value="Cancel" id="btnFAQTopicCancel" onClick={this.props.OnCancelClick}/>
                    <input type="button" value="Save" id="btnFAQTopicSave" onClick={this.save.bind(this)}/>
                    {this.props.CategoryStatus == 0 ? <input type="button" value="Save and Publish" id="btnFAQTopicSaveAndPublish" onClick={this.saveAndPublish.bind(this)}/> :""}
                    {this.props.CategoryStatus == 1 ? <input type="button" value="Unpublish" id="btnFAQTopicUnpublish" onClick={this.unpublish.bind(this)}/>:"" }
                </div>
                
                <div class="formline">
                    <label for="txtTitle">Category Name<span class="required">*</span>:</label>
                    <input type="hidden" id="catId" name="custId" value={this.props.CategoryID}></input>
                    <input type="text" ref='name' id="txtTitle" name="txtTitle" size="50" maxlength="200" value={this.state.input} onChange={this.handleChange.bind(this)}/>
                </div>

                <div class="formline">
                    <label for="dtiStartDate">Start Date:</label>
                    <input type="text" ref='startDate' id="dtiStartDate" name="dtiStartDate" size="15" maxlength="10"/><span class="dateexample">[mm/dd/yyyy]</span>
                </div>

                <div class="formline">
                    <label for="dtiEndDate">End Date:</label>
                    <input type="text" ref='endDate' id="dtiEndDate" name="dtiEndDate" size="15" maxlength="10"/><span class="dateexample">[mm/dd/yyyy]</span>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.setState({input: this.props.CategoryName});
     }
}

export default AddCategory;