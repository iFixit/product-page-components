const baseUrl = 'https://www.ifixit.com/api/2.0/';

export async function post(base, endpoint, data = {}) {
   if (!base) {
      base = baseUrl;
   }
   const response = await fetch(base + endpoint, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
   });
   return response;
}
