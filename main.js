

/**@type {Element404}*/
let main_interface;


function ShowItemOnInterface(item){
    main_interface.div(()=>{
       let myimage =main_interface.create("img")
       myimage.set_prop("src",item["image"])
      // myimage.set_prop("APosition","$(100px,+100px,100px,100px)")
    })
}

function start(){
   ITENS.forEach(ShowItemOnInterface)


}


function main(){
   main_interface = createElement404(start,document.body);
      main_interface.render();
  // start()

}
window.addEventListener('load',main);