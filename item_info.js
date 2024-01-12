function changeInputValue(input,item){
    if(input.value <0){
       input.value=0
    }
    item.quantity = input.value
    CalculateAndShowBill()
 }
 
 
 
 function ItemDetails(item){
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
 }
 
 
 
 function ItemContent(item){
    let content_div = main_interface.div(()=>ItemDetails(item))
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