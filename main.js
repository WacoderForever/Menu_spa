

/**@type {Element404}*/
let main_interface;
let bil_paragraph;


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
      'fit-content':'contain',
      'border': '1px solid orange' 
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
         
         let nav = main_interface.nav(()=>{

            let bil_div = main_interface.div(()=>{
               bil_paragraph = main_interface.p('0.00')            
            })

            bil_div.inline_style({
               'color':'orange',
               'font-size':'2em'
            })    

            bil_div.set_prop('APosition','$(90%,0%,100%,10%)')


         })
         nav.inline_style({
            'background-color':'#333',
         })

         nav.set_prop('APosition','$(0%,0%,100%,10%)')


         let my_content = main_interface.div(()=>{
            for(let i = 0; i < ITENS.length; i++){
               ShowItemOnInterface(ITENS[i],i)
            }         
         })
         my_content.set_prop('APosition','$(0%,15%,100%,85%)')

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