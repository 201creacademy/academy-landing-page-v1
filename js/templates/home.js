//category 
let btnCategory = document.getElementsByClassName("btn-category");
let courseItems = document.getElementsByClassName("course-item");

Array.from(btnCategory).forEach(btn => {
    btn.addEventListener("click", function () {

        let dataBtn = btn.dataset.item;

        Array.from(btnCategory).forEach(btn => {
            btn.classList.remove("active")
        });

        if (dataBtn == "all") {
            Array.from(courseItems).forEach(item => {

                item.classList.remove("hide")
            });
        } else {

            Array.from(courseItems).forEach(item => {
                let itemArray = item.dataset.item.split(" ");
                if (itemArray.includes(dataBtn)) item.classList.remove("hide")
                else item.classList.add("hide");
            });
        }
        btn.classList.add("active");
    })
})