// Liskov Substitution Principle
// A sub-class must be substitutable for its parent(super) class

// class RestaurantEmployee {
//   constructor() {}
//   clockIn(): string | void {}
//   clockOut(): string | void {}
// }

// class HostEmployee extends RestaurantEmployee {
//   clockInHost(): string | void {
//     return 'Host Clocked In!';
//   }
// }

// class CookEmployee extends RestaurantEmployee {
//   clockInCook(): string | void {
//     return 'Cook Clocked In!';
//   }
// }

// class DeliveryEmployee extends RestaurantEmployee {
//   clockInDelivery(): string | void {
//     return 'Delivery Clocked In!';
//   }
// }

// function clockInEveryone(array: Array<RestaurantEmployee>) {
//   for (let employee of array) {
//     console.log(employee.clockIn()); // All logs point to the parent, non-implemented method
//   }
// }

//////////

class RestaurantEmployee {
  constructor() {}
  clockIn(): string | void {}
  clockOut(): string | void {}
}

class HostEmployee extends RestaurantEmployee {
  clockIn(): string {
    return 'Host Clocked In!';
  }
}

class CookEmployee extends RestaurantEmployee {
  clockIn(): string {
    return 'Cook Clocked In!';
  }
}

class DeliveryEmployee extends RestaurantEmployee {
  clockIn(): string {
    return 'Delivery Clocked In!';
  }
}

function clockInEveryone(array: Array<RestaurantEmployee>) {
  for (let employee of array) {
    console.log(employee.clockIn()); // All logs point to the parent, non-implemented method
  }
}
