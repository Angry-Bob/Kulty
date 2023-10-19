const submit = document.querySelector("#submitBtn")
const userName = document.querySelector("#userName")
const email = document.querySelector("#email")
const password = document.querySelector("#password")


// submit.addEventListener('click', async (e) => {
//     e.preventDefault()
//     let response = await axios.get(`http://localhost:3001/users`)
//     console.log(response.data)
// })

// const posts = async () => {
//     let response = await axios.get(`http://localhost:3001/posts`)
//     console.log(response)
//     const postBox = document.getElementById('#postDisplay')

//     response.data.forEach(element => {
        
//     });
    
// }
// posts()



document.addEventListener("DOMContentLoaded", function () {
    const base_Url = 'http://localhost:3001/posts'
    const postsContent = document.getElementById('postDisplay')

    async function getAllPosts() {
        try {
            const response = await axios.get(`${base_Url}`)
            console.log(response)
           if (response.data.length > 0) {
                postsContent.innerHTML = ''
                response.data.forEach(posts  => {
                    postsContent.innerHTML +=
                        `
                        <h4>${posts.author.user_name}</h4>
                        <p><b>Title:</b> ${posts.title}</p>
                        <p>${posts.text_content}</p>
                        <button id="delete">delete</button>
                        <hr>
                        `
                });
            }else {
                const postsContent = document.getElementById('postDisplay')
                postsContent.innerHTML = "No posts found"
            }
        } catch (error) {
            const postsContent = document.getElementById('postDisplay')
            console.error("Error:", error);
            postsContent.innerHTML = "Error: Item was not found in our database! Please re-enter a valid item.";
    }
}
getAllPosts()
})























