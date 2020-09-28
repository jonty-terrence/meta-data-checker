import React from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import { connect } from 'react-redux'

class PopUp extends React.Component {
  render () {
    return (
      <>
        <Popup
          trigger={<button className="button"> Generate Meta Tags </button>}
          modal
          nested
        >
          {close => (
            <div className="modal">
              <button className="close" onClick={close}>
          &times;
              </button>
              <div className="header"> Your Meta Tags </div>
              <div className="content">
                {' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
                commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
                explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
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
          )}
        </Popup>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    title: state.title
  }
}

export default connect(mapStateToProps)(PopUp)
