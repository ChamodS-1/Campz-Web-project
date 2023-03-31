let array=[];

let app = Vue.createApp({

  data: function(){
      return{
        userName:'',
        comment:'',
        length:'0',
        userLength:'99' 
      }
  },
  methods:{
  
    submit(){
      
      const unList = document.getElementById('ulList');

      let x= {
        name:this.userName,
        message:this.comment
       };


       array.push(x);
       unList.textContent='';
  for(const key of array){

    console.log(key.name);
    const list = document.createElement('li');

    list.innerHTML=  `  <div class="comments">
                        <h4><i>${key.name}'s comment</i></h4>
                        <h2>${key.message}</h2>
                        <div class="line"></div>
                        </div>                           `

    unList.append(list);

    }

    this.length=array.length;   
      },

      inputUser(){

        let x=this.comment;
        this.userLength=99-x.length;

      }
  
  }
  
  })
  
  app.mount('#app');
