Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 被点击的首页导航栏的索引
    currentIndexNav:0,
    //首页导航栏数据
    navList:[],

    // 轮播图数据
    swiperList:[],
    // 视频列表数据
    videoList:[]
  },
  // 点击首页导航栏按钮
  activeNav(e){
    // console.log(123);
    this.setData({
      currentIndexNav:e.target.dataset.index
    })
  },

  /**
   * 获取首页导航栏数据
   */
  getnavList(){
    let that=this;
    //利用小程序内置的发送请求方法
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/navList',
      success(res){
        // console.log(res);
        if(res.data.code==0){
          that.setData({
            navList:res.data.data.navList
          })
        }

      }
    })

  },
  /**
   * 获取轮播图数据
   */
  getswiperList(){
    let that=this;
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/swiperList',
      success(res){
        // console.log(res);
        if(res.data.code===0){
          that.setData({
            swiperList:res.data.data.swiperList
          })
        }
      }
    })
  },
  /**
   * 获取视频列表数据
   */
  getvideoList(){
    let that=this;
    wx.request({
      url: 'http://mock-api.com/mnEe4VnJ.mock/videoList',
      success(res){
        // console.log(res);
        if(res.data.code===0){
          that.setData({
            videoList:res.data.data.videoList
          })
        }
      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取首页导航栏数据
    this.getnavList();
    // 获取轮播图数据
    this.getswiperList();
    // 获取视频列表数据
    this.getvideoList();
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
    
  }
})