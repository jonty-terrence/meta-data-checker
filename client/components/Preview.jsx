import React from 'react'
import { connect } from 'react-redux'

class Preview extends React.Component {
  render () {
    return (
      <div>
        <h3>{this.props.title}</h3>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
      title: state.title
    }
  }

export default connect(mapStateToProps)(Preview)