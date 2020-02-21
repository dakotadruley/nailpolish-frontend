import request from 'superagent';

export const getNailPolishes = request.get(`https://ancient-waters-69197.herokuapp.com/api/nailpolishes`)