document.addEventListener("contextmenu", function (e){
  let selectedText = window.getSelection().toString()
  let range = window.getSelection().getRangeAt(0)
  if (selectedText) {
    console.log('yay!')
    let newNode = document.createElement("span");
    newNode.setAttribute("style", "background-color: yellow; display: inline;");
    range.surroundContents(newNode);
  }
})