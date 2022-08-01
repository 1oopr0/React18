var my_name = {
    firstName: '1oo',
    lastName: 'pro'
};
function formatName(my_name) {
    return my_name.firstName + ' ' + my_name.lastName;
}

var element = React.createElement(
    'h1',
    null,
    'Hello, ',
    formatName(my_name)
);

ReactDOM.render(element, document.getElementById('root'));