import request from 'superagent';

export const getNailPolish = (NailPolishId) => request.get(`https://ancient-waters-69197.herokuapp.com/api/nailpolish/${NailPolishId}`)