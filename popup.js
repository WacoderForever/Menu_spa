function create_pop_up_button(){
    let open_trigger = main_interface.button("Confirm")
    open_trigger.outline_style({
        'color':'white',
        'background-color':'orange',
        'font-size':'2em',
        'border':'0',
        'padding':'0',
        hover:{
          state:'hover',
          'background-color':'white',
          color:'orange'
        }
         
    })
    open_trigger.set_prop('APosition','$(5%,5%,10%,90%)')
    open_trigger.set_prop('click',()=>{
       open_pop_pup()
    })
    
 }
 
 
 
 function open_pop_pup(){
 
    if(!CalculateResult()){
       return
    }
    pop_div.clear();
 
    ClosePopup()
 
    let pop_div_content = pop_div.div(()=>{
          ShowBill()
    });
    
    pop_div_content.set_prop('APosition','$(25%,20vh,50%,60vh)')
 
    pop_div_content.inline_style({
       'background-color':'rgb(247, 207, 126)',
       'z-index':'2',
       'text-align':'center',
 
    })
 
 }
 
 
 
 function ClosePopup(){
    let out_click_div = pop_div.div();
 
    out_click_div.set_prop('APosition','$(0%,0%,100%,100%)')
    out_click_div.set_prop('click',()=>{
       pop_div.clear();
    })
 
    out_click_div.inline_style({
       'background-color':'black',
       'opacity':'0.9',
       'z-index':'1'
    })
 
 }
 
 
 
 function pop_table(){
    let table = pop_div.table(()=>{
       
      let header=Header()
      ItemsGot()
    })
 
    return table
 }


 function Header(){
   let header = pop_div.tr(()=>{
      pop_div.th("Item")
      pop_div.th("Quantity")
      pop_div.th("Price")

   })

   return header
 }


 function ItemsGot(){
   ITENS.forEach((value)=>{
      if(value.quantity<=0){
         return
      }
      let row = pop_div.tr(()=>{
         pop_div.td(value["name"])
         pop_div.td(value.quantity)
         pop_div.td(value.price * value.quantity)
      })
   })
 }