/**
 * @author litianhui
 * @date 2018-10-11
 * @desc 侧边栏
 */
import Nerv from 'nervjs'
import './SideBar.scss'
import classnames from 'classnames'
import { connect } from 'nerv-redux'

import { Menu } from '../../../at.nerv.min.js'

import { NavLink } from 'react-router-dom'

class SideBar extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {
      items: [
        {
          icon: 'icon-home',
          index: 'dashboard',
          title: '系统首页'
        },
        {
          icon: 'icon-grid',
          index: 'table',
          title: '基础表格'
        },
        {
          icon: 'icon-copy',
          index: 'tabs',
          title: 'tab选项卡'
        },
        {
          icon: 'icon-calendar',
          index: 'form',
          title: '表单相关',
          subs: [
            {
              index: 'basicform',
              title: '基本表单'
            },
            {
              index: 'thirdlist',
              title: '三级菜单',
              subs: [
                {
                  index: 'editor',
                  title: '富文本编辑器'
                },
                {
                  index: 'markdown',
                  title: 'markdown编辑器'
                }
              ]
            },
            {
              index: 'upload',
              title: '文件上传'
            }
          ]
        },
        {
          icon: 'icon-sunrise',
          index: 'icon',
          title: '自定义图标'
        },
        {
          icon: 'icon-bar-chart',
          index: 'charts',
          title: 'chart图表'
        },
        {
          icon: 'icon-bar-chart-2',
          index: 'drag',
          title: '拖拽列表'
        },
        {
          icon: 'icon-alert-triangle',
          index: '6',
          title: '错误处理',
          subs: [
            {
              index: 'permission',
              title: '权限测试'
            },
            {
              index: '404',
              title: '404页面'
            }
          ]
        }
      ],
      activeName: '',
      collapse: false
    }
  }

  componentWillReceiveProps (nextProps) {
    const { collapse: collapseO } = this.props
    const { collapse: collapseN } = nextProps
    if (collapseO !== collapseN) {
      this.setState({
        activeName: '',
        collapse: collapseN
      }, () => {
        console.log(this.state)
      })
    }
  }
  _menuBuilder = () => {
    const { items } = this.state

    return items.map(item => {
      const { icon, title, index, subs } = item
      if (!subs) {
        return (
          <Menu.Item className={classnames('sidebar-item')} name={index}>
            <NavLink
              replace
              className={classnames('sidebar-item__herf')}
              to={`/home/${index}`}
            >
              <i className={`icon ${icon}`} />
              <span>{title}</span>
            </NavLink>
          </Menu.Item>
        )
      } else {
        return (
          <Menu.Sub
            className={classnames({
              'sidebar-sub': true
            })}
            name={index}
            title={
              <span>
                <i className={`icon ${icon}`} />
                <span>{title}</span>
              </span>
            }
            isOpen={!this.state.collapse}
          >
            {subs.map(sub => {
              const { index, title, subs } = sub
              if (subs) {
                return (
                  <Menu.Sub
                    className={classnames('sidebar-sub__sub')}
                    name={index}
                    title={
                      <span>
                        <i className={`icon ${icon}`} />
                        <span>{title}</span>
                      </span>
                    }
                    isOpen={this.state.collapse}
                  >
                    {subs.map(sub => {
                      const { title, index } = sub
                      return (
                        <Menu.Item name={index}>
                          <NavLink
                            replace
                            className={classnames('sidebar-item')}
                            to={`/home/${index}`}
                          >
                            {title}
                          </NavLink>
                        </Menu.Item>
                      )
                    })}
                  </Menu.Sub>
                )
              }

              return (
                <Menu.Item name={index}>
                  <NavLink
                    replace
                    className={classnames('sidebar-item')}
                    to={`/home/${index}`}
                  >
                    {title}
                  </NavLink>
                </Menu.Item>
              )
            })}
          </Menu.Sub>
        )
      }
    })
  }

  tempInputHandle = (evt) => {
    const val = evt.target.value
    this.setState({
      activeName: val
    })
  }
  render () {
    const { activeName, collapse } = this.state
    return (
      <div className='SideBar'>
        <input type='text' name='' id='' onInput={this.tempInputHandle} />
        <Menu
          className={classnames('sidebar', { 'sidebar-collapse': collapse })}
          activeName={activeName}
          onSelect={name => {
            this.setState({
              activeName: name
            })
          }}
          mode={collapse ? 'vertical' : 'inline'}
          // inlineCollapsed={collapse}
        >
          {this._menuBuilder()}
        </Menu>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state['sideBarReducer']
}

export default connect(mapStateToProps)(SideBar)
