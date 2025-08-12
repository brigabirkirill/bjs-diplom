"use strict"
const logoutButton = new LogoutButton();
const ratesBoard = new RatesBoard();
const moneyManager = new MoneyManager();
const favoritesWidget = new FavoritesWidget();

logoutButton.action = () => ApiConnector.logout(callback => {
    if (callback.success) {
      location.reload();
    } 
  })

ApiConnector.current(callback => {
    if(callback.success = true) {
        ProfileWidget.showProfile(callback.data); 
    }
})

function getMoney() {
    ApiConnector.getStocks(callback => {
        if(callback.success = true) {
            ratesBoard.clearTable(); 
            ratesBoard.fillTable(callback.data);
        } 
    })
}
getMoney();
let updateInterval = setInterval(() => getMoney(), 60000);

moneyManager.addMoneyCallback = data => ApiConnector.addMoney(data, callback => {
    if(callback.success = true) {
        ProfileWidget.showProfile(callback.data); 
        moneyManager.setMessage('Баланс успешно пополнен');
    } else {
        moneyManager.setMessage(callback.error);
    }
})

moneyManager.conversionMoneyCallback = data => ApiConnector.convertMoney(data, callback => {
    if(callback.success = true) {
        ProfileWidget.showProfile(callback.data); 
        moneyManager.setMessage('Конвертация успешно выполнена');
    } else {
        moneyManager.setMessage(callback.error);
    }
})

moneyManager.sendMoneyCallback = data => ApiConnector.transferMoney(data, callback => {
    if(callback.success = true) {
        ProfileWidget.showProfile(callback.data); 
        moneyManager.setMessage('Перевод успешно выполнен');
    } else {
        moneyManager.setMessage(callback.error);
    }
})