/**
 * @author litianhui
 * @date 2018-10-11
 * @desc 标签栏
 */
import Nerv from 'nervjs'
import './Tags.scss'

import classnames from 'classnames'

import { NavLink } from 'react-router-dom'
import { Tag, Dropdown } from '@o2team/at-ui-nerv'

class Tags extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {
      items: [],
      activeTagIdx: 0
    }
  }

  componentDidMount () {
    const {
      history: {
        location: { pathname }
      }
    } = this.props

    this.setState({
      items: [
        {
          title: pathname,
          path: pathname
        }
      ]
    })
  }

  componentWillReceiveProps (nextProps) {
    const { items, activeTagIdx: activeTagIdxO } = this.state
    const {
      history: {
        location: { pathname }
      }
    } = nextProps
    let activeTagIdxN = activeTagIdxO

    if (
      items.some((item, idx) => {
        if (item.path === pathname) {
          activeTagIdxN = idx
          return true
        }
        return false
      })
    ) {
      this.setState({
        activeTagIdx: activeTagIdxN
      })
    } else {
      this.setState({
        items: [].concat(items, [
          {
            title: pathname,
            path: pathname
          }
        ]),
        activeTagIdx: items.length
      })
    }
  }

  removeTag = idx => {
    const { items } = this.state
    items.splice(idx, 1)
    this.setState({
      items
    })
  }

  _renderTags = () => {
    const { items = [], activeTagIdx } = this.state
    return items.map((item, idx) => {
      const { title, path } = item
      return (
        <li className='tag-wrap'>
          <Tag className={classnames('tag', {
            'tag-active': idx === activeTagIdx
          })} closable onClose={this.removeTag.bind(this, idx)}>
            <NavLink to={path}>{title}</NavLink>
          </Tag>
        </li>
      )
    })
  }
  render () {
    return (
      <div className='Tags'>
        <ul>{this._renderTags()}</ul>
        <div className='tags-close-box'>
          <Dropdown>
            <span>
              标签选项 <i class='icon icon-chevron-down' />
            </span>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  console.log('关闭其他')
                }}
              >
                <div>关闭其他</div>
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  console.log('关闭所有')
                }}
              >
                <div>关闭所有</div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    )
  }
}

export default Tags
