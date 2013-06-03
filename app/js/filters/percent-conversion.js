'use strict';
/*global angular */

angular.module('mathSkills')
    .filter('percent-conversion', [
		'parser',
        function (parser) {
            return function (parametersArray) {
					var decimalNotPercent = (1),
						decimalAsPercent = (100),
						percentAsFraction = ({numerator: 1, denominator: 1}),
						fractionPercentAsFraction = ({numerator: 100, denominator: 1}),
						decimalAsFractionPercent = ({numerator: 1, denominator: 1}),
						fractionPercentAsDecimal = (.01),
						displayConsoleLogPercentObjects;
					
					// displayConsoleLogPercentObjects = true -- console logs all Percent object values at init
					displayConsoleLogPercentObjects = false;	
					
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
						decimalNotPercent = parametersArray[0].slice(5, parametersArray[0].length - 1);
						percentAsFraction = ({numerator: parseInt(decimalNotPercent.toString().replace(/,/g, '').replace('.', ''), 10), denominator: Math.pow(10, decimalDigits(decimalNotPercent))});
						decimalAsPercent = ([decimalNotPercent * (100)]);
						fractionPercentAsFraction = fractionMultiply([percentAsFraction, ({numerator: 1, denominator: 100})]);
						decimalAsFractionPercent = fractionMultiply([percentAsFraction, ({numerator: 100, denominator: 1})]);
						fractionPercentAsDecimal = ([decimalNotPercent * (.01)]);
						
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
					}
					
					var decimalAsPercentFunc = function(parametersArray) {
						
						decimalNotPercent = (parseFloat((decimalNumber/100).toFixed(5)));
						percentAsFraction = ({numerator: parseInt(decimalNotPercent.toString().replace(/,/g, '').replace('.', ''), 10), denominator: Math.pow(10, decimalDigits(decimalNotPercent))});
						decimalAsPercent = decimalNumber;
						fractionPercentAsFraction = fractionMultiply([percentAsFraction, ({numerator: 1, denominator: 100})]);
						decimalAsFractionPercent = fractionMultiply([percentAsFraction, ({numerator: 100, denominator: 1})]);
						fractionPercentAsDecimal = ([decimalNotPercent * (.01)]);
						
						if (displayConsoleLogPercentObjects) {
							console.log (
								 "decimalNotPercent is: "+decimalNotPercent+
								 " in decimalAsPercent, decimalAsPercent is: "+decimalAsPercent+
								 " percentAsFraction is: "+JSON.stringify(percentAsFraction)+
								 " fractionPercentAsFraction is: "+JSON.stringify(fractionPercentAsFraction)+
								 " decimalAsFractionPercent is: "+JSON.stringify(decimalAsFractionPercent)+
								 " fractionPercentAsDecimal is: "+fractionPercentAsDecimal
							);
						}
						
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
					}
					
					var percentAsFractionFunc = function(parametersArray) {
						var tagsWhole = 0, 
							tagsNumerator = 1, 
							tagsDenominator = 1,
							interiorTags;
							
							interiorTags = parser.extractTag(parametersArray[0]).args;
						
						switch (true) {
							case (interiorTags[1].substr(1, 3) == "str" || interiorTags[1].substr(1, 7) == "fracstr"):							
								tagsNumerator = interiorTags[0].substring(interiorTags[0].indexOf('{')+1,interiorTags[0].indexOf("}"));
								tagsDenominator = interiorTags[1].substring(interiorTags[1].indexOf('{')+1,interiorTags[1].indexOf("}"));
								break;
								
							case (interiorTags[1].substr(1, 4) == "frac"):
								tagsWhole = interiorTags[0].substring(interiorTags[0].indexOf('{')+1,interiorTags[0].indexOf("}"));
								interiorTags = parser.extractTag(interiorTags[1]).args;
								tagsNumerator = interiorTags[0].substring(interiorTags[0].indexOf('{')+1,interiorTags[0].indexOf("}"));
								tagsDenominator = interiorTags[1].substring(interiorTags[1].indexOf('{')+1,interiorTags[1].indexOf("}"));
								break;
							
						}
						
						if (((tagsNumerator/tagsDenominator))==((tagsNumerator/tagsDenominator).toFixed(5))) {
							decimalNotPercent = ((tagsNumerator/tagsDenominator));
						} else {
							decimalNotPercent = ((tagsNumerator/tagsDenominator).toFixed(5));
						}

						tagsWhole = tagsWhole + Math.floor(tagsNumerator/tagsDenominator);
						decimalNotPercent = tagsWhole + decimalNotPercent.toString().substring(decimalNotPercent.toString().indexOf('.'));
						percentAsFraction = {numerator: tagsNumerator, denominator: tagsDenominator};
						decimalAsPercent = ([decimalNotPercent * (100)]);
						fractionPercentAsFraction = fractionMultiply([({numerator: tagsNumerator, denominator: tagsDenominator}), ({numerator: 1, denominator: 100})]);
						decimalAsFractionPercent = fractionMultiply([percentAsFraction, ({numerator: 100, denominator: 1})]);
						fractionPercentAsDecimal = ([decimalNotPercent * (.01)]);
						
						if (displayConsoleLogPercentObjects) {
							console.log (
								 "decimalNotPercent is: "+decimalNotPercent+
								 " decimalAsPercent is: "+decimalAsPercent+
								 " in percentAsFraction, percentAsFraction is: "+JSON.stringify(percentAsFraction)+
								 " fractionPercentAsFraction is: "+JSON.stringify(fractionPercentAsFraction)+
								 " decimalAsFractionPercent is: "+JSON.stringify(decimalAsFractionPercent)+
								 " fractionPercentAsDecimal is: "+fractionPercentAsDecimal
							);
						}
						
						switch (true) {
							case (parametersArray[2] === "decimalNotPercent"):	
								return decimalNotPercent;
								break;
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
					}
					
					var fractionPercentAsFractionFunc = function(parametersArray) {
						
						fractionPercentAsFraction = angular.copy(fraction);
						percentAsFraction = fractionMultiply([fractionPercentAsFraction, ({numerator: 100, denominator: 1})]);
						decimalNotPercent = (parseFloat((percentAsFraction.getNumerator()/percentAsFraction.getDenominator()).toFixed(5)));
						decimalAsPercent = ([decimalNotPercent * (100)]);
						decimalAsFractionPercent = fractionMultiply([percentAsFraction, ({numerator: 100, denominator: 1})]);
						fractionPercentAsDecimal = ([decimalNotPercent * (.01)]);
						
						if (displayConsoleLogPercentObjects) {
							console.log (
								 "decimalNotPercent is: "+decimalNotPercent+
								 " decimalAsPercent is: "+decimalAsPercent+
								 " percentAsFraction is: "+JSON.stringify(percentAsFraction)+
								 " in fractionPercentAsFraction, fractionPercentAsFraction is: "+JSON.stringify(fractionPercentAsFraction)+
								 " decimalAsFractionPercent is: "+JSON.stringify(decimalAsFractionPercent)+
								 " fractionPercentAsDecimal is: "+fractionPercentAsDecimal
							);
						}
						
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
					}
					
					var decimalAsFractionPercentFunc = function(parametersArray) {

						decimalAsFractionPercent = angular.copy(fraction);  
						decimalNotPercent = (parseFloat((decimalAsFractionPercent.getNumerator()/decimalAsFractionPercent.getDenominator()).toFixed(5))); // 
						decimalAsPercent = ([decimalNotPercent * (100)]);
						percentAsFraction = fractionMultiply([decimalAsFractionPercent, ({numerator: 1, denominator: 100})]);  
		fractionPercentAsFraction = fractionMultiply([percentAsFraction, ({numerator: 1, denominator: 100})]);
						fractionPercentAsDecimal = ([decimalNotPercent * (.01)]);
						
						if (displayConsoleLogPercentObjects) {
							console.log (
								 "decimalNotPercent is: "+decimalNotPercent+
								 " decimalAsPercent is: "+decimalAsPercent+
								 " percentAsFraction is: "+JSON.stringify(percentAsFraction)+
								 " fractionPercentAsFraction is: "+JSON.stringify(fractionPercentAsFraction)+
								 " in decimalAsFractionPercent, decimalAsFractionPercent is: "+JSON.stringify(decimalAsFractionPercent)+
								 " fractionPercentAsDecimal is: "+fractionPercentAsDecimal
							);
						}
						
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
					}
					
					var fractionPercentAsDecimalFunc = function(parametersArray) {

						fractionPercentAsDecimal = decimalNumber;
						decimalNotPercent = ([fractionPercentAsDecimal * (100)]);
						percentAsFraction = ({numerator: parseInt(decimalNotPercent.toString().replace(/,/g, '').replace('.', ''), 10), denominator: Math.pow(10, decimalDigits(decimalNotPercent))});
						decimalAsPercent = ([decimalNotPercent * (100)]);
						fractionPercentAsFraction = fractionMultiply([percentAsFraction, ({numerator: 1, denominator: 100})]);
						decimalAsFractionPercent = fractionMultiply([percentAsFraction, ({numerator: 100, denominator: 1})]);
						
						if (displayConsoleLogPercentObjects) {
							console.log (
								 "decimalNotPercent is: "+decimalNotPercent+
								 " decimalAsPercent is: "+decimalAsPercent+
								 " percentAsFraction is: "+JSON.stringify(percentAsFraction)+
								 " fractionPercentAsFraction is: "+JSON.stringify(fractionPercentAsFraction)+
								 " decimalAsFractionPercent is: "+JSON.stringify(decimalAsFractionPercent)+
								 " in fractionPercentAsDecimal, fractionPercentAsDecimal is: "+fractionPercentAsDecimal
							);
						}
						
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
					}						
					
					switch (true) {
						case (parametersArray[1] === "decimalNotPercent"):
							return (decimalNotPercentFunc(parametersArray));
						break;
						case (parametersArray[1] === "decimalAsPercent"):
							return decimalAsPercentFunc(parametersArray);
						break;
						case (parametersArray[1] === "percentAsFraction"):
							return percentAsFractionFunc(parametersArray);
						break;
						case (parametersArray[1] === "fractionPercentAsFraction"):
							return fractionPercentAsFractionFunc(parametersArray);
						break;
						case (parametersArray[1] === "decimalAsFractionPercent"):
							return decimalAsFractionPercentFunc(parametersArray);
						break;
						case (parametersArray[1] === "fractionPercentAsDecimal"):
							return fractionPercentAsDecimalFunc(parametersArray);
						break;
						
						default:
						break;
					}			
				
				};
        }
    ]);
