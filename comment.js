const button = document.querySelector('form');
const unList = document.getElementById('ulList');
const textArea = document.querySelector('textarea');
const span = document.getElementById('number');
const span2 = document.getElementById('number2');

button.addEventListener('submit',getInputs);
textArea.addEventListener('input',getText);

let array=[];

function getInputs(event){


    event.preventDefault();
    const formData = new FormData(event.target);
   const enteredValue = formData.get('user-name');
   const enteredValue1 = formData.get('user-Text');
  // console.log(enteredValue,enteredValue1);

   let x= {
    name:enteredValue,
    message:enteredValue1
   };


  //x.name=enteredValue;
  //x.message=enteredValue1;


  array.push(x);

  unList.textContent='';

  for(const key of array){

    const list = document.createElement('li');
    list.innerHTML=`    <div class="comments">
                         <h4><i>${key.name}'s comment</i></h4>
                        <h2>${key.message}</h2>
                        <div class="line"></div>
                        </div>                                   `

    unList.append(list);
    //console.log(key.name,key.message);

  }


 // console.log(array);
  span2.textContent=array.length;
}

function getText(event){

let value =event.target.value;
let number = 99-value.length;

span.textContent=number;

}