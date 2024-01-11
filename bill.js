function callc_result(){
    let result  = 0;
    
    ITENS.forEach((value)=>{
       result += value.price * value.quantity;
    })
    return result
 }
 
 
 function calculate_and_show_bill(){
    bil_div.clear();
 
    let result  = callc_result();
 
 
    let bil_paragraph = bil_div.p(result)        
    bil_paragraph.inline_style({
       'color':'orange',
       'font-size':'2em'
    })     
 
 
 }

 
function ShowBill(){
 
    let table=pop_table()
    
    //define th lines 
    table.inline_style({
       'border-collapse':'collapse',
       'width':'100%',
       'border':'1px solid orange'
    })
 
    table.set_prop('APosition','$(0%,10%,100%,00%)')
 
 
    let total = pop_div.h4(`Total: $${callc_result()}`);
    total.set_prop('APosition','$(0%,70%,100%,10%)')
 
 }