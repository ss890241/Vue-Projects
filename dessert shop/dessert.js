var vm = new Vue({
    el: "#app",
    data: {
        freight: 100,
        serviceFee: 5,
        minPrice: 50,
        maxPrice: 1000,
        keyword: '',
        cards: [
            {
                title: '鮮奶生乳捲',
                pic: './pic/鮮奶生乳捲.png',
                price: 150,
                soldOut: true
            }, {
                title: '乳酪蛋糕',
                pic: './pic/巴斯克乳酪蛋糕.png',
                price: 280
            }, {
                title: '焦糖布丁',
                pic: './pic/焦糖布丁.png',
                price: 45
            }, {
                title: '馬卡龍',
                pic: './pic/馬卡龍.png',
                price: 100
            }, {
                title: '檸檬磅蛋糕',
                pic: './pic/檸檬磅蛋糕.png',
                price: 250
            }, {
                title: '金牛角麵包',
                pic: './pic/金牛角麵包.png',
                price: 80
            }
        ]
    }
})