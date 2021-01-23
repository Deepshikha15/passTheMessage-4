(function() {
    
    const form = document.querySelector('#message-form')
    console.log("form",form)
    form.addEventListener('submit', function(e){
        e.preventDefault()
        const inputText = document.querySelector('#inputText')
        const feedback = document.querySelector('.feedback')
        const messageContent = document.querySelector('.messageContent')
    
        if (inputText.value === ''){
            console.log("inputText.value",inputText.value);
            feedback.classList.add('show')
            setTimeout(function(){
            feedback.classList.remove('show')
            }, 2000)
        } else {
            messageContent.textContent = inputText.value
            inputText.value = ''
        }
    })
    })()