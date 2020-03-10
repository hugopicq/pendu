import React from 'react';
import './App.css';

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

class App extends React.Component {

  //static defaultProps = {}
  //static propTypes = {}

  constructor(props) {
    super(props)
    this.state = {
      testedLetters = [],
      guessWord = '',
      guessCount = 0
    }
  }

  generateMask() {
    const { guessWord, testedLetters } = this.state
    mask = ''
    foreach(letter in guessWord)
      letter in testedLetters ? mask += letter : letter += '_'

    return mask
  }

  handleLetterClick = letter => {
    const { testedLetters, guessCount } = this.state
    if(letter in testedLetters){
      return
    }
    newGuessCount = guessCount + 1

    this.setState({testedLetters: [...letter]})
    this.setState({guessCount: newGuessCount})
  }

  render() {
    /* TODO : masque de mot + tentatives + <div className="letters" /> */
    const { guessWord, testedLetters } = this.state
    const mask = this.generateMask()
    const won = mask === guessWord

    return (
      <div className="pendu">
        <p className="mask">{ mask }</p>
        <div className="clavier">
          {LETTERS.map((letter, index) => (
            <div class="letter" key={index} onClick={this.handleLetterClick(letter)}>{letter}</div>
          ))}
        </div>
      </div>
    )
  }

}

export default App;
