import { ProxyState } from "../AppState.js"
import Item from "../Models/Item.js"


class VendingService {
   constructor() {
      ProxyState.wallet = 5
      // Loop a number of times and create a few random items,
      // adding each one to the ProxyState.items[] list
      let itemTypes = ['Water', 'Pepsi', 'Coke', 'Diet Pepsi', 'Diet Coke', 'Mountain Dew', 'Fanta', 'Sprite', 'Gatorade']
      itemTypes.forEach(type => {
         // This does not need to draw every time an item is added
         // and is only run on initialization
         ProxyState.items.push(new Item(type))
      })

      console.log(ProxyState.items);
   }
   buyItem(itemId) {
      console.log("From the VendingService, buyItem:");
      let item = ProxyState.items.find(item => item.ItemId == itemId)
      // Check that there is enough money to buy the item
      if(ProxyState.wallet >= item.Price) {
         // If there is, remove the price from the wallet and decrement the numAvailable on the item
         if (item.Purchase) {
            ProxyState.wallet -= item.Price
            console.log(item);
         } else {
            console.warn("No items left, could not buy")
         }
         // Update the whole screen, calls _draw() in VendingController.js
         ProxyState.items = ProxyState.items
      } else {
         console.warn("Tried to buy an item without enough money")
      }
      
      // TODO: Stretch goal
      // Send a single copy of the item down to the "retrieval slot" of the vending machine
      // Only one item type can be there at a time
   }
}

export const vendingService = new VendingService()