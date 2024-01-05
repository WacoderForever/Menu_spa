

/**@type {Element404}*/
let main_interface;


function ShowItemOnInterface(item){
   let div = main_interface.div(()=>{
       let myimage =main_interface.create("img")
       myimage.set_prop("src",item["image"])
       myimage.set_prop('APosition','$(5%,5%,40%,40%)');
       myimage.inline_style({
         'fit-content':'contain'
       })


   })

   div.set_prop('APosition','$(10%,f34%,20%,30%)')
   div.inline_style({
      "background-color":"red"
   })
}






function start(){
   
   let root = main_interface.div(()=>{
      ITENS.forEach(ShowItemOnInterface)
   })

   root.set_prop('APosition','$(0%,0%,100%,100%)')



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