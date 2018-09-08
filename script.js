//Create a validation
function justLetters(){

	text = document.querySelector(".lbltxt input");
	regEx = '[A-Za-z]+$';
	text.setAttribute("pattern", regEx);
	text.setAttribute("title", "Just letters (a-z)");
	text.setAttribute("placeholder", "Just letters");
}

function passValid(){
	pass = document.querySelector(".lblpass input");
	pass.setAttribute("title", "Password (UpperCase, LowerCase, Number/SpecialChar and min 8 Chars)");
	pass.setAttribute("placeholder", "Password");
}

function changeColor(){
	color = document.querySelector(".lblcolor input");
	regEx = "^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$";
	color.setAttribute("pattern", regEx);
	color.setAttribute("title", "Format is #CCC or #CCCCCC");
	color.setAttribute("placeholder", "#CCC or #CCCCCC");
}

function priceValid(){
	price = document.querySelector(".lblprice input");
	price.setAttribute("title", "Price (Format: 1.00)");
	price.setAttribute("placeholder", "Format: 1.00");
}

// Apply the Style
function applyEdit(){

	color = document.querySelector("#inputColor");
	width = document.querySelector("#inputWidth");
	height = document.querySelector("#inputHeight");
	border = document.querySelector("#inputBorder"); 
	bradius = document.querySelector("#inputBorderRadius");
	fSize = document.querySelector("#inputFontSize");
	fColor = document.querySelector("#inputFontColor");
	bShadow = document.querySelector("#inputBoxShadow");
	tShadow = document.querySelector("#inputTextShadow");
	fontWeight = document.querySelector("#inputFontWeight");

	for(i = 0; i <= 10; i++){

		opt = document.querySelectorAll('option')[i];
		if(opt.selected){


			switch(opt.value){

				case "form":

					document.querySelector('#formid1').style.backgroundColor = color.value;
					document.querySelector('#formid1').style.width = width.value;
					document.querySelector('#formid1').style.height = height.value;
					document.querySelector('#formid1').style.border = border.value;
					document.querySelector('#formid1').style.borderRadius = bradius.value;
					document.querySelector('#formid1').style.boxShadow = bShadow.value;
					break;

				case "body":

					document.querySelector('body').style.backgroundColor = color.value;
					document.querySelector('body').style.width = width.value;
					document.querySelector('body').style.height = height.value;
					document.querySelector('body').style.border = border.value;
					document.querySelector('body').style.borderRadius = bradius.value;
					break;

				case "title":

					document.querySelector('#formTitleid').style.backgroundColor = color.value;
					document.querySelector('#formTitleid').style.width = width.value;
					document.querySelector('#formTitleid').style.height = height.value;
					document.querySelector('#formTitleid').style.border = border.value;
					document.querySelector('#formTitleid').style.borderRadius = bradius.value;
					document.querySelector('#formTitleid').style.fontSize = fSize.value;
					document.querySelector('#formTitleid').style.color = fColor.value;
					document.querySelector('#formTitleid').style.textShadow = tShadow.value;
					document.querySelector('#formTitleid').style.fontWeight = fontWeight.value;
					
					break;

				case "allRadioBtn":

					for(i = 0; i < 2; i++){

						document.querySelectorAll('.lblrd')[i].style.backgroundColor = color.value;
						document.querySelectorAll('.lblrd')[i].style.width = width.value;
						document.querySelectorAll('.lblrd')[i].style.height = height.value;
						document.querySelectorAll('.lblrd')[i].style.border = border.value;
						document.querySelectorAll('.lblrd')[i].style.borderRadius = bradius.value;
					}

					break;

				case "btns":

					for(i = 0; i < 2; i++){
						document.querySelectorAll('.divBtn input')[i].style.backgroundColor = color.value;
						document.querySelectorAll('.divBtn input')[i].style.width = width.value;
						document.querySelectorAll('.divBtn input')[i].style.height = height.value;
						document.querySelectorAll('.divBtn input')[i].style.border = border.value;
						document.querySelectorAll('.divBtn input')[i].style.borderRadius = bradius.value;
						document.querySelectorAll('.divBtn input')[i].style.fontSize = fSize.value;
						document.querySelectorAll('.divBtn input')[i].style.color = fColor.value;
						document.querySelectorAll('.divBtn input')[i].style.textShadow = tShadow.value;
						document.querySelectorAll('.divBtn input')[i].style.fontWeight = fontWeight.value;
						document.querySelectorAll('.divBtn input')[i].style.boxShadow = bShadow.value;

					}

					break;

				case "allInputs":

					for(i = 0; i <= 5; i++){
						document.querySelectorAll('input')[i].style.backgroundColor = color.value;
						document.querySelectorAll('input')[i].style.width = width.value;
						document.querySelectorAll('input')[i].style.height = height.value;
						document.querySelectorAll('input')[i].style.border = border.value;
						document.querySelectorAll('input')[i].style.borderRadius = bradius.value;
						document.querySelectorAll('input')[i].style.fontWeight = fontWeight.value;
						document.querySelectorAll('input')[i].style.boxShadow = bShadow.value;
						document.querySelectorAll('input')[i].style.fontSize = fSize.value;
						document.querySelectorAll('input')[i].style.color = fColor.value;
					}

					break;

				case "justLetterInput":

					document.querySelector('.lbltxt input').style.backgroundColor = color.value;
					document.querySelector('.lbltxt input').style.width = width.value;
					document.querySelector('.lbltxt input').style.height = height.value;
					document.querySelector('.lbltxt input').style.border = border.value;
					document.querySelector('.lbltxt input').style.borderRadius = bradius.value;
					break;

				case "justNumberInput":

					document.querySelector('.lblnumber input').style.backgroundColor = color.value;
					document.querySelector('.lblnumber input').style.width = width.value;
					document.querySelector('.lblnumber input').style.height = height.value;
					document.querySelector('.lblnumber input').style.border = border.value;
					document.querySelector('.lblnumber input').style.borderRadius = bradius.value;
					break;

				case "passInput":

					document.querySelector('.lblpass input').style.backgroundColor = color.value;
					document.querySelector('.lblpass input').style.width = width.value;
					document.querySelector('.lblpass input').style.height = height.value;
					document.querySelector('.lblpass input').style.border = border.value;
					document.querySelector('.lblpass input').style.borderRadius = bradius.value;
					break;

				case "dateInput":

					document.querySelector('.lbldate input').style.backgroundColor = color.value;
					document.querySelector('.lbldate input').style.width = width.value;
					document.querySelector('.lbldate input').style.height = height.value;
					document.querySelector('.lbldate input').style.border = border.value;
					document.querySelector('.lbldate input').style.borderRadius = bradius.value;
					break;

				case "priceInput":

					document.querySelector('.lblprice input').style.backgroundColor = color.value;
					document.querySelector('.lblprice input').style.width = width.value;
					document.querySelector('.lblprice input').style.height = height.value;
					document.querySelector('.lblprice input').style.border = border.value;
					document.querySelector('.lblprice input').style.borderRadius = bradius.value;
					break;


			}

			i = 11;
		}
	}
}

//get the value of selected option to identify to apply the Style
function getValueSelected(){

	for(i = 0; i <= 10; i++){

		opt = document.querySelectorAll('option')[i].selected;

		if(opt){
			
			getStyle(i); 

			i = 11;
		} 
	}
}

//get the style of tags on form to show by default
function getStyle(n){

	document.querySelector('#lblFontSize').style.display = "none";
	document.querySelector('#lblFontColor').style.display = "none";
	document.querySelector('#lblTextShadow').style.display = "none";
	document.querySelector('#lblBoxShadow').style.display = "none";
	document.querySelector('#lblFontWeight').style.display = "none";

	switch(n){
		case 0://Form Style
		
			document.querySelector("#inputColor").value = "#fa0";
			document.querySelector("#inputWidth").value = "300px";
			document.querySelector("#inputHeight").value = "auto";
			document.querySelector("#inputBorder").value = "0px solid #000";
			document.querySelector("#inputBorderRadius").value = "6px";
			document.querySelector("#inputBoxShadow").value = "1px 1px 2px #000";
			break;

		case 1://Body Style
			document.querySelector("#inputColor").value = "#fff";
			document.querySelector("#inputWidth").value = "100%";
			document.querySelector("#inputHeight").value = "100%";
			document.querySelector("#inputBorder").value = "0px solid #000";
			document.querySelector("#inputBorderRadius").value = "0px";
			break;

		case 2://Title Style
			document.querySelector("#inputColor").value = "#fa0";
			document.querySelector("#inputWidth").value = "150px";
			document.querySelector("#inputHeight").value = "auto";
			document.querySelector("#inputBorder").value = "0px solid #000";
			document.querySelector("#inputBorderRadius").value = "0px";
			document.querySelector("#inputFontSize").value = "1.8em";
			document.querySelector("#inputFontColor").value = "#fff";
			document.querySelector("#inputTextShadow").value = "1px 1px 1px #000";
			document.querySelector("#inputFontWeight").value = "normal";

			document.querySelector('#lblFontSize').style.display = "block";
			document.querySelector('#lblFontColor').style.display = "block";
			document.querySelector('#lblTextShadow').style.display = "block";
			document.querySelector('#lblFontWeight').style.display = "block";

			break;

		case 3://All Radio Buttons Style
			document.querySelector("#inputColor").value = "#fff";
			document.querySelector("#inputWidth").value = "23px";
			document.querySelector("#inputHeight").value = "23px";
			document.querySelector("#inputBorder").value = "1px solid #000";
			document.querySelector("#inputBorderRadius").value = "50%";
			break;

		case 4://Buttons Style
			document.querySelector("#inputColor").value = "#ccc";
			document.querySelector("#inputWidth").value = "100px";
			document.querySelector("#inputHeight").value = "50px";
			document.querySelector("#inputBorder").value = "0px solid #000";
			document.querySelector("#inputBorderRadius").value = "none";
			document.querySelector("#inputFontSize").value = "1em";
			document.querySelector("#inputFontColor").value = "#000";
			document.querySelector("#inputBoxShadow").value = "0px 0px 0px #000";
			document.querySelector("#inputTextShadow").value = "0px 0px 0px #000";
			document.querySelector("#inputFontWeight").value = "normal";

			document.querySelector('#lblFontSize').style.display = "block";
			document.querySelector('#lblFontColor').style.display = "block";
			document.querySelector('#lblTextShadow').style.display = "block";
			document.querySelector('#lblFontWeight').style.display = "block";
			document.querySelector('#lblBoxShadow').style.display = "block";

			break;

		case 5://All Inputs Style
			document.querySelector("#inputColor").value = "#fff";
			document.querySelector("#inputWidth").value = "100%";
			document.querySelector("#inputHeight").value = "auto";
			document.querySelector("#inputBorder").value = "0px solid #000";
			document.querySelector("#inputBorderRadius").value = "none";
			document.querySelector("#inputFontSize").value = "1em";
			document.querySelector("#inputFontColor").value = "#000";
			document.querySelector("#inputBoxShadow").value = "0px 0px 0px #000";
			document.querySelector("#inputTextShadow").value = "0px 0px 0px #000";
			document.querySelector("#inputFontWeight").value = "normal";

			document.querySelector('#lblFontSize').style.display = "block";
			document.querySelector('#lblFontColor').style.display = "block";
			document.querySelector('#lblTextShadow').style.display = "block";
			document.querySelector('#lblFontWeight').style.display = "block";
			document.querySelector('#lblBoxShadow').style.display = "block"

			break;

		case 6://Just Letters Input Style
			document.querySelector("#inputColor").value = "#fff";
			document.querySelector("#inputWidth").value = "100%";
			document.querySelector("#inputHeight").value = "auto";
			document.querySelector("#inputBorder").value = "0px solid #000";
			document.querySelector("#inputBorderRadius").value = "none";
			break;

		case 7://Just Number Input Style
			document.querySelector("#inputColor").value = "#fff";
			document.querySelector("#inputWidth").value = "100%";
			document.querySelector("#inputHeight").value = "auto";
			document.querySelector("#inputBorder").value = "0px solid #000";
			document.querySelector("#inputBorderRadius").value = "none";
			break;

		case 8://Password Input Style
			document.querySelector("#inputColor").value = "#fff";
			document.querySelector("#inputWidth").value = "100%";
			document.querySelector("#inputHeight").value = "auto";
			document.querySelector("#inputBorder").value = "0px solid #000";
			document.querySelector("#inputBorderRadius").value = "none";
			break;

		case 9://Date Input Style
			document.querySelector("#inputColor").value = "#fff";
			document.querySelector("#inputWidth").value = "100%";
			document.querySelector("#inputHeight").value = "auto";
			document.querySelector("#inputBorder").value = "0px solid #000";
			document.querySelector("#inputBorderRadius").value = "none";
			break;

		case 10://Price Input Style
			document.querySelector("#inputColor").value = "#fff";
			document.querySelector("#inputWidth").value = "100%";
			document.querySelector("#inputHeight").value = "auto";
			document.querySelector("#inputBorder").value = "0px solid #000";
			document.querySelector("#inputBorderRadius").value = "none";
			break;

		default://default Style
			document.querySelector("#inputColor").value = "";
			document.querySelector("#inputWidth").value = "";
			document.querySelector("#inputHeight").value = "";
			document.querySelector("#inputBorder").value = "";
			document.querySelector("#inputBorderRadius").value = "";
			break;
	}
	

}