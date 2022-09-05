let urlText = document.getElementById('textVid');
let urlBtn = document.getElementById('urlVid');
let resultVid = document.getElementById('resultVid');

urlBtn.addEventListener('click', () =>{

    let cleanUrl = urlText.value.substr(93,26)

    resultVid.innerHTML = cleanUrl

})