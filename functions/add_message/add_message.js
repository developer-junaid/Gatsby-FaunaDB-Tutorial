const faunadb = require("faunadb")
const { query } = faunadb

// Handler
const handler = async event => {
  let secret = "fnAEKhFvg4ACCS2P1tnf1WjdyJWTe0WG2fpiznxA"

  const messageBody = JSON.parse(event.body) // Get Data from body
  const { message } = messageBody // Destructure message
  console.log(messageBody)
  // Fauna DB
  var adminClient = new faunadb.Client({ secret: secret }) // Initialize with secret

  // Database Queries
  const result = await adminClient.query(
    // Queries

    // Add Data in DB
    query.Create(query.Collection("messages"), { data: { detail: message } })
  )

  // Response
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: result.ref.id }), // Return ID when success
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
  // Response //
}

module.exports = { handler }
