const global = 0;
console.log(global);

function my_funtion() {
    const number_one = 1;
    console.log(global, number_one);

    function my_second_funtion() {
        const number_two = 2;
        console.log(global, number_one, number_two);

        function my_thrid_funtion() {
            const number_three = 3;
            console.log(global, number_one, number_two, number_three)
        }

        return my_thrid_funtion();
    }

    return my_second_funtion();
}

my_funtion();