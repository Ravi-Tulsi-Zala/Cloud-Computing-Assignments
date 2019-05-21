

module.exports.routes = {

  '/': { view: 'pages/homepage' },
  'post /calculateBMI073': 'BmiController.calculateBmi073',
  '/*' :  { view: 'pages/homepage' },

};
