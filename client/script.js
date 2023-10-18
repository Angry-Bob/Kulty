const submit = document.querySelector("#submitBtn")
const userName = document.querySelector("#userName")
const email = document.querySelector("#email")
const password = document.querySelector("#password")


submit.addEventListener('click', async () => {
    let response = await axios.get(`http://localhost:3001/users`)
    console.log(response.data)
})
