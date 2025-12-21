const {createApp}=Vue;
createApp({
data(){
return{
menus:[
'Food','Syrup',
'Powder','Beans',
'Inv Adjustment','Return Order',
'HQ Order','Records'
]
}
}
}).mount('#app');
