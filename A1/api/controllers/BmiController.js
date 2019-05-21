/**
 * BmiController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    calculateBmi073: function(req,res){

        var height = req.body.height;
        var weight = req.body.weight;
        var bmi =  (weight/(height*height));
        var bmiFinal = bmi.toFixed(4);
        
        return res.json({bmiValue:bmiFinal});
    }

};
