import React from 'react'
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Theme from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import Btn from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import ListItemText from '@material-ui/core/ListItemText';

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
  
class Confarm extends React.Component{
    continue = (e) =>{
        e.preventDefault();
        this.props.nextStep();
    }
    back = (e) =>{
        e.preventDefault();
        this.props.prevStep();
    }
    render(){
        const {values: {firstName, lastName, email, 
        city, occupation, bio},  classes} = this.props;
        return(
            <Theme>
                <React.Fragment>
                    
                <AppBar position="static">
                    <Toolbar >
                     <h1>Confarm User Data</h1>
                    </Toolbar>
                </AppBar>
                <Grid container direction="row" justify="center" alignItems="center" className={classes.root} spacing={16}>
                <Grid item xs={6}>
                    <List>
                        <ListItem>
                            <ListItemText
                            primary=" First Name"
                            secondary={ firstName ? firstName : null}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary=" Last Name"
                            secondary={ lastName ? lastName : null}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary=" Email Address"
                            secondary={ email ? occupation : null}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary=" Occupation"
                            secondary={ occupation ? occupation : null}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary=" City"
                            secondary={ city ? city : null}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                            primary=" Boi Details"
                            secondary={ bio ? bio : null}
                            />
                        </ListItem>
                    </List>
                    <Btn variant="contained" color="secondary" className={classes.button} onClick={this.back}>
                        Previous
                    </Btn>

                    <Btn variant="contained" color="primary" className={classes.button} onClick={this.continue}>
                        Confarm & Continue
                    </Btn>
                </Grid>
                </Grid>
                </React.Fragment>
            </Theme>
        )
    }
}

Confarm.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Confarm);