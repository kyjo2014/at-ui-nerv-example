/**
 * @author litianhui
 * @date 2018-10-15
 * @desc 数据展示
 */
import Nerv from 'nervjs'
import './DashBoard.scss'

import classnames from 'classnames'
import { Card, Progress, Table, Button } from '@o2team/at-ui-nerv'

import ReactEcharts from 'echarts-for-react'

class DashBoard extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {}
  }

  getOption = () => {
    return {
      title: {
        text: '堆叠区域图'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['邮件营销', '联盟广告', '视频广告']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          areaStyle: {normal: {}},
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '联盟广告',
          type: 'line',
          stack: '总量',
          areaStyle: {normal: {}},
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '视频广告',
          type: 'line',
          stack: '总量',
          areaStyle: {normal: {}},
          data: [150, 232, 201, 154, 190, 330, 410]
        }
      ]
    }
  };

  getOption2 = () => ({
    title: {
      text: '某站点用户访问来源',
      subtext: '纯属虚构',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
          {value: 335, name: '直接访问'},
          {value: 310, name: '邮件营销'},
          {value: 234, name: '联盟广告'},
          {value: 135, name: '视频广告'},
          {value: 1548, name: '搜索引擎'}
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  })
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
                <Progress className={classnames('progress', 'progress-vue')} percent='71.3' />
                JavaScript
                <Progress className={classnames('progress', 'progress-javascript')} percent='24.1' color='#f1e05a' />
                CSS
                <Progress className={classnames('progress', 'progress-css')} percent='3.7' />
                HTML
                <Progress className={classnames('progress', 'progress-html')} percent='0.9' color='#f56c6c' />
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
          <div className={classnames('col-xs-12', 'col-md-12')}>
            <Card>
              <div className='grid-content grid-con-3'>
                <ReactEcharts
                  option={this.getOption()}
                  style={{height: '350px', width: '100%'}}
                  className='react_for_echarts' />
              </div>
            </Card>
          </div>
          <div className={classnames('col-xs-12', 'col-md-12')}>
            <Card>
              <div className='grid-content grid-con-3'>
                <ReactEcharts
                  option={this.getOption2()}
                  style={{height: '350px', width: '100%'}}
                  className='react_for_echarts' />
              </div>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default DashBoard
