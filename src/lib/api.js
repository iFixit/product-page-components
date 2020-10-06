const baseUrl = 'https://www.ifixit.com/api/2.0/';

export async function post(endpoint, data = {}) {
   const response = await fetch(baseUrl + endpoint, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
   });
   return response;
}
