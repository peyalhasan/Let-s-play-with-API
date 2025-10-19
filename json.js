const user = {id: 1, name: 'Gorib Amir', job: 'actor'};
// JavaScript Object Notation (JSON)

const stringfy = JSON.stringify(user)
console.log(stringfy)


const shop = {
    owner: 'Alia', 
    address: {
        street: 'Kochukhet voot er goli',
        city: 'Eto kicho ki dorkar',
        country: 'BD',
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 450000,
    isOpen: true,
    isNew: false,
}

const shopJson = JSON.stringify(shop);
console.log(shopJson)

