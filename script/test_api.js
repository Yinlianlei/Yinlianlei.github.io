 function sendmsg(){
    console.log("????????");

    var Hexo = require('hexo');

    var hexo = new Hexo(process.cwd(), {});

    console.log(hexo.route.list());
}