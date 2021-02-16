import { ProxyState } from "../AppState.js"


class VendingService {
   buyItem(itemId) {
      console.log("From the VendingService, buyItem:", itemId);
      //ProxyState
   }
}

export const vendingService = new VendingService()