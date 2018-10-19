/**
 * @author litianhui
 * @date 2018-10-15
 * @desc 数据展示
 */
import Nerv from 'nervjs'
import './DashBoard.scss'

import classnames from 'classnames'
import { Card, Progress, Table, Button } from '@o2team/at-ui-nerv'

class DashBoard extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {}
  }

  render () {
    const { name = 'admin', role = '超级管理员' } = this.props
    return (
      <div className={'DashBoard'}>
        <div className={classnames('at-row', 'row')}>
          <div className={classnames('col-md-8')}>
            <Card className={classnames('mgb20')} >
              <div className='user-info'>
                <img src={'//m.360buyimg.com/mobilecms/jfs/t8092/155/1276472068/79917/5df6cc88/59b76897Nf2e1010d.jpeg!q70.jpg'} className='user-avator' alt='' />
                <div className='user-info__cont'>
                  <div className='user-name'>{name}</div>
                  <div className='user-role' >{role}</div>
                </div>
              </div>
              <div className='user-info__list'>
                上次登录时间：
                <span>2018-01-01</span>
              </div>
              <div className='user-info__list'>
                上次登录地点：
                <span>东莞</span>
              </div>
            </Card>
            <Card >
              <div slot='title' className='clearfix'>
                <span>语言详情</span>
              </div>
              <div>
                Vue
                <Progress percent='71.3' color='#42b983' />
                JavaScript
                <Progress percent='24.1' color='#f1e05a' />
                CSS
                <Progress percent='3.7' />
                HTML
                <Progress percent='0.9' color='#f56c6c' />
              </div>
            </Card>
          </div>
          <div className={classnames('col-md-16')}>
            <div className={classnames('at-row', 'row', 'mgb20')}>
              <div className='col-md-8'>
                <Card className={classnames('top-data', 'heigh100')} >
                  <div className='grid-content grid-con-1'>
                    <i className='el-icon-lx-people grid-con-icon' />
                    <div className='grid-cont-right'>
                      <div className='grid-num'>1234</div>
                      <div>用户访问量</div>
                    </div>
                  </div>
                </Card>
              </div>
              <div className='col-md-8'>
                <Card className={classnames('top-data', 'heigh100')}>
                  <div className='grid-content grid-con-2'>
                    <i className='el-icon-lx-notice grid-con-icon' />
                    <div className='grid-cont-right'>
                      <div className='grid-num'>321</div>
                      <div>系统消息</div>
                    </div>
                  </div>
                </Card>
              </div>
              <div className='col-md-8'>
                <Card className={classnames('top-data', 'heigh100')}>
                  <div className='grid-content grid-con-3'>
                    <i className='el-icon-lx-goods grid-con-icon' />
                    <div className='grid-cont-right'>
                      <div className='grid-num'>5000</div>
                      <div>数量</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            <Card className={classnames('todoList')}>
              <div slot='title' className='clearfix'>
                <span>待办事项</span>
              </div>
              <div slot='extra'>
                <Button type='text'>添加</Button>
              </div>
              {/* <Table
                optional
                columns={[
                  {
                    title: '',
                    key: 'name',
                    width: '300'
                  },
                  {
                    title: '',
                    width: '300',
                    action: 'onClick',
                    component: (
                      <div
                        className={classnames('flex')}
                        onClick={(index, event) => {}}
                      >
                        {' '}
                        <i className={classnames('icon', 'icon-edit-2')} />{' '}
                        <i className={classnames('icon', 'icon-trash-2')} />{' '}
                      </div>
                    )
                  }
                ]}
                data={[
                  {
                    name: '今天要修复100个bug'
                  },
                  {
                    name: '今天要修复100个bug'
                  },
                  {
                    name: '今天要修复100个bug'
                  },
                  {
                    name: '今天要修复100个bug'
                  }
                ]}
              /> */}
            </Card>
          </div>
        </div>
        <div className={classnames('row', 'at-row')}>
          <div className={classnames('col-md-12')}>
            <Card>
              <div className='grid-content grid-con-3'>Chart1</div>
            </Card>
          </div>
          <div className={classnames('col-md-12')}>
            <Card>
              <div className='grid-content grid-con-3'>Chart1</div>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default DashBoard
