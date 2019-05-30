

module.exports.routes = {

  '/': { view: 'pages/homepage' },
  'POST /calculateBMI073': 'BmiController.calculateBmi073',
  '/*' :  { view: 'pages/homepage' },

};
