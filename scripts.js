function generateNumber() {

    const min = Math.ceil (document.querySelector('.inputesq').value)
    const max = Math.floor (document.querySelector('.inputdir').value)
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    alert(result)
}

