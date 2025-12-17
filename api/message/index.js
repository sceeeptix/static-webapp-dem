module.exports = async function (context, req) {
    context.log('HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name)) || 'Welt';

    const responseMessage = {
        message: `Hallo ${name}! Diese Nachricht kommt von Azure Functions.`,
        timestamp: new Date().toISOString(),
        status: 'success',
        info: {
            backend: 'Azure Functions',
            language: 'JavaScript (Node.js)',
            trigger: 'HTTP'
        }
    };

    context.res = {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(responseMessage)
    };
};
