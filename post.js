
const loadPost = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}

const displayPost = (posts) =>{
    const postContainer = document.getElementById('posts-container');
    for(const post of posts){
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
            <h4>User- ${post.id}</h4>
            <h2>Post: ${post.title} </h2>
            <p>Post Description: ${post.body} </p>
        `
        postContainer.appendChild(div)
    }
}
loadPost()