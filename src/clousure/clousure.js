function my_money_box() {
    let save_coins = 0;
    function count_coins(coins) {
        save_coins +=coins
        console.log(`Money in box: $${save_coins}`)
    }

    return count_coins;
}

const money_box = my_money_box();
money_box(5);
money_box(10);
money_box(50);


const fruits = () => {
  if (true) {
    var fruit1 = "apple";
    const fruit2 = "banana";
    let fruit3 = "kiwi";
  }
};