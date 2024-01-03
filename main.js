

/**@type {Element404}*/
let main_interface;
let chart = [];
function start(){

    for(let char_item of chart){

        let item_div = main_interface.div(()=>{


            main_interface.select(()=>{

                for(let id in ITENS){
                    let current = ITENS[id];
                    let current_option = main_interface.option(current.name);
                    current_option.set_prop('value',id);
                }
            });
            main_interface.br();

        });
        
        item_div.inline_style({
            'background-color':'rgb(192,192,192)',
            'text-align':'center'
        });
        item_div.set_prop('APosition','$(5vw,+22vh,20vw,20vh)');
    }



    let my_button = main_interface.button("Add");
    my_button.set_prop('render_click',()=>{
          const DEFAULT_CHART_ITEM = {
              quantity:0
          }
          chart.unshift(DEFAULT_CHART_ITEM);
    });
    my_button.set_prop('APosition','$(+20vw,+22vh,5vw,5vh)');
}
function main(){
    main_interface = createElement404(start,document.body);
    main_interface.render();

}
window.addEventListener('load',main);