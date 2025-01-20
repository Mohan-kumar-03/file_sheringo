const fileInput = document.getElementById('file-input');
const progressBar = document.getElementById('progress');
const sendsec  = document.getElementById("send");
function uploadFile(event) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'upload.php');
    xhr.upload.addEventListener('progress', e => {
        if (e.lengthComputable) {

            const percent = (e.loaded / e.total) * 100;
            progressBar.style.width = `${percent}%`;
        }
    });
    
    xhr.send(formData);
}
function shows(){
    document.querySelector('.send').classList.add('clk-send');
    console.log("clicked");
}
function clssend(){
    document.querySelector('.send').classList.remove('clk-send');
    console.log("clicked");

}