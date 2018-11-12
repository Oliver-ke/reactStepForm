import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class ButtonAppBar extends React.Component{
  state = {
    count: 0,
    time: 2,
    up: false
  }

  clickHandler = (event) =>{
    console.log(event)
    let privCount = this.state.count;
    if ( this.state.up == true){
      privCount -=1;
      if(privCount == 0){
        this.setState({up: false})
      }
      
      this.setState({count: privCount})
    }
    else if ( this.state.up == false){
      privCount +=1;
      if(privCount == 5){
        this.setState({up: true})
      }
      this.setState({count: privCount})
    }
   
  }
  render(){
    const { classes, notice } = this.props;
      return (
          <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                  <MenuIcon onClick={this.clickHandler}/>
                </IconButton>
                <Typography variant="h6" color="inherit" className={classes.grow}>
                 <p>count of click: {this.state.count}</p>
                </Typography>
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>
          </div>
        );
  }
}

//  const ButtonAppBar = (props) => {
//   console.log(props);
//   const { classes, notice } = props;
//   console.log({"classes": classes, "notice": notice})
//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
//             <MenuIcon onClick={btnClick} />
//           </IconButton>
//           <Typography variant="h6" color="inherit" className={classes.grow}>
//            <p> News</p>
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
