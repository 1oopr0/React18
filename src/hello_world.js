const my_name = {
    firstName : '1oo',
    lastName : 'pro'
};
function formatName(my_name){
    return my_name.firstName + ' ' + my_name.lastName
}

const element = (
    <h1>
      Hello, {formatName(my_name)}
    </h1>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);

