module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body:{
                text : "Hello " + (req.query.name || req.body.name)
            } 
        };
    }
    else {
        context.res = {
            body: {
                text: "Nothing was passed in"
            }
        };
    }
};