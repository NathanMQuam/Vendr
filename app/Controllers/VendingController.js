import { ProxyState } from "../AppState";
import { vendingService } from "../Services/vendingService";


// Private
function _draw() {
   let items = ProxyState.items
}


// Public
export default class VendingController {
   constructor() {
      ProxyState.on("items", _draw)
      _draw()
   }
   buyItem(itemId) {
      vendingService.buyItem(itemId)
   }
}