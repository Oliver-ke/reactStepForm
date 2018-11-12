import React from 'react'
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Theme from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      flexGrow: 1
    },
    card: {
        minWidth: 275,
        marginTop: 20,
        marginRight: 10,
        marginLeft: 10
      },
    title: {
    fontSize: 20,
    },
  });
  
class Success extends React.Component{

    render(){
        const {values: {firstName, lastName,},  classes} = this.props;
        return(
            <Theme>
                <React.Fragment>
                    
                <AppBar position="static">
                    <Toolbar >
                     <h1>Success !!!</h1>
                    </Toolbar>
                </AppBar>
                <Grid container direction="row" justify="center" 
                    className={classes.root} spacing={16}>
                    <Grid item xs={12} md={6}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Thank You {firstName} {lastName}
                            </Typography>
                            <Typography variant="h5" component="h2">
                            We would send you an email soon for further instructions and confarmation
                            </Typography>
                        </CardContent>
                    </Card>
                    </Grid>
                </Grid>
                </React.Fragment>
            </Theme>
        )
    }
}

Success.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Success);
