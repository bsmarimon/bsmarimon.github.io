$(document).ready(function () {
  var phraseTable = ["Hello, world!", 
  "console.log('Hello, world!')",   
  "print ('Hello, world!')",
  "document.write ('Hello, world!')",
  "puts 'Hello, world!'",
  "echo 'Hello, world!'",
  "System.out.println ('Hello, world!')",
  "Hello, world!"
  ];

    $(".hello").typed({
      strings: phraseTable,
      typeSpeed: 10
    });
});