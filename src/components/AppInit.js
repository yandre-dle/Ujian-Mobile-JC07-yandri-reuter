import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from '@firebase/app';
import '@firebase/auth';
import { alreadyLogin, notLoginYet } from '../actions'
import Main from './Main';

class AppInit extends Component {

  componentDidMount() {
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDUGxcnPnTSU2w-GtHYMcpg_htJw5_8zsE",
    authDomain: "react-native-manager-42427.firebaseapp.com",
    databaseURL: "https://react-native-manager-42427.firebaseio.com",
    projectId: "react-native-manager-42427",
    storageBucket: "react-native-manager-42427.appspot.com",
    messagingSenderId: "767852931332"
  };
    firebase.initializeApp(config);
      
    firebase.auth().onAuthStateChanged((user) => {
        if(user) {
            this.props.alreadyLogin(user);
        }
        else {
            this.props.notLoginYet();
        }
    });
  }

  render() {
    return(
          <Main />
    );
  }
}



export default connect(null, { alreadyLogin, notLoginYet })(AppInit);
