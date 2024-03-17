import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

class CharacterCounter extends Component {
  state = {list: [], inputValue: ''}

  addItemsToList = (event) => {
    event.preventDefault();
    const {inputValue} = this.state

    const newItem = {
      name: inputValue,
      lengthText: inputValue.length,
      id: uuidv4(),
    }
    // console.log(newItem)
    if (newItem.name !== '') {
      this.setState(prevState => ({
        list: [...prevState.list, newItem],
        inputValue: '',
      }))
    }
  }

  changeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  render() {
    const {list, inputValue} = this.state
    console.log(list)
    // const {name, lengthText} = list
    const resultPage =
      list.length > 0 ? (
        <ul className="list-container">
          {list.map(each => (
            <li key={each.id}>
              <p>
                {each.name} :
                <span className="span-text-style"> {each.lengthText}</span>
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
          alt="no user inputs"
          className="image-no-view"
        />
      )
    return (
      <div className="character-counter-background-container">
        <div className="input-list-container">
          <div className="text-container">
            <h1 className="heading-text-count-the-characters">
              Count the characters like a Boss...
            </h1>
          </div>
          {resultPage}
        </div>
        <form className="input-main-container" onSubmit={this.addItemsToList}>
          <h1 className="heading-character-counter-text">Character Counter</h1>
          <input
            type="text"
            className="input-element"
            onChange={this.changeInput}
            value={inputValue}
            placeholder="Enter the Characters here"
          />
          <button type="submit" className="buttn">
            Add
          </button>
        </form>
      </div>
    )
  }
}
export default CharacterCounter
