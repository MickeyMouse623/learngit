/*
 * 与服务器通讯操作集合
 * @param GetData      Get方法
 * @param PostData     Post方法
 * @param PutData      Put方法
 * @param DeleteArray  批量删除
 * @param DeleteOne    单个删除
 * @param CheckedArray 获取已checked的item
 */

import Vue from 'vue'
import { Message, MessageBox } from 'element-ui'
import 'element-ui/lib/theme-default/message.css'
const PUBLIC_URL = '/api/v1'

// GET 方法读取数据
export function GetData (url, cb) {
  Vue.http.get(PUBLIC_URL + url).then(function (res) {
    if (res.body.status === 200) {
      cb(res.body.data)
    } else {
      Message.error(res.body.msg)
    }
  }, function (res) {
    Message.error('数据获取失败！攻城狮努力修复中...')
  })
}

// POST 方法提交数据(新增数据)
export function PostData (url, data, cb) {
  Vue.http.post(PUBLIC_URL + url, data).then(function (res) {
    if (res.body.status === 200) {
      Message.success(res.body.msg)
      cb(res.body.data)
    } else {
      Message.error(res.body.msg)
    }
  }, function (res) {
    Message.error('操作失败！攻城狮努力修复中...')
  })
}

// PUT 方法提交数据(更新数据)
export function PutData (url, data) {
  Vue.http.put(PUBLIC_URL + url, data).then(function (res) {
    if (res.body.status === 200) {
      Message.success(res.body.msg)
    } else {
      Message.error(res.body.msg)
    }
  }, function (res) {
    Message.error('操作失败！攻城狮努力修复中...')
  })
}

// 批量删除操作
export function DeleteArray (url, data) {
  if (data.length === 0) Message.error('请选择需要删除的项目')
  MessageBox('此操作将删除所选项目, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    Vue.http.post(PUBLIC_URL + url, {'ids': data}).then(function (res) {
      if (res.body.status === 200) {
        Message.success(res.body.msg)
      } else {
        Message.error(res.body.msg)
      }
    }, function (res) {
      Message.error('操作失败！攻城狮努力修复中...')
    })
  }).catch(() => {
    Message.info('已取消删除')
  })
}

// 删除操作(单个删除)
export function DeleteOne (url, cb) {
  MessageBox('此操作将删除该项目, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    Vue.http.delete(PUBLIC_URL + url, {credentials: true}).then(function (res) {
      if (res.body.status === 200) {
        Message.success(res.body.msg)
        cb()
      } else {
        Message.error(res.body.msg)
      }
    }, function (res) {
      Message.error('操作失败！攻城狮努力修复中...')
    })
  }).catch(() => {
    Message.info('已取消删除')
  })
}

// 获取勾选的项目id
export function CheckedArray (startArray, cb) {
  for (var i = 0, j = startArray.length, endArray = []; i < j; i++) {
    endArray.push(startArray[i].id)
  }
  cb(endArray)
}
