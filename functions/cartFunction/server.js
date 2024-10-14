export default async ({ req, res, log, error }) => {

    if (req.method === 'GET') {
      return res.send('Hello, World!');
    }

    return res.send("hello world")

  };