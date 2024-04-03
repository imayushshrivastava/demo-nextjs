import connection from '@/app/utils/db'
 
export default async function handler(req:any, res:any) {
    if (req.method === 'POST') {
      try {
        const { name, email, message } = req.body;
        await connection.query(
          'INSERT INTO contactus (name, email, message) VALUES (?, ?, ?)',
          [name, email, message]
        );
  
        res.status(200).json({ message: 'Form data inserted successfully' });
      } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
}    