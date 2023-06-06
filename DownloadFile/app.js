const fileInput = document.querySelector('input'),
downloadBtn = document.querySelector('button');

downloadBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    downloadBtn.innerText = 'Downloading File...'
    fetchFile(fileInput.value)
})

function fetchFile(url){
    fetch(url)
    .then((item) => item.blob()).then((data) =>{
        console.log(data);
        let tempURl = URL.createObjectURL(data)
        let aTag = document.createElement('a')
        aTag.href = tempURl
        // aTag.download = url.replace(/^.*[\\\/]/, '')
        aTag.download = 'download'
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
        // URL.revokeObjectURL(tempURl)
        downloadBtn.innerText = 'Download File'
    })
    .catch(() =>{
        downloadBtn.innerText = 'Download File'
        alert('Failed to download file!')
    })
}
