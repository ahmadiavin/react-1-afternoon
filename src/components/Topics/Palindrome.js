import React, {Component} from 'react';

 export default class Palindrome extends Component {
    constructor() {
        super();
    
        this.state = {
          userInput: '',
          palindrome: ''
        };
      }

      handleChange(val) {
          this.setState({userInput: val});
      }

      isPalindrome(userInput) {
          let forwards = userInput;
          let backwards = userInput;
          backwards = backwards.split('');
          backwards = backwards.reverse();
          backwards = backwards.join('');

          if(forwards === backwards){
              this.setState({palindrome: 'true'});
        
          } else {
              this.setState({palindrome: 'false'});
          }
    //   let userinput = userInput.length;
    //   for (var i = 0; i < userinput / 2; i++) {
    //       if (userInput.charAt(i) !== userInput.charAt(userinput - 1 - i)){
    //           return false;
              
    //       }
    //   }
    //   return true;
      
      }
      
    render() {
        return (
            <div className="puzzleBox palindromePB">
            <h4> Palindrome </h4>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
            <button className="confirmationButton" onClick={ () => this.isPalindrome(this.state.userInput)}> Check </button>
            <span className="resultsBox">Palindrome: { this.state.palindrome }</span>
          </div>
        )
    }
}
