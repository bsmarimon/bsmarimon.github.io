$(document).ready(function(){
	var firstClick = true;
	var phraseTable = ["console.log('Hello, world!')",   
	"print ('Hello, world!')",
	"document.write ('Hello, world!')",
	"puts 'Hello, world!'",
	"echo 'Hello, world!'",
	"System.out.println ('Hello, world!')",
	];

    $(".hello").click(function(){
    	if (firstClick) {
    		phraseTable.push("Hello, world!")
    		firstClick = false
    	}
    	var random = phraseTable[Math.floor(Math.random() * phraseTable.length)];
        $(".hello").text(random);
    });

    $('.modal-trigger').leanModal();
});