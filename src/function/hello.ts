import { format } from 'date-fns'
export const handler = async (event: unknown) => {
  const x = 'abc'
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        date: format(new Date(), 'yyyy/dd/hh'),
      },
      null,
      2
    ),
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
}
