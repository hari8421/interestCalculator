exports.getPercentage=(req, res, next)=>{
   res.status(200).json({
    message:"apis available"
   });
};

exports.calculatePercentage = (req, res, next) => {
  let amount = req.body.amount;
  let interest = req.body.interest;
  let term = req.body.term;
  let finalAmount = amount* (1 + (term*(interest/100)));
  let finalAmountCompound = (amount* ((1 + (interest/100))**term));
  let interestvalue=finalAmount-amount;
  let interestValueCompound=finalAmountCompound-amount;

  res.status(200).json({
    maturitySimple: finalAmount,
    interest: interestvalue,
    compoundInterest:interestValueCompound,
    maturityCompound:finalAmountCompound
  });
};