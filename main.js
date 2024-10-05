// let blv = new XMLHttpRequest()
// let tbody = document.querySelector("tbody")
// blv.open("GET", "https://jsonplaceholder.typicode.com/posts")
// blv.send()

// blv.addEventListener("readystatechange", function () {
//     console.log(blv.readyState);
//     if (blv.readyState == 4) {
//         let mydata = JSON.parse(blv.response)
//         console.log("hello", mydata);
//         showData(mydata)
//     }
// })

// function showData(data) {
//     let cartona = ''
//     for (let i = 0; i < data.length; i++) {
//         cartona += `
//         <tr>
//                 <td>${data[i].id}</td>
//                 <td>${data[i].title}</td>
//                 <td>${data[i].body}</td>
//             </tr>
//         `
//     }
//     tbody.innerHTML = cartona
// }
let http = new XMLHttpRequest()
let row = document.querySelector(".row")
let selctedfood = document.querySelector("select")
selctedfood.addEventListener("change",function(){
    getdata(this.value)
})
getdata(this.value ='')
getdata('pizza')
function getdata(data){
    http.open("GET",`https://forkify-api.herokuapp.com/api/search?q=${data}`)
    http.send()
    http.addEventListener("readystatechange", function () {
        if (this.readyState == 4) {
            let alldata = JSON.parse(this.response)
            // console.log(alldata.recipes);
            showData(alldata.recipes);
        }
    })
}
function showData(data) {
    let cartona = ''
    for (let i = 0; i < data.length; i++) {
        cartona += `
            <div class="col-md-4">
            <img class="w-100 mb-2" src="${data[i].image_url}" alt="">
            <P> <b>title: </b>${data[i].title}</P>
            <P> <b>ID: </b>${data[i].recipe_id}</P>
            <P> <b>Publisher: </b>${data[i].publisher}</P>

        </div>  
            `
    }
    row.innerHTML = cartona
}