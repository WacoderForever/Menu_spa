

/**@type {Element404}*/
let main_interface;


function ShowItemOnInterface(item){
    console.log(item)
}


function start(){
   ITENS.forEach(["q",1,2,3,4,5,5],ShowItemOnInterface)



}


function main(){
 //   main_interface = createElement404(start,document.body);
  //  main_interface.render();
  start()

}
window.addEventListener('load',main);