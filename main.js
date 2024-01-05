

/**@type {Element404}*/
let main_interface;


function ShowItemOnInterface(item,index){
   let div = main_interface.div(()=>{
       let myimage =main_interface.create("img")
       myimage.set_prop("src",item["image"])
       myimage.set_prop('APosition','$(5%,5%,40%,40%)');
       myimage.inline_style({
         'fit-content':'contain'
       })
      

   })
   let break_line = index % 3 == 0   
   div.inline_style({
      "background-color":"red"
   })
   let same_line = !break_line
   if(same_line){
      div.set_prop('APosition','$(f33%,+0%,31%,31%)')
   }

   if(break_line){
      div.set_prop('APosition','$(0%,f33%,31%,31%)')
   }

}






function start(){
   
   let root = main_interface.div(()=>{

      let sub = main_interface.div(()=>{
         for(let i = 0; i < ITENS.length; i++){
            ShowItemOnInterface(ITENS[i],i)
         }
      })
      sub.set_prop('APosition','$(0%,0%,100vw,100vh)')
   })


   
   root.inline_style({
      'background-color':'black'
   })

   root.set_prop('APosition','$(0%,0%,100vw,1000vh)')


   

}




function main(){

   ITENS.forEach((value)=>{
      value.quantity=0
   })
   main_interface = createElement404(start,document.body);
      main_interface.render();
  // start()

}


window.addEventListener('load',main);