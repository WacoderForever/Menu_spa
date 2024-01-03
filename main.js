

/**@type {Element404}*/
let main_interface;
let chart = [];
function start(){
    let main_div = main_interface.div(()=>{
        let first = true;
        for(let char_item of chart){

            let item_div = main_interface.div(()=>{



                let select = main_interface.select(()=>{

                    let current_option = main_interface.option("chose one");

                    for(let id in ITENS){
                        let current = ITENS[id];
                        let current_option = main_interface.option(current.name);
                        if(current === char_item.chosed){
                            current_option.set_prop('selected',true);
                        }

                        current_option.set_prop('value',id);
                    }
                });



                select.set_prop('APosition','$(80%,5%,15%,25%)')
                select.set_prop('render_change',(selected)=>{
                    char_item.chosed = ITENS[selected.value];
                })

                if(char_item.chosed){
                    let my_image = main_interface.create('img');
                    my_image.set_prop('APosition','$(5%,10%,30vh,30vh)');
                    my_image.set_prop('src',char_item.chosed.picture);

                    let quantity_div  = main_interface.div(()=>{
                        main_interface.p('Quantity',{inline_style:{'color':'white'}});

                        let quantity = main_interface.input();
                        quantity.set_prop('type','number');
                        quantity.set_prop('value',char_item.quantity);
                        quantity.set_prop('render_change',()=>{
                            char_item.quantity+=1;
                            char_item.total_price = char_item.chosed.unity_value * char_item.quantity;
                        })


                        main_interface.p(`price : ${char_item.total_price}`)
                    })

                    quantity_div.set_prop("APosition","$(35%,15%,70%,70%)");


                }

            });

            item_div.inline_style({
                'background-color':'rgb(192,192,192)',
            });

            if(first){
                item_div.set_prop('APosition','$(5vw,10vh,50vw,40vh)');
                first = false;
            }

            else{
                item_div.set_prop('APosition','$(5vw,+42vh,50vw,40vh)');
            }

        }



        let my_button = main_interface.button("Add");
        my_button.set_prop('render_click',()=>{
            const DEFAULT_CHART_ITEM = {
                quantity:0,
                total_price:0,
                chosed:undefined
            }
            chart.push(DEFAULT_CHART_ITEM);
        });
        my_button.set_prop('APosition','$(+55vw,+10vh,5vw,5vh)');


        let result = 0;

        for(let item of chart){
            result+=item.total_price;
        }

        let result_h4 = main_interface.h1(`total bil is ${result}`);
        result_h4.set_prop('APosition','$(70vw,20vh,20vw,5vh)');



    })




}
function main(){
    main_interface = createElement404(start,document.body);
    main_interface.render();

}
window.addEventListener('load',main);