/**
 * @author litianhui
 * @date 2018-10-19
 * @desc 图标页面
 */
import Nerv from 'nervjs'
import classnames from 'classnames'

import iconList from './icons'

import './Icon.scss'

import { Breadcrumb, Input } from '@o2team/at-ui-nerv'

class Icon extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {
      keyword: '',
      iconList: iconList
    }
  }

  get list () {
    const { iconList, keyword } = this.state
    return iconList.filter(item => {
      return item.indexOf(keyword) !== -1
    })
  }

  onInputHandle = (val) => {
    this.setState({
      keyword: val
    })
  }
  render () {
    const { iconList, keyword } = this.state
    const { list } = this
    return (
      <div className='Icon'>
        <div>
          <div className='crumbs'>
            <Breadcrumb separator='/'>
              <Breadcrumb.Item>
                <i className={classnames('icon', 'icon-circle')} />
                自定义图标
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className='icon-container'>
            <h2>使用方法</h2>
            <p style='line-height: 50px;'>
              直接通过设置类名为 icon 和 icon-iconName 来使用即可。例如：（共
              {iconList.length}
              个图标）
            </p>
            <p className='example-p'>
              <i
                className={classnames('icon', 'icon-activity')}
                style='font-size: 30px;color: #ff5900'
              />
              <span>
                &lt;i
                className=&quot;icon&quot;icon-activity&quot;&gt;&lt;/i&gt;
              </span>
            </p>
            <p className='example-p'>
              <i
                className={classnames('icon', 'icon-github')}
                style='font-size: 30px;color:#fd5656'
              />
              <span>
                &lt;i className=&quot;icon&quot;icon-github&quot;&gt;&lt;/i&gt;
              </span>
            </p>
            <p className='example-p'>
              <i
                className={classnames('icon', 'icon-settings')}
                style='font-size: 30px;color: #ffc300'
              />
              <span>

                &lt;i className=&quot;icon&quot;icon-settings&quot;&gt;&lt;/i&gt;
              </span>
            </p>
            <br />
            <h2>图标</h2>
            <div className='search-box'>
              <Input
                className='search'
                size='large'
                // clearable
                value={keyword}
                placeholder='请输入图标名称'
                onInput={this.onInputHandle}
              />
            </div>
            <ul>
              {list.map((item, index) => {
                return (
                  <li
                    className={'icon-li'}
                    key={index}
                  >
                    <div className='icon-li-content'>
                      <i className={classnames('icon', item)} />
                      <span>{item}</span>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Icon
