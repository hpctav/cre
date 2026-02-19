const editor = document.getElementById('editor');
const btnOpen = document.getElementById('btnOpen');
const btnSave = document.getElementById('btnSave');

// Xử lý Mở File
btnOpen.onclick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.txt,.js,.html,.css';
    input.onchange = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = event => {
            editor.value = event.target.result;
        };
        reader.readAsText(file);
    };
    input.click();
};

// Xử lý Lưu File
btnSave.onclick = () => {
    const text = editor.value;
    const blob = new Blob([text], { type: 'text/plain' });
    const anchor = document.createElement('a');
    
    anchor.download = "note_" + Date.now() + ".txt";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target = "_blank";
    anchor.style.display = "none"; 
    
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
};
