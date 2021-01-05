Vue.component('component-product', {
    props: ['component'],
    template: `<div class="product-item">
    <h2>{{ component.name }}</h2>
    <img :src="component.srcImage" :alt="component.name">
<p><b>{{ component.price }}</b> kč</p>
<div class="stock-text">
Skladem: 
</div>
<div id="stock-bool"  v-bind:class="component.stock">
<b>{{component.stock}}</b>
</div>
<div class="basket-style" id="addToBasket">
<button @click="addToBasket(component)" class="button-AddToBasket" id="order">Přidat do košíku</button>
</div>
    </div>`
,
methods:{
addToBasket: function (component){
    this.$root.basket.push(component)
}
}
})

Vue.component('basket-product', {
    props: ['component'],
    template: `
    <div>
        <div class="basket-product">
            <img :src="component.srcImage" :alt="component.name">
            <h2>{{ component.name }}</h2>
            <input class="number-input" type="number" :max="component.amount" min="0" value="0" @click="calculateTotal()">
            <div class="price">{{component.price}} kč</div>
            volných
            <div v-bind:class="component.stock">

            <b>{{component.amount}}</b>
            </div> 

            kusu
            <div  @click="krizek" class="close">X</div>
         </div> 
         
    </div>`,
    methods:{
        calculateTotal: function(){
        
        },
        krizek: function(component){
            this.$root.basket.pop(component);
        }
    },

})


var app = new Vue({
    el: '#app',
    data: {
        productList: [
          { id: 0, name: 'Intel Core i7-5820K', type:['procesor','cpu'] ,price:8490, srcImage:'./images/products/0.png', stock:'ano',amount:5},
          { id: 1, name: 'Intel Core i7-7740X', type:['procesor','cpu'],price:8990, srcImage:'./images/products/1.png', stock:'ne',amount:0},
          { id: 2, name: 'Intel Core i7-8700K', type:['procesor','cpu'],price:11990, srcImage:'./images/products/2.png', stock:'ano',amount:6},
          { id: 3, name: 'ASUS GeForce GTX 1060 6GB', type:['grafická karta','gpu'], price:8390, srcImage:'./images/products/3.png', stock:'ne',amount:0},
          { id: 4, name: 'GIGABYTE GeForce RTX 2070 8GB',  type:['grafická karta','gpu'], price:11990, srcImage:'./images/products/4.png', stock:'ano',amount:3},
          { id: 5, name: 'GIGABYTE Radeon RX 560 Gaming 4GB', type:['grafická karta','gpu'], price:3990, srcImage:'./images/products/5.png', stock:'ano',amount:2},
          { id: 6, name: 'Corsair Vengeance (8x16GB) DDR4 3200', type:['operační paměť','ram'],price:44990, srcImage:'./images/products/6.png', stock:'ano',amount:3},
          { id: 7, name: 'Corsair Vengeance (4x16GB) DDR4 3200', type:['operační paměť','ram'],price:16494, srcImage:'./images/products/7.png', stock:'ano',amount:2},
          { id: 8, name: 'Crucial Ballistix (4x16GB) DDR4 3000', type:['operační paměť','ram'],price:14490, srcImage:'./images/products/8.png', stock:'ne',amount:0},
          { id: 9, name: 'ASUS ROG MAXIMUS XI FORMULA - Intel Z390', type:['základní deska','motherboard'], price:11699, srcImage:'./images/products/9.png', stock:'ano',amount:4},
          { id: 10, name: 'ASUS ROG RAMPAGE VI APEX - Intel X299',type:['základní deska','motherboard'], price:13999, srcImage:'./images/products/10.png', stock:'ano',amount:8},
          { id: 11, name: 'GIGABYTE X399 AORUS Gaming 7 - AMD X399', type:['základní deska','motherboard'], price:9972, srcImage:'./images/products/11.png', stock:'ne',amount:0},

        ],

        basket: [],
        search:""
    },
})