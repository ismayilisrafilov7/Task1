function getMath(){
    return Math.floor(Math.random()*10)
}
function getMath2(){
    return Math.floor(Math.random()*10)
}
function getMath3(){
    return Math.floor(Math.random()*10)
}

class APP extends React.Component{
    render() {
        const num=getMath()
        const num2=getMath2()
        const num3=getMath3()
        return (
            <div>
                <Val x={num} y={num2} z={num3}/>
                {num==num2 && num==num3? "Succes":"Fail"}
                
            </div>
        )
    }
}
ReactDOM.render(<APP/>, document.getElementById("root"))