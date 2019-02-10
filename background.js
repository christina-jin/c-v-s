chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    "id": "cvs",
    "title": "C+V+S",
    "contexts": ["all"]
  });
})


function createData(url, notes) {
  return {
    url,
    notes: [notes]
  }
}

let data = [];
chrome.contextMenus.onClicked.addListener(
  function (clickData) {
    if (clickData.menuItemId === 'cvs' && clickData.selectionText) {
      if (!data.length) {
        data.push(new createData(clickData.pageUrl, clickData.selectionText))
      } else {
        let urlIdx;
        let urlFound = data.find((obj, index)  => {
          urlIdx = index;
          return obj.url === clickData.pageUrl
        })
        if (urlFound) {
          data[urlIdx].notes.push(clickData.selectionText)
        } else {
          data.push(new createData(clickData.pageUrl, clickData.selectionText))
        }
      }
      chrome.storage.local.set({"data": data});
    }
  }
)

