import React, { Component } from 'react'
import { connect } from 'react-redux'

import styles from './Homepage.module.css'
import Card from './../../components/Card/Card'
import Auxiliary from './../../hoc/Auxiliary/Auxiliary'
import * as actions from './../../store/actions/index'

class Homepage extends Component {

  componentDidMount() {
    this.props.onSetShortDescription()
    this.props.onSetProgrammingLanguages()
    this.props.onSetFrontendTechnologies()
    this.props.onSetBackendTechnologies()
    this.props.onSetDatabases()
    this.props.onSetOtherTools()
  }

  descriptionSection = () => {
    const data = this.props.shortDescription
    return (
      <Auxiliary>
        <div className={`${styles['card-label']}`}>
          <span>SHORT DESCRIPTION</span>
        </div>
        <Card>
          <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 lg:w-1/3 flex justify-center items-center'>
              <img 
                className='rounded-3xl w-64'
                src='https://avatars2.githubusercontent.com/u/25222819?s=460&u=a09c540f082dd3a02466a259e56151f9d7ba3183&v=4'
                alt='jamie-profile'
              />
            </div>
            <div className='w-full mt-6 md:w-1/2 lg:w-2/3 lg:mt-0'>
              {data.map(item => {
                return (
                  <div key={item.topic}>
                    <span><b>{item.topic} :</b></span>
                    <span className='ml-2'>{item.value}</span>
                    {item.hoverLine ? <hr className='my-3'/> : null}
                  </div>
                )
              })}
            </div>
          </div>
        </Card>
      </Auxiliary>
    )
  }

  programmingLanguages = () => {
    const data = this.props.programmingLanguages
    return (
      <Auxiliary>
        <div className={`${styles['card-label']}`}>
          <span>PROGRAMMING LANGUAGES</span>
        </div>
        <Card>
          <div className='flex flex-wrap'>
            {data.map(item => {
              return (
                <div 
                  className='text-center w-1/3 lg:w-1/4 my-3'
                  key={item.name}
                >
                  <img 
                    src={item.imgUrl} 
                    className='w-16 lg:w-24 h-16 lg:h-24 mb-1 rounded mx-auto'
                    alt={item.name}
                  />
                  <span className='text-sm'>{item.name}</span>
                </div>
              )
            })}
          </div>
        </Card>
      </Auxiliary>
    )
  }

  frontendSection = () => {
    const data = this.props.frontendTechnologies
    return (
      <Auxiliary>
        <div className={`${styles['card-label']}`}>
          <span>FRONTEND TECHNOLOGIES</span>
        </div>
        <Card>
          <div className='flex flex-wrap'>
            {data.map(item => {
              return (
                <div 
                  className='text-center w-1/3 my-3' 
                  key={item.name}
                >
                  <img 
                    src={item.imgUrl} 
                    className='w-16 lg:w-24 h-16 lg:h-24 mb-1 rounded mx-auto'
                    alt={item.name}
                  />
                  <span className='text-sm'>{item.name}</span>
                </div>
              )
            })}
          </div>
        </Card>
      </Auxiliary>
    )
  }
  
  backendSection = () => {
    const data = this.props.backendTechnologies
    return (
      <Auxiliary>
        <div className={`${styles['card-label']}`}>
          <span>BACKEND TECHNOLOGIES</span>
        </div>
        <Card>
          <div className='flex flex-wrap'>
            {data.map(item => {
              return (
                <div 
                  className='text-center w-1/3 my-3' 
                  key={item.name}
                >
                  <img 
                    src={item.imgUrl} 
                    className='w-16 lg:w-24 h-16 lg:h-24 mb-1 rounded mx-auto'
                    alt={item.name}
                  />
                  <span className='text-sm'>{item.name}</span>
                </div>
              )
            })}
          </div>
        </Card>
      </Auxiliary>
    )
  }

  databaseSection = () => {
    const data = this.props.databases
    return (
      <Auxiliary>
        <div className={`${styles['card-label']}`}>
          <span>DATABASES</span>
        </div>
        <Card>
          <div className='flex flex-wrap'>
            {data.map(item => {
              return (
                <div 
                  className='text-center w-1/3 lg:w-1/4 my-3'
                  key={item.name}
                >
                  <img 
                    src={item.imgUrl} 
                    className='w-16 lg:w-24 h-16 lg:h-24 mb-1 rounded mx-auto'
                    alt={item.name}
                  />
                  <span className='text-sm'>{item.name}</span>
                </div>
              )
            })}
          </div>
        </Card>
      </Auxiliary>
    )
  }

  otherToolsSection = () => {
    const data = this.props.otherTools
    return (
      <Auxiliary>
        <div className={`${styles['card-label']}`}>
          <span>OTHER TOOLS</span>
        </div>
        <Card>
          <div className='flex flex-wrap'>
            {data.map(item => {
              return (
                <div 
                  className='text-center w-1/3 lg:w-1/4 my-3'
                  key={item.name}
                >
                  <img 
                    src={item.imgUrl} 
                    className='w-16 lg:w-24 h-16 lg:h-24 mb-1 rounded mx-auto'
                    alt={item.name}
                  />
                  <span className='text-sm'>{item.name}</span>
                </div>
              )
            })}
          </div>
        </Card>
      </Auxiliary>
    )
  }

  render() {
    return (
      <div>
        <div className='my-10'>
          {this.descriptionSection()}
        </div>
        <div className='my-10'>
          {this.programmingLanguages()}
        </div>
        <div className='flex flex-wrap my-10'>
          <div className='w-full lg:w-1/2 md:pr-1'>
            {this.frontendSection()}
          </div>
          <div className='w-full lg:w-1/2 md:pl-1 mt-10 lg:mt-0'>
            {this.backendSection()}
          </div>
        </div>
        <div className='my-10'>
          {this.databaseSection()}
        </div>
        <div className='my-10'>
          {this.otherToolsSection()}
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    shortDescription: state.homepage.shortDescription,
    programmingLanguages: state.homepage.programmingLanguages,
    frontendTechnologies: state.homepage.frontendTechnologies,
    backendTechnologies: state.homepage.backendTechnologies,
    databases: state.homepage.databases,
    otherTools: state.homepage.otherTools,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetShortDescription: () => dispatch(actions.setShortDescription()),
    onSetProgrammingLanguages: () => dispatch(actions.setProgrammingLanguages()),
    onSetFrontendTechnologies: () => dispatch(actions.setFrontendTechnologies()),
    onSetBackendTechnologies: () => dispatch(actions.setBackendTechnologies()),
    onSetDatabases: () => dispatch(actions.setDatabases()),
    onSetOtherTools: () => dispatch(actions.setOtherTools()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)