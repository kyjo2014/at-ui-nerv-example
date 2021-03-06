/**
 * @author litianhui
 * @date 2018-10-11
 * @desc 主页
 */
import Nerv from 'nervjs'
import { Route } from 'react-router-dom'
import classnames from 'classnames'

import './Home.scss'

import Header from '@component/Header/Header'
import SideBar from '@component/SideBar/SideBar'
import Tags from '@component/Tags/Tags'

import DashBoard from '@view/DashBoard/DashBoard'
import BaseTable from '@view/BaseTable/BaseTable'
import Tabs from '@view/Tabs/Tabs'
import BaseForm from '@view/BaseForm/BaseForm'
import Icon from '@view/Icon/Icon'
import Charts from '@view/Charts/Charts'
import DragList from '@view/DragList/DragList'

class Home extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {}
  }

  componentDidMount () {
    console.log(this.props)
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps)
  }

  render () {
    const { match, history } = this.props
    return (
      <div className={classnames('page', 'Home')}>
        <Header />
        <div className='main'>
          <SideBar />
          <div className='content-box'>
            <Tags history={history} />
            <div className='content'>
              <Route path={`${match.url}/dashboard`} component={DashBoard} />
              <Route path={`${match.url}/table`} component={BaseTable} />
              <Route path={`${match.url}/tabs`} component={Tabs} />
              <Route path={`${match.url}/form`} component={BaseForm} />
              <Route path={`${match.url}/icon`} component={Icon} />
              <Route path={`${match.url}/charts`} component={Charts} />
              <Route path={`${match.url}/drag`} component={DragList} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
