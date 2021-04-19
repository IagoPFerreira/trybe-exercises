const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.name = 'Luiz Silva';
  order.order.pizza = {
    muzzarela: {
      amount: 1,
      price: 20,
    },
    calabresa: {
      amount: 1,
      price: 25,
    }
  }

  order.order.drinks = {
    coke: {
      type: 'Coca-cola Zero',
      price: 5,
      amount: 1,
    }
  }

console.log(`Olá ${order.name}, o total do seu pedido de ${order.order.pizza.muzzarela}, ${order.order.pizza.calabresa} e ${order.order.drinks.type} é de ${order.order.pizza.muzzarela.price + order.order.pizza.calabresa.price + order.order.drinks.coke.price}`);
}

orderModifier(order);
