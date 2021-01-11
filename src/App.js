import { Route, Switch, Redirect } from 'react-router-dom'

import Homepage from './containers/Homepage/Homepage'
import Interpersonal from './containers/Interpersonal/Interpersonal'
import Programming from './containers/Programming/Programming'
import Contact from './containers/Contact/Contact'
import Layout from './hoc/Layout/Layout'

function App() {
  return (
    <Layout>
      <div className='App'>
        <Switch>
          <Route path='/interpersonal' component={Interpersonal} />
          <Route path='/programming' component={Programming} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/' exact component={Homepage} />
          <Redirect to='/' />
        </Switch>
      </div>
    </Layout>
  )
}

export default App
