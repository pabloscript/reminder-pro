import React from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../actions';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';

import { List, ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import ActionDelete from 'material-ui/svg-icons/action/delete';

const styles = {
    containerStyle: {
        margin: 'auto',
        width: '80%'
    },
    fields: {
        margin: 12
    },
    list: {
        fontFamily: 'Roboto',
        display: 'flex',
        flexWrap: 'wrap',
    },
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

    renderReminders() {
        const { reminders } = this.props;
        return (
            <div style={ styles.list }>
                <List>                    
                    {
                        reminders.map(reminder => {
                            return (                                
                                <ListItem 
                                    key={reminder.id} 
                                    primaryText={reminder.text} 
                                    leftCheckbox={ <Checkbox /> } 
                                    rightIcon={ <ActionDelete /> }
                                />                                
                            )
                        })
                    }
                </List>
            </div>
        )
    }

    render() {        
        return(
            <div style={ styles.containerStyle }>
                <MuiThemeProvider>
                    <AppBar
                        title="Reminder Pro"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        style={ styles.fields }
                    />
                    <br />
                    <TextField
                        hintText="I have to..."
                        floatingLabelText="New Task"
                        floatingLabelFixed={ true }
                        style={ styles.fields }
                        onChange={this.handleChange.bind(this)}
                    />
                    <br />
                    <DatePicker
                        hintText="Set due date"
                        container="inline"
                        style={ styles.fields }
                    />
                    <br />                    
                    <RaisedButton 
                        label="Add reminder" 
                        primary={ true } 
                        style={ styles.fields } 
                        onClick={this.addReminder.bind(this)}
                    />
                    { this.renderReminders() }
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