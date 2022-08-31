// [함수 사용]
// function tick(){
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
// }

// [함수 컴포넌트 사용]
// function Clock(props) {
//     return (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {props.date.toLocaleTimeString()}.</h2>
//         </div>
//     );
// }

// // 아래는 Clock에 props를 전달하지 않고 구현하는 것이 좋다.
// function tick(){
//     const element = <Clock date={new Date()} />;
//     ReactDOM.render(element, document.getElementById('root'));
// }


// [Class 컴포넌트로 변경 후, state 와 생명주기 사용하기]
class Clock extends React.Component {
    // state 설정하기
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    //#region 생명주기 메서드 사용

    // 컴포넌트 출력물이 DOM에 렌더링 된 후에 실행된다.
    componentDidMount() {
        this.timerID = setInterval(()=>this.tick(), 1000);
    }

    // 컴포넌트가 렌더링 해제될 때 실행된다.
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    //#endregion

    // setState 함수를 사용하여 state를 재설정하기
    tick() {
        this.setState({
            date: new Date()
        });
    }

    render(){
        return(
            <div>
                 <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

// 컴포넌트는 각각 독립적으로 사용된다.
function App() {
    return (
        <div>
            <Clock />
            <Clock />
            <Clock />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));



