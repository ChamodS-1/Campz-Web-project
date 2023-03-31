const signUp = document.getElementById('signup');
const login = document.getElementById('login');
const form = document.querySelector('.form');
const form1 = document.querySelector('.form1');
const balckScreen = document.querySelector('.backScreen');

const NoAccount = document.getElementById('no-account');

const formData1 = document.getElementById('signUpForm');
const formData2 = document.getElementById('loginForm');

const uList = document.querySelector('ul');

signUp.addEventListener('click',popUp);
login.addEventListener('click',popUp2);
formData1.addEventListener('submit',getInputs);
formData2.addEventListener('submit',getInputs2);


NoAccount.addEventListener('click',noaccount);

let x ={
    name:'',
    message:''

};

function popUp(){
   
    form.style.display='block';
    balckScreen.style.display='block';
}

function popUp2(){
    
    form1.style.display='block';
    balckScreen.style.display='block';
}

function getInputs(event){


    event.preventDefault();
    const formData = new FormData(event.target);
   const enteredValue = formData.get('user-name');
   const enteredValue1 = formData.get('user-password');


  x.name=enteredValue;
  x.message=enteredValue1;

    form.style.display='none';

    form1.style.display='block';

};

function getInputs2(event){


    event.preventDefault();
    const formData = new FormData(event.target);
   const enteredValue2 = formData.get('user-name1');
   const enteredValue3 = formData.get('user-password');


    if(x.name===enteredValue2 && x.message===enteredValue3){
        console.log(enteredValue2,enteredValue3);
        form1.style.display='none';
        balckScreen.style.display='none';

        let newList =document.createElement('li');
        newList.innerHTML=` <a href="" id="userProtocol">Hi ${x.name}</a>

                                                 `

        uList.append(newList);
        signUp.style.display='none';

        login.style.display='none';

    }else{
        alert('Incorrent User Name or password');
    }

};

function noaccount(){

    form.style.display='block';
    form1.style.display='none';
}

