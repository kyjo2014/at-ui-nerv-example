/**
 * @author litianhui
 * @date 2018-10-17
 * @desc
 */
import Nerv from 'nervjs'
import './BaseTable.scss'

import classnames from 'classnames'

import {
  Modal,
  Breadcrumb,
  Select,
  Button,
  Input,
  Table
} from '@o2team/at-ui-nerv'
class BaseTable extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {
      data: [
        {
          name: '张军',
          date: new Date('2010-07-02'),
          address: '湖南省 邵阳市 武冈市'
        },
        {
          name: '武平',
          date: new Date('1994-07-15'),
          address: '广东省 汕头市 南澳县'
        },
        {
          name: '邵洋',
          date: new Date('2001-12-18'),
          address: '安徽省 池州市 东至县'
        }
      ],
      selectedRowIdx: null
    }
  }

  handleEdit = () => {
    const { selectedRowIdx } = this.state
    console.log(selectedRowIdx)
  }

  render () {
    const { data } = this.state
    return (
      <div className='BaseTable'>
        <div className='crumb'>
          <Breadcrumb>
            <Breadcrumb.Item>基础表格</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className='container'>
          <div class='handle-box'>
            <Button
              type='primary'
              icon='delete'
              class='handle-del mr10'
              onClick='delAll'
            >
              批量删除
            </Button>
            <Select
              v-model='select_cate'
              placeholder='筛选省份'
              class='handle-select mr10'
            >
              <Select.Option key='1' label='广东省' value='广东省' />
              <Select.Option key='2' label='湖南省' value='湖南省' />
            </Select>
            <Input
              v-model='select_word'
              placeholder='筛选关键词'
              class='handle-input mr10'
            />
            <Button type='primary' icon='search' onClick='search'>
              搜索
            </Button>
          </div>
          {/* <Table
            columns={[
              {
                title: '日期',
                key: 'date',
                width: '30',
                sortType: 'asc'
              },
              {
                title: '姓名',
                key: 'name',
                width: '300'
              },
              {
                title: '地址',
                key: 'address',
                width: '800'
              },
              {
                title: '操作',
                width: '300',
                action: 'onClick',
                // 受限于table组件先这么写
                component:
                   (
                     <div
                       className={'table-ctrl'}
                       ref={node => {
                         this.rows ? this.rows.push(node) : (this.rows = [node])
                       }}
                       onClick={(index, event) => {
                         console.log(this.rows[index])
                         this.setState({
                           selectedRowIdx: index
                         })
                       }}
                     >
                       <Button
                         type='text'
                         _onClick={this.handleEdit}
                       >
                         <i className={classnames('Icon', 'icon-edit')} />编辑
                       </Button>
                       <Button
                         type='text'
                         icon='el-icon-delete'
                         class='red'
                         _onClick={this.handleDelete}
                       >
                        删除
                       </Button>
                     </div>
                   )
              }

            ]}
            data={data}
            optional
            border
            pagination
            className='table'
            ref='multipleTable'
            onSelectionChange={this.handleSelectionChange}
          /> */}
        </div>
        <Modal
          value={this.state.modal1}
          title='编辑'
          onConfirm={() => {
            this.setState({
              modal1: false
            })
            alert('Confirm')
          }}
          onCancel={() => {
            this.setState({
              modal1: false
            })
            alert('Cancel')
          }}
        >
          <Modal.body>
            <p>这里是模态框的文本内容!</p>
            <p>这里是模态框的文本内容!</p>
          </Modal.body>
        </Modal>
        <Modal
          value={this.state.modal1}
          title='这里是标题'
          onConfirm={() => {
            this.setState({
              modal1: false
            })
            alert('Confirm')
          }}
          onCancel={() => {
            this.setState({
              modal1: false
            })
            alert('Cancel')
          }}
        >
          <Modal.body>
            <p>这里是模态框的文本内容!</p>
            <p>这里是模态框的文本内容!</p>
          </Modal.body>
        </Modal>
      </div>
    )
  }
}

export default BaseTable
