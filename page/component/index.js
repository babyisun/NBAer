// page/component/index.js
const util = require('../../util/util.js');
var app = getApp();
Page({
  data: {
    userInfo: null,
    loading: true,
    scoreboard: {
      date: new Date(),
      events: [
        {
          status: "",
          competitors: [{ name: "NY", logo: "", scores: 94, homeAway: "home", linescores: [], leaders: [] }]
        }
      ]
    }
  },
  makeRequest: function () {
    var self = this
    self.setData({
      loading: true
    })
    wx.request({
      //url: "http://china.nba.com/static/data/scores/daily.json",
      //url: "https://op.juhe.cn/onebox/basketball/nba?key=cfe2b06fe9e79d1cda8f1b16586723a5",
      url: "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=&lang=en",
      data: {
        //noncestr: Date.now()
      },
      success: function (result) {
        self.setData({
          loading: false,
          scoreboard: result.data
        })
        //console.log('request success', result)
      },
      fail: function ({errMsg}) {
        //console.log('request fail', errMsg)
        self.setData({
          loading: false
        })
      }
    })
  },
  onLoad: function (options) {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
    // 页面初始化 options为页面跳转所带来的参数
    this.makeRequest();
    console.log(util.formatTime(+new Date()));
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