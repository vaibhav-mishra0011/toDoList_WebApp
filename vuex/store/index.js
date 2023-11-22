export const state = () => ({
    products: [
        { name: "Apple", price: 10 },
        { name: "Banana", price: 40 },
        { name: "Mango", price: 20 },
        { name: "Papaya", price: 70 }
    ],
})

export const getters = {
    salesProducts(state) {
        return state.products.map((product) => {
            return {
                name: "**" + product.name + "**",
                price: product.price * 2,
            };
        });
    }
}

export const mutations = {
    reducePrice(state,payload) {
        state.products.forEach((product) => {
            product.price -= payload;
        })
    }
}

export const actions = {
    reducePrice: (context,payload) => {
        setTimeout(() => {
            context.commit('reducePrice',payload)
        }, 2000);
    }
}