const connction = require('../config/connection');

module.exports = (eventCode) => {
  const sql = {
    text: 'select * from events where event_code = $1',
    values: [eventCode],
  };
  return connction.query(sql);
};