/**
 * BmiController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    calculateBmi073: function(req,res){

        var height = req.param('height');
        var weight = req.param('weight');
        var bmi =  (weight/(height*height));
        var bmiFinal = bmi.toFixed(4);
        
        return res.json({bmiValue:bmiFinal});
    }

};
