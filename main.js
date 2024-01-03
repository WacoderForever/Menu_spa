

/**@type {Element404}*/
let main_interface;
let chart = [];
function start(){

    for(let char_item of chart){

        let item_div = main_interface.div(()=>{



            let select = main_interface.select(()=>{

                for(let id in ITENS){
                    let current = ITENS[id];
                    let current_option = main_interface.option(current.name);
                    if(current === char_item.chosed){
                        current_option.set_prop('selected',true);
                    }

                    current_option.set_prop('value',id);
                }
            });

            select.set_prop('APosition','$(70%,5%,15%,25%)')
            select.set_prop('render_change',(selected)=>{
                char_item.chosed = ITENS[selected.value];
            })

            if(char_item.chosed){
                let my_image = main_interface.create('img');
                my_image.set_prop('APosition','$(5%,5%,50%,90%)');
                my_image.set_prop('src',char_item.chosed.picture);


            }

        });

        item_div.inline_style({
            'background-color':'rgb(192,192,192)',
        });
        item_div.set_prop('APosition','$(5vw,+32vh,30vw,30vh)');
    }



    let my_button = main_interface.button("Add");
    my_button.set_prop('render_click',()=>{
          const DEFAULT_CHART_ITEM = {
              quantity:0,
              chosed:undefined
          }
          chart.unshift(DEFAULT_CHART_ITEM);
    });
    my_button.set_prop('APosition','$(+20vw,+32vh,5vw,5vh)');
}
function main(){
    main_interface = createElement404(start,document.body);
    main_interface.render();

}
window.addEventListener('load',main);