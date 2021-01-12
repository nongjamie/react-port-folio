import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import styles from './Layout.module.css'

class Layout extends Component {

  headerSection = () => {
    return (
      <div className='w-full bg-red-500 flex flex-wrap justify-center md:justify-between text-white font-bold'>
        <div className={styles.menu} onClick={() => this.menuClickedHandler('/')}>
          <span className='text-2xl md:text-xl'>JAMIE 's PORT FOLIO</span>
        </div>
        <div className='flex items-center'>
          <div className={styles.menu} onClick={() => this.menuClickedHandler('/programming')}>
            <span>PROGRAMMING</span>
          </div>
          <div className={styles.menu} onClick={() => this.menuClickedHandler('/interpersonal')}>
            <span>INTERPERSONAL</span>
          </div>
          <div className={styles.menu} onClick={() => this.menuClickedHandler('/contact')}>
            <span>CONTACT</span>
          </div>
        </div>
      </div>
    )
  }

  footerSection = () => {
    return (
      <div className='w-full bg-red-500 text-center text-white font-bold'>
        <div className={styles.footer} onClick={() => window.location.href = 'https://github.com/nongjamie'}>
          <span className='text-md md:text-xl'>SATHIRA KITTISUKMONGKOL</span>
        </div>
      </div>
    )
  }
  
  menuClickedHandler = (url) => {
    this.props.history.push(url)
  }

  render() {
    return (
      <div>
        <div>
          {this.headerSection()}
        </div>
        <div className='px-12'>
          {this.props.children}
        </div>
        <div>
          {this.footerSection()}
        </div>
      </div>
    )
  }

}

export default withRouter(Layout)