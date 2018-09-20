Page({
    data:{
        imgUrl:[
            {src:"/images/banner.png"},
            {src:"/images/banner2.png"},
            {src:"/images/banner3.jpg"}
        ]
    },
    toggleUser(){
        wx.navigateTo({
            url: '/pages/user/user'
            
        });
    }
});