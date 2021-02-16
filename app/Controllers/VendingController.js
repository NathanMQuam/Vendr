import { ProxyState } from "../AppState.js";
import { vendingService } from "../Services/vendingService.js";


// Private
function _draw() {
   let items = ProxyState.items
   document.getElementById("app").innerHTML = /*html*/``
}


// Public
export default class VendingController {
   constructor() {
      ProxyState.on("items", _draw)
      _draw()
   }
   buyItem(itemId) {
      console.log("From the VendingController buyItem:", itemId);
      vendingService.buyItem(itemId)
   }
}