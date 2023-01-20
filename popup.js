const copybtn = document.querySelector("button");
  
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

    // since only one tab should be active and in the current window at once
    // the return variable should only have one entry
    var activeTab = tabs[0];
    var activeTabId = "&lt;uri content-type=&quot;orcid&quot;&gt;" + activeTab.url + "&lt;/uri&gt;";
    var activeTabOrcid = '<uri content-type="orcid">' + activeTab.url + '</uri>';
    //document.querySelector("#orcid").value = activeTabId;
    document.getElementById("orcid").value = activeTabOrcid;
   
  })
 //
 function myFunction(e) {
    // Get the text field
    var copyText = document.getElementById("orcid");
  
    // Select the text field
    copyText.focus(); 
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    
  }

  /* call the function on click */
  copybtn.onclick = myFunction;

  