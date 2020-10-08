const getInputValues = () => {
    let postTitle = document.getElementById('titulo-post')
    let postAuthor = document.getElementById('autor-post')
    let postContent = document.getElementById('conteudo-post')
    let postImage = document.getElementById('imagem-post')

    if (  verifyInputValues(postTitle.value, postAuthor.value, postContent.value) && verifyImageLink(postImage.value) ){
        setPostObject(postTitle.value, postAuthor.value, postContent.value, postImage.value)
        postTitle.value = ""
        postAuthor.value = ""
        postContent.value = ""
        postImage.value = ""
    }
}

const verifyInputValues = (titleField, authorField, contentField) => {
    if ( titleField !== ""){
        if ( authorField !== ""){
            if ( contentField !== ""){
                return true
            }else {
                window.alert('Escreva um conteúdo para postar!')
            }
        }else {
            window.alert('Informe o nome do(a) autor(a)!')
        }
    }else {
        window.alert('Informe o título da postagem!')
    }
}

const verifyImageLink = (imageUrl) =>{
    if ( imageUrl.includes('http')){
        return true
    }else {
        window.alert('Insira um link para a imagem!')
    }
}

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
    postsContainer.innerHTML += `<h2>${post.title}</h2><p class="autor">${post.author}</p><p>${post.content}</p><img src=${post.image}>`
}