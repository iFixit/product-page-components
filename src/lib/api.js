const baseUrl = 'https://ifixit.com/api/2.0/';

export async function post(endpoint, data = {}) {
   // Default options are marked with *
   const response = await fetch(baseUrl + endpoint, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
   });
   return response;
}
