/**
 * @author litianhui
 * @date 2018-10-11
 * @desc 顶部
 */
import Nerv from 'nervjs'
import './Header.scss'

import { NavLink } from 'react-router-dom'
import {connect} from 'nerv-redux'

import {toggleSidebar} from '@action/index'

import { Tooltip, Dropdown, Badge, Button } from '@o2team/at-ui-nerv'

class Header extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {}
  }

  loginout = () => {

  }

  collapseSideBar = () => {
    const {dispatch} = this.props
    dispatch(toggleSidebar())
  }

  render () {
    const { fullscreen, message, username = 'admin' } = this.state
    return (
      <div className='Header'>
        <div className='collapse-btn' onClick={this.collapseSideBar}>
          <i className='icon icon-menu' />
        </div>
        <div className='logo'>后台管理系统</div>
        <div className='header-right'>
          <div className='header-user-con'>
            <div className='btn-fullscreen'>
              {/* <Tooltip
                content={fullscreen ? `取消全屏` : `全屏`}
                placement='bottom'
              > */}
              <i className='icon icon-maximize-2' />

              {/* </Tooltip> */}
            </div>
            <div className='btn-bell'>
              {/* <Tooltip
                content={message ? `有${message}条未读消息` : `消息中心`}
                placement='bottom'
              > */}
              <NavLink
                exact
                className='at-nav__page'
                activeClassName='router-link-exact-active router-link-active'
                to={{
                  pathname: `/docs/`
                }}
                replace
              >
                <Badge value='3'>
                  <i className='icon icon-bell' />
                </Badge>
              </NavLink>
              {/* </Tooltip> */}
            </div>
            <div className='user-avator'>
              <img src='static/img/img.jpg' />
            </div>
            <Dropdown >
              <span>
                {username} <i class='icon icon-chevron-down' />
              </span>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <a href='http://blog.gdfengshuo.com/about/' target='_blank'>
                    关于作者
                  </a>
                </Dropdown.Item>
                <Dropdown.Item>
                  <a
                    href='https://github.com/lin-xin/vue-manage-system'
                    target='_blank'
                  >
                    项目仓库
                  </a>
                </Dropdown.Item>
                <Dropdown.Item disabled>
                  <div onClick={this.loginout}> 退出登录 </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Header)
