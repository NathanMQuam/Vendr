import { ProxyState } from "../AppState.js";
import { vendingService } from "../Services/vendingService.js";

let recentItem

// Private
function _draw() {
   let items = ProxyState.items
   let template = ''
   let wallet = ProxyState.wallet
   // The cheapest an item can be is $0.75
   let bg = wallet >= 0.75 ? 'bg-success' : 'bg-warning'

   let recentItemName = recentItem ? recentItem.ItemName : ''

   items.forEach(i => template += i.Template)

   document.getElementById("app").innerHTML = /*html*/`
      <div class="row">
            <h3 class="col-2 offset-1 ${bg}">
               <div class="text-light p-2">$ ${wallet}</div>
            </h3>
      </div>
      <div class="row">
         ${template}
      </div>
      <div class="row">
         <div class="col-4 offset-4 bg-dark text-light">
            ${recentItemName}
         </div>
      </div>`
}


// Public
export default class VendingController {
   constructor() {
      ProxyState.on("items", _draw)
      _draw()
   }
   buyItem(itemId) {
      console.log("From the VendingController buyItem");
      recentItem = vendingService.buyItem(itemId)
      _draw()
   }
}