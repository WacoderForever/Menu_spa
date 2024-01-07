

/**@type {Element404}*/
let main_interface;
let bil_div;
let pop_div;

function ShowBill(){
   let space=''
   let state='Thank you for dining with us here is your bill\n'
   state+='Food         Quantity         Total\n'
   state+='_________________________________\n'
   let total=0
   for(let i=0;i<ITENS.length;i++){
      let item=ITENS[i]
      let item_total=item.price *item.quantity
      total+=item_total
      if(item.quantity>0){
      state+=item["name"] +'\t\t'+String(item.quantity)+"\t\t$"+String(item_total)+'\n'
      }
   }
   state+="_________________________\n"
   state+="Total Bill------------>"+"$"+String(total)
   return state
}

function calculate_and_show_bill(){
   bil_div.clear();
   let result  = 0;
   
   ITENS.forEach((value)=>{
      result += value.price * value.quantity;
   })


   let bil_paragraph = bil_div.p(result)        
   
   bil_paragraph.inline_style({
      'color':'orange',
      'font-size':'2em'
   })     


}

function changeInputValue(input,item){
   if(input.value <0){
      input.value=0
   }
   item.quantity = input.value
   calculate_and_show_bill()
}


function PopDiv(){
   let stat1=ShowBill()
   pop_div=main_interface.div(()=>{
      let button=main_interface.button("Check")
      button.set_prop("click",()=>{
         main_interface.p(stat1)
         
      })
      button.set_prop('APosition','$(50%,250%,90px,50px)')
      button.inline_style({
         'color':'orange',
         'font-size':'2em'
      })

   })
   let esc=main_interface.button("Exit")
   esc.set_prop("click",()=>pop_div.clear()) 
   let stat2=pop_div.p(stat1)
   stat2.inline_style({
      "color":"orange",
      "font-size":"2em"
   })


}


function PopUp(){
   let pop=main_interface.div(()=>{
      let button=main_interface.button("Confirm")
      button.set_prop("click",()=> PopDiv())
      button.set_prop('APosition','$(50%,150%,90px,50px)')
      button.inline_style({
         'color':'orange',
         'font-size':'1em'
      })
   })
   pop.inline_style({
      'background-color':'#333'
   })
}
function ItemContent(item){
   let content_div = main_interface.div(()=>{

      let title = item["name"] + "  $" + item["price"]
      let name = main_interface.p(title);

   
      let input = main_interface.input();
      input.inline_style({
         'width':'80%',
         'height':'20%',
         'background-color':'#333',
         'color':'orange',
         'font-size':'1em'
      })  

      input.set_prop('change',(input)=>{
         changeInputValue(input,item)
      })
   
   input.set_prop('value',0)
   input.set_prop('type','number')

})
 content_div.inline_style({
   'color':'orange',
   'font-size':'2em',
   'text-align':'center'
})

 content_div.set_prop('APosition','$(40%,3vh,60%,20vh)');
}

function SetImage(item){
   let myimage =main_interface.create("img")
       myimage.set_prop("src",item["image"])
       myimage.set_prop('APosition','$(3vh,3vh,20vh,20vh)');
       myimage.inline_style({
         'fit-content':'contain'
       })
}

function ShowItemOnInterface(item,index){
   let div = main_interface.div(()=>{
      main_interface.div(()=> SetImage(item))
      main_interface.div( ()=> ItemContent(item))
  
   })
 
   div.inline_style({
      'fit-content':'contain',
      'border': '1px solid orange' 
   })

   let break_line = index % 3 == 0  

   let same_line = !break_line
   if(same_line){
      div.set_prop('APosition','$(f33%,+0%,31%,31%)')
   }

   if(break_line){
      div.set_prop('APosition','$(0%,f33%,31%,31%)')
   }
 
}

function Nav(){
   bil_div = main_interface.div();

   calculate_and_show_bill()

   bil_div.set_prop('APosition','$(90%,0%,100%,10%)')


}

function createRootContent(){
   let sub = main_interface.div(()=>{
         
      let nav = main_interface.nav(()=>Nav())
      nav.inline_style({
         'background-color':'#333',
      })

      nav.set_prop('APosition','$(0%,0%,100%,10%)')


      let my_content = main_interface.div(()=>{
         for(let i = 0; i < ITENS.length; i++){
            ShowItemOnInterface(ITENS[i],i)
         } 
         PopUp()       
      })
      my_content.set_prop('APosition','$(0%,15%,100%,85%)')
      
     

   })
   sub.set_prop('APosition','$(0%,0%,100vw,100vh)')
}

function start(){
   
   let root = main_interface.div(createRootContent)

   
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