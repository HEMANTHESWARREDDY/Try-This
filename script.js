function fibonacci() {
	let num = document.getElementById("number").value;
	let num1 = 0;
	let num2 = 1;
	let sum;
	for (let i = 0; i < num; i++) {
		sum = num1 + num2;
		num1 = num2;
		num2 = sum;
	}
	document.getElementById("answerArea").innerHTML = "FIBONACCI: "+num2;
}

function factorial() {
	let n = document.getElementById("number").value;
	let result = 1;
	for (let i = 2; i <= n; i++) {
		result *= i;
	}
	document.getElementById("answerArea").textContent = "FACTORIAL: "+result;
}

function prime() {
	let num = document.getElementById("number").value;
    if (num <= 1) {
        document.getElementById("answerArea").innerHTML=num+" is not a PRIME"; 
    }
    if (num <= 3) {
        document.getElementById("answerArea").innerHTML=num+" is not a PRIME"; 
    }
    if (num % 2 === 0 || num % 3 === 0) {
        document.getElementById("answerArea").innerHTML=num+" is not a PRIME"; 
    }
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
			document.getElementById("answerArea").innerHTML=num+" is not a PRIME"; 
        }
    }
    document.getElementById("answerArea").innerHTML=num+" is PRIME"; 
}

function Palindrome(){
	var rem, temp, final = 0;
	let number=document.getElementById("number").value;
	var a= number;
	temp = number;
	while(number>0)
	{
		rem = number%10;
		number = parseInt(number/10);
		final = final*10+rem;
	}
	if(final==temp)
	{
		document.getElementById("answerArea").innerText =a+" is  palindrome";
	}
	else
	{
		document.getElementById("answerArea").innerText = a+" is not  palindrome";
	}
}
