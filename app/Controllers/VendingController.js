import { ProxyState } from "../AppState.js";
import { vendingService } from "../Services/vendingService.js";


// Private
function _draw() {
   let items = ProxyState.items
   let template = ''
   let wallet = ProxyState.wallet

   items.forEach(i => template += i.Template)

   document.getElementById("app").innerHTML = /*html*/`
      <div class="row">
            <h3 class="col-2 offset-1 bg-success">
               <div class="text-light p-2">$ ${wallet}</div>
            </h3>
      </div>
      <div class="row">
         ${template}
      </div>`
}


// Public
export default class VendingController {
   constructor() {
      // TODO: Initialize the vending machine's inventory
      ProxyState.on("items", _draw)
      _draw()
   }
   buyItem(itemId) {
      console.log("From the VendingController buyItem:", itemId);
      vendingService.buyItem(itemId)
   }
}