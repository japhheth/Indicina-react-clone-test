import http from './localAuth';


export const login = async (payload) => {
 const response = await http.post('auth', payload);
 return response;
}