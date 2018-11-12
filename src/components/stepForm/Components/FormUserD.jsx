import React from 'react'
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Theme from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField'
import Btn from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar'

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      flexGrow: 1
    },
    button:{
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: 30,
        width: 200,
    }, 
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      marginTop: 30,
      width: 500,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  });
  
class formUserDetail extends React.Component{
    continue = (e) =>{
        e.preventDefault();
        this.props.nextStep();
    }
    render(){
        const {values, handleChange, classes} = this.props;
        return(
            <Theme>
                <React.Fragment>
                    
                <AppBar position="static">
                    <Toolbar >
                     <h1>Enter User Detail</h1>
                    </Toolbar>
                </AppBar>
                <Grid container direction="row" justify="center" alignItems="center" className={classes.root} spacing={16}>
                <Grid item xs={6}>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField 
                    placeholder = 'Enter Your First Name'
                    id = 'first-name'
                    label = 'First Name'
                    onChange = {handleChange('firstName')} 
                    value = {values.firstName}
                    className={classes.textField}
                    />
                    
                    <br/>

                    <TextField 
                    placeholder = 'Enter Your Last Name'
                    id = 'lastname'
                    label = 'Last Name'
                    onChange = {handleChange('lastName')} 
                    value = {values.lastName}
                    className={classes.textField}
                    />
                    
                    <br />

                    <TextField 
                    placeholder = 'Enter Email'
                    label = 'Email'
                    onChange = {handleChange('email')} 
                    value = {values.email}
                    type="email"
                    className={classes.textField}/>

                    <Btn variant="contained" color="secondary" className={classes.button} onClick={this.continue}>
                        Next
                    </Btn>
                </form>
                </Grid>
                </Grid>
                </React.Fragment>
            </Theme>
        )
    }
}

formUserDetail.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(formUserDetail);