// 商品分类 表结构

var GoodsClass = {
  '_id': String,                    // id
  'name': String,                   // 名称
  'EnglishDesc': String,            // 英文描述
  'ChineseDesc': String,            // 中文描述
  'sicon': String,                  // 图标
  'pcbgImg': String,                // PC端背景图片
  'mlbgImg': String,                //
  'mlMoreImg': String,
  'topId': String,                  // 上级id
  'isPcMenu': Number,               // PC端是否为导航
  'isPcIndex': Number,              // PC端是否在首页显示
  'isMbMenu': Number,               // 移动端是否为导航
  'isAppMenu': Number,              // APP是否为导航
  'sort': Number,                   // 排序
  'target': String,
  'createAt': {
    type: Date,
    default: Date.now()
  },
  'updateAt': {
    type: Date,
    default: Date.now()
  }
}

module.exports = GoodsClass;