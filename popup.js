
document.body.onload = function() {
  chrome.storage.local.get("data", function(items) {
    if (items.data && items.data.length > 0) {
      items.data.map(item => {
        let url = document.createElement('ul')
        url.setAttribute("class", "source")
        url.innerHTML = item.url;
        item.notes.map(note => {
        let noteElement = document.createElement('li')
        noteElement.setAttribute("class", "notes")
        noteElement.innerHTML = note;
        url.appendChild(noteElement);
      })
      document.getElementById("data").appendChild(url)
    })
    }
  });
}



// function save () {
//   console.log('clicking')
//   chrome.storage.local.get(null, function(items) {
//     let result = JSON.stringify(items);
//     let url = 'data:application/csv;base64,' + btoa(result);
//     chrome.downloads.download({
//       url:url,
//       filename:'cvs.json'
//     });
//     chrome.downloads.showDefaultFolder();
//   })
// }

function displaySource () {
  console.log('hello')
  let uls = document.getElementsByClassName("source");
  console.log(uls)
  Array.from(uls).forEach(x => {
    if (x.style.visibility === "hidden") {
      x.style.visibility = "visible";
    } else {
      x.style.visibility = "hidden"
    }
  })
}

function clear () {
  chrome.storage.local.remove(["data"], function () {
      window.close()
    })
}

// document.getElementById('save').addEventListener("click", save);
document.getElementById('sourceBtn').addEventListener("click", displaySource);
document.getElementById('clear').addEventListener("click", clear);