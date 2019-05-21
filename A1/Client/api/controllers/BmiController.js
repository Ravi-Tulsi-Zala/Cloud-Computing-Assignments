
module.exports = {

    calculateBmi073: function(req,res){

        var height = req.body.height;
        var weight = req.body.weight;
        var bmi =  (weight/(height*height));
        var bmiFinal = bmi.toFixed(4);

        res.view('pages/bmiResult',{

            bmiValue:bmiFinal
        })
    }

};



