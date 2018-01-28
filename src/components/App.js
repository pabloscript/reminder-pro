import React from 'react';
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

export default class App extends React.Component {
    render() {
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
                    />
                    <br />
                    <DatePicker
                        hintText="Set due date"
                        container="inline"
                        style={ style }
                    />
                    <br />
                    <RaisedButton label="Add reminder" primary={ true } style={ style } />
                </MuiThemeProvider>
            </div>
            
        )
    }
}