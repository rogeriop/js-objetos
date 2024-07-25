const read = require('readline-sync');
const color = require('@colors/colors');

module.exports = {

    pare(){
        console.log();
        const ordem = Number(read.question("Pressione a tecla <enter> para continuar... ou 9 + <enter> para parar: ")).toFixed(0);
        if(ordem==9){
            console.log('End-of-Job'.green);
            process.exit();
        } 
        console.clear();
    },

    ok() {
        console.log("ok");
    },
    
    pula() {
        console.log("");
    }

}
