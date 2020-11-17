module.exports = async function (context, req) {
    const name = context.bindingData.name;
    const greeting = `Hello, ${name}`;

    context.res = {
        status: 200, /* Defaults to 200 */
        body: {greeting: greeting},
        headers: {
            'Content-Type': 'application/json'
        }
    };
}