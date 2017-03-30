// page/component/index.js
Page({
  makeRequest: function () {
    var self = this
    self.setData({
      loading: true
    })
    wx.request({
      //url: "http://china.nba.com/static/data/scores/daily.json",
      //  url:"https://op.juhe.cn/onebox/basketball/nba?key=cfe2b06fe9e79d1cda8f1b16586723a5",
      url: "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20170328",
      data: {
        noncestr: Date.now()
      },
      success: function (result) {
        wx.showToast({
          title: '请求成功',
          icon: 'success',
          mask: true,
          duration: 1000
        })
        self.setData({
          loading: false
        })
        console.log('request success', result)
      },

      fail: function ({errMsg}) {
        console.log('request fail', errMsg)
        self.setData({
          loading: false
        })
      }
    })
  },
  data: { loading: true },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.makeRequest();
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示

  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})