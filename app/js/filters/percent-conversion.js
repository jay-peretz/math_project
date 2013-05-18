'use strict';
/*global angular */

angular.module('mathSkills')
    .filter('percent-conversion', [
        function () {
            return function (parametersArray) {
					var decimalNotPercent = (1),
						decimalAsPercent = (100),
						percentAsFraction = ({numerator: 1, denominator: 1}),
						fractionPercentAsFraction = ({numerator: 100, denominator: 1}),
						decimalAsFractionPercent = ({numerator: 1, denominator: 1}),
						fractionPercentAsDecimal = (.01),
						displayConsoleLogPercentObjects;
					
					// displayConsoleLogPercentObjects = true -- console logs all Percent object values at init
					displayConsoleLogPercentObjects = true;	
					
					var decimalDigits = function (num) {
							if (num.toString().indexOf('.') > 0) {
								return num.toString().split('.')[1].length;
							} else {
								return 0;
							}
						};
						
					var fractionMultiply = function (fractionsArray) {
						var newNumerator,
							newDenominator;
						newNumerator = fractionsArray[0].numerator *  fractionsArray[1].numerator;
						newDenominator = fractionsArray[0].denominator *  fractionsArray[1].denominator;
						return {numerator: newNumerator, denominator: newDenominator};
					}
				
					var decimalNotPercentFunc = function(parametersArray) {
						decimalNotPercent = parametersArray[0];
						percentAsFraction = ({numerator: parseInt(decimalNotPercent.toString().replace(/,/g, '').replace('.', ''), 10), denominator: Math.pow(10, decimalDigits(decimalNotPercent))});
						decimalAsPercent = ([decimalNotPercent * (100)]);
						fractionPercentAsFraction = fractionMultiply([percentAsFraction, ({numerator: 1, denominator: 100})]);
						decimalAsFractionPercent = fractionMultiply([percentAsFraction, ({numerator: 100, denominator: 1})]);
						fractionPercentAsDecimal = ([decimalNotPercent * (.01)]);
						switch (true) {
							case (parametersArray[2] === "percentAsFraction"):	
								return percentAsFraction;
								break;
							case (parametersArray[2] === "decimalAsPercent"):
								return decimalAsPercent;
								break;
							case (parametersArray[2] === "fractionPercentAsFraction"):
								return fractionPercentAsFraction;
								break;
							case (parametersArray[2] === "decimalAsFractionPercent"):	
								return decimalAsFractionPercent;
								break;
							case (parametersArray[2] === "fractionPercentAsDecimal"):										
								return fractionPercentAsDecimal;
								break;
						}
								
						if (displayConsoleLogPercentObjects) {
							console.log (
								 "in decimalNotPercent decimalNotPercent is: "+decimalNotPercent+
								 " decimalAsPercent is: "+decimalAsPercent+
								 " percentAsFraction is: "+JSON.stringify(percentAsFraction)+
								 " fractionPercentAsFraction is: "+JSON.stringify(fractionPercentAsFraction)+
								 " decimalAsFractionPercent is: "+JSON.stringify(decimalAsFractionPercent)+
								 " fractionPercentAsDecimal is: "+fractionPercentAsDecimal
							);
						}
					}
					
					var decimalAsPercentFunc = function(decimalNumber) {
						
						decimalNotPercent = (parseFloat((decimalNumber/100).toFixed(5)));
						percentAsFraction = ({numerator: parseInt(decimalNotPercent.toString().replace(/,/g, '').replace('.', ''), 10), denominator: Math.pow(10, decimalDigits(decimalNotPercent))});
						decimalAsPercent = decimalNumber;
						fractionPercentAsFraction = fractionMultiply([percentAsFraction, ({numerator: 1, denominator: 100})]);
						decimalAsFractionPercent = fractionMultiply([percentAsFraction, ({numerator: 100, denominator: 1})]);
						fractionPercentAsDecimal = ([decimalNotPercent * (.01)]);
						switch (true) {
							case (parametersArray[2] === "percentAsFraction"):	
								return percentAsFraction;
								break;
							case (parametersArray[2] === "decimalAsPercent"):
								return decimalAsPercent;
								break;
							case (parametersArray[2] === "fractionPercentAsFraction"):
								return fractionPercentAsFraction;
								break;
							case (parametersArray[2] === "decimalAsFractionPercent"):	
								return decimalAsFractionPercent;
								break;
							case (parametersArray[2] === "fractionPercentAsDecimal"):										
								return fractionPercentAsDecimal;
								break;
						}
								
						if (displayConsoleLogPercentObjects) {
							console.log (
								 "in decimalNotPercent decimalNotPercent is: "+decimalNotPercent+
								 " decimalAsPercent is: "+decimalAsPercent+
								 " percentAsFraction is: "+JSON.stringify(percentAsFraction)+
								 " fractionPercentAsFraction is: "+JSON.stringify(fractionPercentAsFraction)+
								 " decimalAsFractionPercent is: "+JSON.stringify(decimalAsFractionPercent)+
								 " fractionPercentAsDecimal is: "+fractionPercentAsDecimal
							);
						}
					}
					
					var percentAsFractionFunc = function(fraction) {
						
						if (((fraction.getNumerator()/fraction.getDenominator()))==((fraction.getNumerator()/fraction.getDenominator()).toFixed(5))) {
							decimalNotPercent = ((fraction.getNumerator()/fraction.getDenominator()));
						} else {
							decimalNotPercent = ((fraction.getNumerator()/fraction.getDenominator()).toFixed(5));
						}
						percentAsFraction = angular.copy(fraction);
						decimalAsPercent = ([decimalNotPercent * (100)]);
						fractionPercentAsFraction = fractionMultiply([fraction, ({numerator: 1, denominator: 100})]);
						decimalAsFractionPercent = fractionMultiply([percentAsFraction, ({numerator: 100, denominator: 1})]);
						fractionPercentAsDecimal = ([decimalNotPercent * (.01)]);
						switch (true) {
							case (parametersArray[2] === "percentAsFraction"):	
								return percentAsFraction;
								break;
							case (parametersArray[2] === "decimalAsPercent"):
								return decimalAsPercent;
								break;
							case (parametersArray[2] === "fractionPercentAsFraction"):
								return fractionPercentAsFraction;
								break;
							case (parametersArray[2] === "decimalAsFractionPercent"):	
								return decimalAsFractionPercent;
								break;
							case (parametersArray[2] === "fractionPercentAsDecimal"):										
								return fractionPercentAsDecimal;
								break;
						}
								
						if (displayConsoleLogPercentObjects) {
							console.log (
								 "in decimalNotPercent decimalNotPercent is: "+decimalNotPercent+
								 " decimalAsPercent is: "+decimalAsPercent+
								 " percentAsFraction is: "+JSON.stringify(percentAsFraction)+
								 " fractionPercentAsFraction is: "+JSON.stringify(fractionPercentAsFraction)+
								 " decimalAsFractionPercent is: "+JSON.stringify(decimalAsFractionPercent)+
								 " fractionPercentAsDecimal is: "+fractionPercentAsDecimal
							);
						}
					}
					
					var fractionPercentAsFractionFunc = function(fraction) {
						
						fractionPercentAsFraction = angular.copy(fraction);
						percentAsFraction = fractionMultiply([fractionPercentAsFraction, ({numerator: 100, denominator: 1})]);
						decimalNotPercent = (parseFloat((percentAsFraction.getNumerator()/percentAsFraction.getDenominator()).toFixed(5)));
						decimalAsPercent = ([decimalNotPercent * (100)]);
						decimalAsFractionPercent = fractionMultiply([percentAsFraction, ({numerator: 100, denominator: 1})]);
						fractionPercentAsDecimal = ([decimalNotPercent * (.01)]);
						switch (true) {
							case (parametersArray[2] === "percentAsFraction"):	
								return percentAsFraction;
								break;
							case (parametersArray[2] === "decimalAsPercent"):
								return decimalAsPercent;
								break;
							case (parametersArray[2] === "fractionPercentAsFraction"):
								return fractionPercentAsFraction;
								break;
							case (parametersArray[2] === "decimalAsFractionPercent"):	
								return decimalAsFractionPercent;
								break;
							case (parametersArray[2] === "fractionPercentAsDecimal"):										
								return fractionPercentAsDecimal;
								break;
						}
								
						if (displayConsoleLogPercentObjects) {
							console.log (
								 "in decimalNotPercent decimalNotPercent is: "+decimalNotPercent+
								 " decimalAsPercent is: "+decimalAsPercent+
								 " percentAsFraction is: "+JSON.stringify(percentAsFraction)+
								 " fractionPercentAsFraction is: "+JSON.stringify(fractionPercentAsFraction)+
								 " decimalAsFractionPercent is: "+JSON.stringify(decimalAsFractionPercent)+
								 " fractionPercentAsDecimal is: "+fractionPercentAsDecimal
							);
						}
					}
					
					var decimalAsFractionPercentFunc = function(fraction) {

						decimalAsFractionPercent = angular.copy(fraction);  
						decimalNotPercent = (parseFloat((decimalAsFractionPercent.getNumerator()/decimalAsFractionPercent.getDenominator()).toFixed(5))); // 
						decimalAsPercent = ([decimalNotPercent * (100)]);
						percentAsFraction = fractionMultiply([decimalAsFractionPercent, ({numerator: 1, denominator: 100})]);  
		fractionPercentAsFraction = fractionMultiply([percentAsFraction, ({numerator: 1, denominator: 100})]);
						fractionPercentAsDecimal = ([decimalNotPercent * (.01)]);
						switch (true) {
							case (parametersArray[2] === "percentAsFraction"):	
								return percentAsFraction;
								break;
							case (parametersArray[2] === "decimalAsPercent"):
								return decimalAsPercent;
								break;
							case (parametersArray[2] === "fractionPercentAsFraction"):
								return fractionPercentAsFraction;
								break;
							case (parametersArray[2] === "decimalAsFractionPercent"):	
								return decimalAsFractionPercent;
								break;
							case (parametersArray[2] === "fractionPercentAsDecimal"):										
								return fractionPercentAsDecimal;
								break;
						}
								
						if (displayConsoleLogPercentObjects) {
							console.log (
								 "in decimalNotPercent decimalNotPercent is: "+decimalNotPercent+
								 " decimalAsPercent is: "+decimalAsPercent+
								 " percentAsFraction is: "+JSON.stringify(percentAsFraction)+
								 " fractionPercentAsFraction is: "+JSON.stringify(fractionPercentAsFraction)+
								 " decimalAsFractionPercent is: "+JSON.stringify(decimalAsFractionPercent)+
								 " fractionPercentAsDecimal is: "+fractionPercentAsDecimal
							);
						}
					}
					
					var fractionPercentAsDecimalFunc = function(decimalNumber) {

						fractionPercentAsDecimal = decimalNumber;
						decimalNotPercent = ([fractionPercentAsDecimal * (100)]);
						percentAsFraction = ({numerator: parseInt(decimalNotPercent.toString().replace(/,/g, '').replace('.', ''), 10), denominator: Math.pow(10, decimalDigits(decimalNotPercent))});
						decimalAsPercent = ([decimalNotPercent * (100)]);
						fractionPercentAsFraction = fractionMultiply([percentAsFraction, ({numerator: 1, denominator: 100})]);
						decimalAsFractionPercent = fractionMultiply([percentAsFraction, ({numerator: 100, denominator: 1})]);
						switch (true) {
							case (parametersArray[2] === "percentAsFraction"):	
								return percentAsFraction;
								break;
							case (parametersArray[2] === "decimalAsPercent"):
								return decimalAsPercent;
								break;
							case (parametersArray[2] === "fractionPercentAsFraction"):
								return fractionPercentAsFraction;
								break;
							case (parametersArray[2] === "decimalAsFractionPercent"):	
								return decimalAsFractionPercent;
								break;
							case (parametersArray[2] === "fractionPercentAsDecimal"):										
								return fractionPercentAsDecimal;
								break;
						}
								
						if (displayConsoleLogPercentObjects) {
							console.log (
								 "in decimalNotPercent decimalNotPercent is: "+decimalNotPercent+
								 " decimalAsPercent is: "+decimalAsPercent+
								 " percentAsFraction is: "+JSON.stringify(percentAsFraction)+
								 " fractionPercentAsFraction is: "+JSON.stringify(fractionPercentAsFraction)+
								 " decimalAsFractionPercent is: "+JSON.stringify(decimalAsFractionPercent)+
								 " fractionPercentAsDecimal is: "+fractionPercentAsDecimal
							);
						}
					}						
					
					switch (true) {
						case (parametersArray[1] === "decimalNotPercent"):
							return (decimalNotPercentFunc(parametersArray));
						break;
						case (parametersArray[1] === "decimalAsPercent"):
							return decimalAsPercentFunc();
						break;
						case (parametersArray[1] === "percentAsFraction"):
							return percentAsFractionFunc();
						break;
						case (parametersArray[1] === "fractionPercentAsFraction"):
							return fractionPercentAsFractionFunc();
						break;
						case (parametersArray[1] === "decimalAsFractionPercent"):
							return decimalAsFractionPercentFunc();
						break;
						case (parametersArray[1] === "fractionPercentAsDecimal"):
							return fractionPercentAsDecimalFunc();
						break;
						
						default:
						break;
					}			
				
				};
        }
    ]);
