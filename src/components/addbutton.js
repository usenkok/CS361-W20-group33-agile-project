import React from "react"

class Addbutton extends React.Component {
    state = {
        AlpacaName: "",
        AlpacaImage: "",
        AlpacaContent: "",
      }
    
      handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
          [name]: value,
        })
      }
    
      handleSubmit = event => {
        event.preventDefault()
        alert(`Info Name: ${this.state.AlpacaName} URL: ${this.state.AlpacaImage} Content: ${this.state.AlpacaContent}`)
      }
    
      render(){
          return(
            <form onSubmit={this.handleSubmit} >
            <label>
              Alpaca's name
            <input type="text" name="AlpacaName" value={this.state.AlpacaName} onChange={this.handleInputChange} />
            </label>
    
            <label>
              URL for Alpaca's image
            <input type="text" name="AlpacaImage" value={this.state.AlpacaImage} onChange={this.handleInputChange} />
            </label>
    
            <label>
              Alpaca's content
            <input type="text" name="AlpacaContent" value={this.state.AlpacaContent} onChange={this.handleInputChange} />
            </label>
    
            <button type="submit">Submit</button>
          </form>
          )
      }
}

export default Addbutton