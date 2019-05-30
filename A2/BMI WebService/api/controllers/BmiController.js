/**
 * BmiController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    calculateBmi073: function (req, res) {

        var bmiFinal;
        var height = req.param('height');
        var weight = req.param('weight');

        if (height === undefined || weight === undefined) {
            return res.badRequest(
                'Error : Bad request. Please enter Height and Weight!!'
            );
        }
        else if (height == '' || weight == '') {
            return res.badRequest(
                'Error : Bad request. Height or weight can not be null. Please Try Again!'
            );
        }
        else if (isNaN(height) || isNaN(weight)) {
            return res.badRequest(
                'Error : Bad request. Height or weight must be a number. Please Try Again!'
            );
        }
        else if (height <= 0 || weight <= 0) {
            return res.badRequest(
                'Error : Bad request. Height or weight must be greater than zero. Please try again !!'
            );
        }
        else {
            var bmi = (weight / (height * height));
            bmiFinal = bmi.toFixed(6);
            return res.json({ bmiValue: bmiFinal });
        }
    }
};
