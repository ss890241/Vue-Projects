var vm = new Vue({
    el: "#app",
    data: {
        company: '台灣鐵路局',
        ticket1: {
            date: '2022-03-19',
            direction: 'south',
            level: '自強號',
            from: '南港',
            to: '台中',
            price: 250,
            discount: 0.5,
            other: '<b>限當日當班次有效<b/>'
        },
        ticket2: {
            date: '2022-03-22',
            direction: 'north',
            level: '莒光號',
            from: '台中',
            to: '南港',
            price: 300,
            discount: 0.5,
            other: '<b>限當日當班次有效<b/>'
        }
    }
})