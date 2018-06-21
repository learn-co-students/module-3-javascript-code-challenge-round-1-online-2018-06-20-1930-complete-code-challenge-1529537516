const Image = function(image){
 this.id = image.id,
 this.url = image.url
 this.name = image.name,
 this.comments = image.comments,
 this.likes = image.like_count
}

const Comment = function(comment){
 this.id = comment.id,
 this.content = comment.content,
 this.image_id = comment.image_id
}


Image.getImage = () => {
 $.get('https://randopic.herokuapp.com/images/18', function(response){
  const image = new Image(response)
  
  for(let i = 0; i < response.comments.length; i++){
   let newComment = new Comment(response.comments[i])
   $("#comments").append(`<li> ${newComment.content} </li>`)
  }
  
  $("#image").attr("src", image.url)
  $("#name").append(image.name)
  $("#likes")[0].innerText = image.likes
 })
}

Image.attachLikeListener = function(){
  $("#like_button").click(function(){
    let num = parseInt($("#likes")[0].innerText)
    $("#likes")[0].innerText = num++;
  })
}

Image.getImage();
