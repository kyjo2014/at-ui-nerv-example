/**
 * @author litianhui
 * @date 2018-10-18
 * @desc tab选项卡
 */
import Nerv from 'nervjs'
import './Tabs.scss'

import classnames from 'classnames'
import { Breadcrumb, Tabs as AtTabs, Table, Button } from '@o2team/at-ui-nerv'

class Tabs extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {
      activeIndex: 0
    }
  }

  render () {
    return (
      <div className='Tabs'>
        <div className='crumbs'>
          <Breadcrumb >
            <Breadcrumb.Item>
              <i className={classnames('icon', 'icon-file-text')} /> tab选项卡
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div className='tabs-container'>
          <AtTabs
            activeIndex={this.state.activeIndex}
            onChange={index => {
              this.setState({
                activeIndex: index
              })
            }}
          >
            <AtTabs.Pane label={`未读消息(${2})`} name={`未读消息(${2})`}>
              <p>Content of Tab Pane 1</p>
              {/* <Table columns={[
                {
                  title: '姓名',
                  key: 'name',
                  width: '300'
                },
                {
                  title: '年龄',
                  key: 'age',
                  width: '300'
                },
                {
                  title: '地址',
                  key: 'address',
                  width: '800'
                }]} data={[
                {
                  name: '库里',
                  age: 18,
                  address: '深圳市宝安区创业一路'
                },
                {
                  name: '詹姆斯',
                  age: 25,
                  address: '广州市天河区岗顶'
                },
                {
                  name: '科比',
                  age: 24,
                  address: '上海市浦东新区'
                },
                {
                  name: '杜兰特',
                  age: 22,
                  address: '深圳市南山区深南大道'
                },
                {
                  name: '威斯布鲁克',
                  age: 21,
                  address: '北京市朝阳区'
                },
                {
                  name: '邓肯',
                  age: 26,
                  address: '深圳市罗湖区万象城'
                },
                {
                  name: '帕克',
                  age: 25,
                  address: '深圳市福田区中心书城'
                },
                {
                  name: '欧文',
                  age: 20,
                  address: '广州市番禺区大学城'
                },
                {
                  name: '托马斯',
                  age: 19,
                  address: '北京市朝阳区'
                }
              ]} /> */}
              <div class='handle-row'>
                <Button type='primary'>全部标为已读</Button>
              </div>
            </AtTabs.Pane>
            <AtTabs.Pane label={`已读消息${2}`} name={`已读消息${2}`}>
              <p>Content of Tab Pane 2</p>
              <div class='handle-row'>
                <Button type='danger'>删除全部</Button>
              </div>
            </AtTabs.Pane>
            <AtTabs.Pane label={`回收站${1}`} name={`回收站${1}`}>
              <p>Content of Tab Pane 3</p>
              <div class='handle-row'>
                <Button type='danger'>清空回收站</Button>
              </div>
            </AtTabs.Pane>
          </AtTabs>
        </div>
      </div>
    )
  }
}

module.exports = Tabs
