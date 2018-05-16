import React, { Component } from 'react'
import TextField from 'material-ui/TextField'

class ValidatingTextField extends Component {
  constructor (props) {
    super(props)
    this.state = {
      errorText: null,
      validationResult: null
    }
  }

  validate = event => {
    let value = event.target.value
    let name = event.target.name
    this.setState({ value })
    if (this.props.validationFn) {
      let result = this.props.validationFn(value)
      this.setState({ validationResult: result })
      if (this.props.onValueChange) {
        this.props.onValueChange(name, value, !!result)
      }
    }
  }

  render () {
    let { name, type, hintText, floatingLabelText } = this.props
    let propsToSet = {
      name,
      type,
      hintText,
      floatingLabelText
    }
    return (
      <TextField
        {...propsToSet}
        errorText={this.state.validationResult}
        onChange={this.validate}
        onBlur={this.validate}
            />
    )
  }
}

export default ValidatingTextField