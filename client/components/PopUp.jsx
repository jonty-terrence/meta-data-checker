import React from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import { connect } from 'react-redux'

class PopUp extends React.Component {
  render () {
    return (
      <>
        <Popup
          trigger={<button className="button"> &#60;/&#62; Generate Meta Tags </button>}
          modal
          nested
        >
          {close => (
            <div className="modal">
              <button className="close" onClick={close}>
          &times;
              </button>
              <div className="modal-content">
                <div className="header"> Your Meta Tags </div>
                <div className="content">
                  {' '}
                &#60;!-- Copy this code into the head section of your website --&#62;
                  <br />
                &#60;title&#62;{this.props.title}&#60;/title&#62;
                  <br />
                &#60;meta name=&#34;title&#34; content=&#34;{this.props.title}&#34;&#62;
                  <br />
                &#60;meta name=&#34;description&#34; content=&#34;{this.props.description}&#34;&#62;&#60;/meta&#62;
                  <br />
                </div>
                <div className="actions">
                  <button
                    className="button"
                    onClick={() => {
                      console.log('modal closed ')
                      close()
                    }}
                  >
                    Exit
                  </button>
                </div>
              </div>
            </div>
          )}
        </Popup>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    title: state.title,
    description: state.description
  }
}

export default connect(mapStateToProps)(PopUp)
