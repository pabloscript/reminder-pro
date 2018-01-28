import React from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../actions';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';

const containerStyle = {
    margin: 'auto',
    width: '80%'    
};

const style = {    
    margin: 12
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    handleChange(event) {
        this.setState({
            text: event.target.value
        });
    }

    addReminder() {        
        this.props.addReminder(this.state.text);
    }

    render() {
        console.log('this.props', this.props);
        return(
            <div style={ containerStyle }>
                <MuiThemeProvider>
                    <AppBar
                        title="Reminder Pro"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        style={ style }
                    />
                    <br />
                    <TextField
                        hintText="I have to..."
                        floatingLabelText="New Task"
                        floatingLabelFixed={ true }
                        style={ style }
                        onChange={this.handleChange.bind(this)}
                    />
                    <br />
                    <DatePicker
                        hintText="Set due date"
                        container="inline"
                        style={ style }
                    />
                    <br />
                    <RaisedButton 
                        label="Add reminder" 
                        primary={ true } 
                        style={ style } 
                        onClick={this.addReminder.bind(this)}
                    />
                </MuiThemeProvider>
            </div>
            
        )
    }
}

function mapStateToProps(state) {
    return {
        reminders: state
    }
}

export default connect(mapStateToProps, {addReminder})(App);