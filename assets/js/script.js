function get(){
    navigator.clipboard.writeText('http://localhost:8080/api/news');
    alert('Link Copied to Clipboard..!')
}

function getSpecific(){
    navigator.clipboard.writeText('http://localhost:8080/api/news/6227314390cc5e391d771c05');
    alert('Sample Link Copied to Clipboard..!')
}