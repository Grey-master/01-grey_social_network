import React from "react";
import cl from './Profileinfo.module.css'


class ProfileStatus extends React.Component{
	state = {
		editMode: false,
		status: this.props.status
	}

	componentDidMount(){
		console.log('componentDidMount');
	}

	activateEditMode = () => {
		this.setState({
			editMode: true
		})
	}
	deactivateEditMode = () => {
		this.setState({
			editMode: false
		})
		this.props.updateStatus(this.state.status)
	}
	onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
	}

	componentDidUpdate(prevProps,prevState){
		if(prevProps.status !== this.props.status){
			this.setState ({
				status: this.props.status
			})
		}
		console.log('componentDidUpdate');
	}

	render(){
		console.log('render');
		return (
			<>
				{!this.state.editMode &&
					<div>
					<span onDoubleClick={this.activateEditMode}>{this.props.status || "-----"}</span>
					</div>
				}
				{this.state.editMode &&
					<div>
					<input  onChange={this.onStatusChange}  
							autoFocus={true}  
							onBlur={this.deactivateEditMode} 
							value={this.state.status}/>
					</div>
				}
			</>
		);
	}
}

export  {ProfileStatus};
