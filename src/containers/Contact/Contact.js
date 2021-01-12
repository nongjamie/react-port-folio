import React, { Component } from 'react'
import { connect } from 'react-redux'

import Card from './../../components/Card/Card'
import * as actions from './../../store/actions/index'

class Contact extends Component {

  contactClickedHanlder = (link) => {
    if (link) {
      window.location.href = link
    }
  }

  componentDidMount() {
    this.props.onSetContacts()
  }

  render() {
    let { contacts } = this.props

    return (
      <div className='my-10'>
        <div className='text-center font-bold text-2xl mb-2'>
          <span>CONTACT</span>
        </div>
        <div>
          <Card>
            <div className='flex flex-wrap'>
              {contacts ? contacts.map(el => {
                return (
                  <div 
                    className='w-full md:w-1/2 flex flex-wrap justify-center items-center py-4 cursor-pointer' 
                    onClick={() => this.contactClickedHanlder(el.link)} 
                    key={el.label}
                  >
                    <div>
                      <img 
                        className='w-12 h-12 mr-4' 
                        src={el.imgUrl} 
                        alt={el.topic}
                      />
                    </div>
                    <div>
                      <span>
                        {el.value}
                      </span>
                    </div>
                  </div>
                )
              }) : null}
            </div>
          </Card>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    contacts: state.contact.contacts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetContacts: () => dispatch(actions.setContactData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)