const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootl3663/",
            name: "springbootl3663",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootl3663/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "考公资料分享平台"
        } 
    }
}
export default base