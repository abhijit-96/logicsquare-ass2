
function Table() {
    let cafes, places, table = "", i = 1
    fetch("https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/cafes.json", {
    })
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            cafes = data.cafes
            cafes.forEach((cafe) => {
                fetch("https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/places.json", {
                })
                    .then((res) => {
                        return res.json()
                    })
                    .then(data => {
                        places = data.places
                        console.log(cafe.name)
                        places.forEach((place) => {
                            if (cafe.location_id === place.id) {
                                table += `<tr id="${place.id}">
                        <td class="column1">${i++}</td>
                        <td class="column2">${cafe.name}</td>
                        <td class="column3">${place.locality}</td>
                        <td class="column4">${place.postal_code}</td>
                        <td class="column5">${place.lat}</td>
                        <td class="column6">${place.long}</td>
                        </tr>`
                            }
                        })
                        // console.log(temp);
                        document.getElementById("cafe-data").innerHTML = table
                    })
            })
        })
}
Table()
let s = document.getElementById("search-wrapper");

s.addEventListener('keyup', (e) => {
    let j = 1,
         input= e.target.value.toLowerCase(),
        cafes = document.querySelectorAll("td.column2")

    cafes.forEach((cafe) => {
        if (cafe.innerHTML.toLowerCase().indexOf(input) === -1) {
            cafe.parentElement.style.display = "none"
        } else {
            cafe.parentElement.querySelector("td").innerHTML = j++
            cafe.parentElement.style.display = "table-row"
        }
    })
})
