console.log("ini")

let APIbtn = document.querySelector("#API-button")

APIbtn.addEventListener("click", getDropbox = () => {
    fetch("https://api.dropboxapi.com/2/files/get_metadata")
        .then((response) => response.json())
        .then((data) => console.log(data))
})