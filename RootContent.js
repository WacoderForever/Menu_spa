function CreateRootContent(){

    let sub=ShowPageContent()
 
    sub.set_prop('APosition','$(0%,0%,100vw,100vh)')
    
    pop_div = main_interface.div();         
 
 }



 function ShowPageContent(){
   let sub = main_interface.div(()=>{
      let nav = main_interface.nav(()=>Nav())
      nav.inline_style({
         'background-color':'#333',
      })

      nav.set_prop('APosition','$(0%,0%,100%,10%)')
  

      let my_content=ShowItemContent()
      my_content.set_prop('APosition','$(0%,15%,100%,85%)')
   })
   return sub;
 }



 function ShowItemContent(){
   let my_content = main_interface.div(()=>{
      for(let i = 0; i < ITENS.length; i++){
         ShowItemOnInterface(ITENS[i],i)
      } 

   })
   return my_content
 }