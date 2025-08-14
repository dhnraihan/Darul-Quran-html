const isPhoneValid = phone => {

    let regex = new RegExp(`^(\\+?)([0-9] ?){9,20}$`);

    return regex.test(phone);

} 

const isEmailValid = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const formLoading = form => {

    [...form].forEach(elm => {
        elm.setAttribute('disabled', 1)
        if(elm.type ==='submit'){
            elm.innerHTML  = `Loading...`
        }
    });
}

const formLoadingStop = (form, txt) => {
 
    [...form].forEach(elm => {
        elm.removeAttribute('disabled')
        if(elm.type ==='submit'){
            elm.innerHTML  = txt
        }
    });
}

const clearForm = form => {
    [...form].forEach(elm => {
        if(elm.type !== 'checkbox'){
            elm.value = "";
        }
        
    });
}