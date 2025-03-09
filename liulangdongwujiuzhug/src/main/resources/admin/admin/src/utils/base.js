const base = {
    get() {
        return {
            url : "http://localhost:8080/liulangdongwujiuzhug/",
            name: "liulangdongwujiuzhug",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/liulangdongwujiuzhug/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "流浪动物救助网站"
        } 
    }
}
export default base
