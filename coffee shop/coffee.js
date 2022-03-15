var vm = new Vue({
    el: "#app",
    data: {
        editing: false,
        favoriteType: 'Caramel macchiato',
        cupTypes: [
            'Short', 'Tall', 'Grande', 'Venti'
        ],
        coffees: [
            {
                name: 'Expresso',
                coffee: 95, 
                foam: 0, 
                water: 0, 
                milk: 0, 
                syrup: 0,
                type: 'Short'
            },
            {
                name: 'Americano',
                coffee: 25, 
                foam: 0, 
                water: 70, 
                milk: 0, 
                syrup: 0,
                type: 'Tall'
            },
            {
                name: 'Latte',
                coffee: 25, 
                foam: 15, 
                water: 0, 
                milk: 55, 
                syrup: 0,
                type: 'Tall'
            },
            {
                name: 'Cappuccino',
                coffee: 25, 
                foam: 35, 
                water: 0, 
                milk: 35, 
                syrup: 0,
                type: 'Grande'
            },
            {
                name: 'Caramel macchiato',
                coffee: 25, 
                foam: 15, 
                water: 0, 
                milk: 45, 
                syrup: 10,
                type: 'Venti'
            }
        ]
    }
})