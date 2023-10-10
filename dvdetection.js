chrome.contextMenus.create({
    id: 'textdvdetect',
    title: 'Detect Domestic Violence',
    contexts:["selection"]
  });
chrome.contextMenus.onClicked.addListener(function(selectedtextbyclick,tab){

 chrome.tabs.query({active:true,currentWindow:true},function(tabs){
  const msg = selectedtextbyclick.selectionText;
  chrome.tabs.sendMessage(tabs[0].id,msg);
 });

});