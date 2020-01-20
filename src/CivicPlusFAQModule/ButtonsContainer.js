import React,{Component} from 'react';

class ButtonsContainer extends Component{
    constructor(props){
        super(props);
        this.handleName = this.handleName.bind(this);
    }
    handleName(){
        this.props.onAddCategoryClick(this.refs.update.value);
    }
    render(){
        var handleName =this.handleName;
        return(
            <div>
                <button type="button" ref='update' value={1} onClick={handleName}>Add Category</button>
            </div>
        );
    }

}

export default ButtonsContainer;