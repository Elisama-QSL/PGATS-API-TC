import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 3,
  duration: '10s',

};

export default function() {
  let responseInstructorLogin = http.post(
    'http://localhost:3000/api/login', 
    JSON.stringify({ 
        username: 'maria', 
        password: '123'
    }));

    

    check(responseInstructorLogin, {
        'status deve ser igual a 401': (r) => r.status === 401
    });



  sleep(1); // User Think Time
}