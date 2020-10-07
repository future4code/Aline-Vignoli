const getInputValues = () => {
    let postTitle = document.getElementById('titulo-post')
    let postAuthor = document.getElementById('autor-post')
    let postContent = document.getElementById('conteudo-post')
    let postImage = document.getElementById('imagem-post')

    // verifyInputValues(postTitle.value, 'Preencha o título da postagem!')
    // verifyInputValues(postAuthor.value, 'Preencha o autor(a) da postagem!')
    // verifyInputValues(postContent.value, 'Escreva um conteúdo antes de postar!')

    setPostObject(postTitle.value, postAuthor.value, postContent.value, postImage.value)

    postTitle.value = ""
    postAuthor.value = ""
    postContent.value = ""
    postImage.value = ""
}

// const verifyInputValues = (field, message) => {
//     if (field !== ""){
//         return true
//     }else {
//         window.alert(message)
//     }
// }

const setPostObject = (title, author, content, image) => {
    let newPost = {
        title: title,
        author: author,
        content: content,
        image : image
    }

    let postArray = []
    postArray.push(newPost)
    listPosts(newPost)
}

const listPosts = (post) => {
    const postsContainer = document.getElementById('postagens')
    postsContainer.innerHTML += `<h2>${post.title}</h2><p>${post.author}</p><p>${post.content}</p><img src=${post.image}>`
}



