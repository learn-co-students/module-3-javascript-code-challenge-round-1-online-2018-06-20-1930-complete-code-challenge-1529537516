document.addEventListener('DOMContentLoaded', function() {

  const imageId = 18 //Enter your assigned imageId here

  const imageURL = `https://randopic.herokuapp.com/images/18`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  Image.getImage();
  Image.attachLikeListener();
  
})


