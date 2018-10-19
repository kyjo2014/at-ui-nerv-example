/**
 * @author litianhui
 * @date 2018-10-11
 * @desc 侧边栏
 */
import Nerv from 'nervjs'
import './SideBar.scss'
import classnames from 'classnames'

import { Menu } from '@o2team/at-ui-nerv'

import { NavLink } from 'react-router-dom'

class SideBar extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {
      items: [
        {
          icon: 'el-icon-lx-home',
          index: 'dashboard',
          title: '系统首页'
        },
        {
          icon: 'el-icon-lx-cascades',
          index: 'table',
          title: '基础表格'
        },
        {
          icon: 'el-icon-lx-copy',
          index: 'tabs',
          title: 'tab选项卡'
        },
        {
          icon: 'el-icon-lx-calendar',
          index: 'form',
          title: '表单相关',
          subs: [
            {
              index: 'form',
              title: '基本表单'
            },
            {
              index: '3-2',
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
          icon: 'el-icon-lx-emoji',
          index: 'icon',
          title: '自定义图标'
        },
        {
          icon: 'el-icon-lx-favor',
          index: 'charts',
          title: 'schart图表'
        },
        {
          icon: 'el-icon-rank',
          index: 'drag',
          title: '拖拽列表'
        },
        {
          icon: 'el-icon-lx-warn',
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
      activeName4: '1'
    }
  }

  _menuBuilder = () => {
    const { items } = this.state

    return items.map(item => {
      const { icon, title, index, subs } = item
      if (!subs) {
        return (
          <Menu.Item name={index}>
            <NavLink className={classnames('sidebar-item')} to={`./${index}`}>
              <i className={`icon ${icon}`} />
              {title}
            </NavLink>
          </Menu.Item>
        )
      } else {
        return (
          <Menu.Sub
            name={index}
            title={
              <span>
                <i className={`icon ${icon}`} />
                {title}
              </span>
            }
          >
            {subs.map(sub => {
              const { index, title, subs } = sub
              if (subs) {
                return (
                  <Menu.Sub
                    name={index}
                    mode='inlineCollapsed'
                    title={
                      <span>
                        <i className={`icon ${icon}`} />
                        {title}
                      </span>
                    }
                  >
                    {subs.map(sub => {
                      const { title, index } = sub
                      return (
                        <Menu.Item name={index}>
                          <NavLink className={classnames('sidebar-item')} to={`./${index}`}>{title}</NavLink>
                        </Menu.Item>
                      )
                    })}
                  </Menu.Sub>
                )
              }

              return (
                <Menu.Item name={index}>
                  <NavLink className={classnames('sidebar-item')} to={`./${index}`}>{title}</NavLink>
                </Menu.Item>
              )
            })}
          </Menu.Sub>
        )
      }
    })
  }
  render () {
    return (
      <div className='SideBar'>
        <Menu
          activeName={this.state.activeName4}
          onSelect={name => {
            this.setState({
              activeName4: name
            })
          }}
          inlineCollapsed
        >
          {this._menuBuilder()}
        </Menu>
      </div>
    )
  }
}

export default SideBar
