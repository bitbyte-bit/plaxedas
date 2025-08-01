
document.addEventListener('DOMContentLoaded',()=>{
    setTimeout(() => {
        sign();
    }, 2);function sign(){
        
    const overlay=document.createElement('div');
    overlay.className='sign-overlay';

    const signModal=document.createElement('fieldset');
    signModal.className='sign-modal';

    const legend=document.createElement('legend');
    legend.className='legend';
    legend.innerText='click here to exit login.';
    signModal.appendChild(legend)
    const signDetails=document.createElement('form');
    signDetails.id='MyForm';
    signDetails.name='Form';
    signDetails.action='log.php';
    signDetails.className='form';
//sign up fields
const signHeader=document.createElement('h2');
signHeader.className='pop-headings';
signHeader.innerText='login';
//field 1
    const detail1=document.createElement('input');
    detail1.type='email';
    detail1.placeholder='email/phone';
    detail1.autocomplete=true;
    detail1.required=true;
    detail1.className='inputs';
//field 1
const detail2=document.createElement('input');
detail2.type='password';
detail2.name='password';
detail2.className='inputs';
detail2.placeholder='password';
detail2.autocomplete=true;
detail2.required=true;
//submit btn
const signBtn=document.createElement('input');
signBtn.className='buttons';
signBtn.type='submit';
signBtn.value='login';

const validator=document.createElement('div');
validator.className='validator';
validator.innerText='';
signDetails.appendChild(detail1)
signDetails.appendChild(detail2)
signDetails.appendChild(validator)
signDetails.appendChild(signBtn)
    
    signModal.appendChild(signHeader)
    signModal.appendChild(signDetails)

    //signin display button
    const CallSignIn=document.createElement('p');
    CallSignIn.className='paragraphs';
    CallSignIn.innerText="Didn't have account?";
    const callBtn=document.createElement('button');
    callBtn.className='call-buttons';
    callBtn.innerText='Create account';
    //call sign action
    callBtn.addEventListener('click',()=>{
        signModal.appendChild(acc)
    });

    const CallSignModal=document.createElement('div');
    CallSignModal.className='call-sign-modal';
    CallSignModal.appendChild(CallSignIn)
    CallSignModal.appendChild(callBtn)
    signModal.appendChild(CallSignModal)
    overlay.appendChild(signModal)
    document.body.appendChild(overlay)
    
    setTimeout(() => {
        emptyLegend();
    }, 3000);function emptyLegend(){
        legend.style.width='50px';
        legend.innerText='';
    }
    setInterval(() => {
        legendLight();
    }, 1000);function legendLight(){
        legend.style.borderBottomColor='purple';
    }
    setInterval(() => {
        legendLightOff();
    }, 2500);function legendLightOff(){
        legend.style.borderBottomColor='';
    }
    legend.addEventListener('click',()=>{
        overlay.remove();
    });

    //signup
    const acc=document.createElement('form');
    acc.action='#'

    const signupModal=document.createElement('fieldset');
    signupModal.className='account';

    const legend2=document.createElement('legend');
    legend2.className='sign-up';
    legend2.innerText='signup';
    signupModal.appendChild(legend2)

    const name=document.createElement('input');
    name.className='inputs';
    name.type='text';
    name.placeholder='full name';
    name.autocomplete=true;
    name.required=true;

    const email=document.createElement('input');
    email.className='inputs';
    email.placeholder='email';
    email.type='email';
    email.autocomplete=true;
    email.required=true;

    const phone=document.createElement('input');
    phone.className='inputs';
    phone.placeholder='phone';
    phone.type='number';
    phone.autocomplete=true;
    phone.required=true;

    const pass1=document.createElement('input');
    pass1.className='inputs';
    pass1.placeholder='create password';
    pass1.required=true;
    pass1.maxLength=8;
    pass1.type='text';

    const pass2=document.createElement('input');
    pass2.className='inputs';
    pass2.placeholder='confirm password';
    pass2.maxLength=8;
    pass2.required=true;
    pass2.type='text';

    const btn=document.createElement('button');
    btn.innerText='signup';
    btn.className='buttons';
    btn.type='submit';

    const terms=document.createElement('p');
    terms.innerText='by signing in,you accept to the terms and conditions of citystore';
    terms.className='paragraphs';

    signupModal.appendChild(name)
    signupModal.appendChild(email)
    signupModal.appendChild(phone)
    signupModal.appendChild(pass1)
    signupModal.appendChild(pass2)
    signupModal.appendChild(terms)

    const signPara=document.createElement('p');
    signPara.className='paragraphs-spaced';
    
    const closeSign=document.createElement('span');
    closeSign.className='material-icons';
    closeSign.innerText='close';
    closeSign.id='close';

    closeSign.addEventListener('click',()=>{
        acc.remove();
    })
    signPara.appendChild(btn)
    signPara.appendChild(closeSign)
    signupModal.appendChild(signPara)
    acc.appendChild(signupModal)
    } 
});

