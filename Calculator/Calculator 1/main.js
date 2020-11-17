const $lis = document.querySelectorAll("ul li");

$lis.forEach((node) => {
    node.addEventListener('mousedown', function(event){
        const value = node.innerText.trim();
        const $result = document.querySelector(".result");
        const resultText = $result.innerText.trim();

        if(resultText == '0' || resultText == 'undefined'|| resultText == 'Infinity' ){
            $result.innerText = '';
        }

        if(value == '='){
            let solution = eval($result.innerText.trim());
            $result.innerText = solution;
            return true;
        }

        if(value.toLowerCase() == 'c'){
            $result.innerText = '0';
            return true;
        }
        
        $result.append(value);
    });
});