$(document).ready(function () {
  var phraseTable = ["Hello, world!",
  "console.log('Hello, world!')",
  "print('Hello, world!')",
  "echo 'Hello, world!'",
  "Hello, world!"
  ];

    $(".hello").typed({
      strings: phraseTable,
      typeSpeed: 10
    });
});
