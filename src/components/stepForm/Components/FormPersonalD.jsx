import React from 'react'
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Theme from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField'
import Btn from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';

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
        width: 150,
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
  
class formPersonalD extends React.Component{
    continue = (e) =>{
        e.preventDefault();
        this.props.nextStep();
    }
    back = (e) =>{
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
        const {values, handleChange, classes} = this.props;
        return(
            <Theme>
                <React.Fragment>
                    
                <AppBar position="static">
                    <Toolbar align="center">
                     <h1>Enter Personal Detail</h1>
                    </Toolbar>
                </AppBar>
                <Grid container direction="row" justify="center" alignItems="center" className={classes.root} spacing={16}>
                <Grid item xs={6}>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField 
                    placeholder = 'Occupation'
                    id = 'occupation'
                    label = 'Your Occupation'
                    onChange = {handleChange('occupation')} 
                    value = {values.occupation}
                    className={classes.textField}
                    />
                    
                    <br/>

                    <TextField 
                    placeholder = 'City'
                    id = 'city'
                    label = 'Your Current City'
                    onChange = {handleChange('city')} 
                    value = {values.city}
                    className={classes.textField}
                    />
                    
                    <br />

                    <TextField 
                    placeholder = 'Bio'
                    label = 'Boi Details'
                    onChange = {handleChange('bio')} 
                    value = {values.bio}
                    className={classes.textField}/>

                    <Btn variant="contained" color="secondary" className={classes.button} onClick={this.back}>
                        Previous
                    </Btn>

                    <Btn variant="contained" color="primary" className={classes.button} onClick={this.continue}>
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

formPersonalD.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(formPersonalD);