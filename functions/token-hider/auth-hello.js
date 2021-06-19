module.exports = { handler }
async function handler(event, context) {
  if (context.clientContext) {
    const { user } = context.clientContext
    // you can get actual user metadata you can use!
    return {
      statusCode: 200,
      body: JSON.stringify({
        msg: "super secret info only available to authenticated users",
        user,
      })
    }
  } else {
    return {
      statusCode: 401,
      body: JSON.stringify({
        msg:
          "Error: No authentication detected! Note that netlify-lambda doesn't locally emulate Netlify Identity.",
      }),
    }
  }
}