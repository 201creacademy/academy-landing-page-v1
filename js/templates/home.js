//category 
let btnCategory = document.getElementsByClassName("btn-category");
let foodItems = document.getElementsByClassName("food-item");

Array.from(btnCategory).forEach(btn => {
    btn.addEventListener("click", function () {

        let dataBtn = btn.dataset.item;

        Array.from(btnCategory).forEach(btn => {
            btn.classList.remove("active")
        });

        if (dataBtn == "all") {
            Array.from(foodItems).forEach(item => {

                item.classList.remove("hide")
            });
        } else {

            Array.from(foodItems).forEach(item => {
                let itemArray = item.dataset.item.split(" ");
                if (itemArray.includes(dataBtn)) item.classList.remove("hide")
                else item.classList.add("hide");
            });
        }
        btn.classList.add("active");
    })
})