const order = ['red', 'yellow', 'blue', 'green', 'red']

Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData:[],
    totalMoney:0,
    currentIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //数据库操作
    const db = wx.cloud.database()
    // 查询当前用户所有的 counters
    db.collection('dishes').where({
      _openid: this.data.openid
    }).get({
      success: res => {
        that.setData({
          listData: res.data,
        })
        console.log('[数据库] [查询记录] 成功: ', res)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
        console.error('[数据库] [查询记录] 失败：', err)
      }
    })
  },

  //增加菜品
  addItem: function (e) {
    var that = this;
    //var index = e.currentTarget.dataset.index;
    var a = this.data.totalMoney+this.data.listData[e.currentTarget.dataset.index].price;
    that.setData({
      totalMoney:a,
    })
    //点菜的数据上传云端
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

})