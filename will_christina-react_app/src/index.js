import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";

const mockBookResults = {
  kind: "books#volumes",
  totalItems: 1788,
  items: [
    {
      kind: "books#volume",
      id: "ptiYBAAAQBAJ",
      etag: "dI37pJbB1Zs",
      selfLink: "https://www.googleapis.com/books/v1/volumes/ptiYBAAAQBAJ",
      volumeInfo: {
        title: "JavaScript & jQuery: The Missing Manual",
        authors: ["David Sawyer McFarland"],
        publisher: '"O\'Reilly Media, Inc."',
        publishedDate: "2014-09-18",
        description:
          "JavaScript lets you supercharge your HTML with animation, interactivity, and visual effects—but many web designers find the language hard to learn. This easy-to-read guide not only covers JavaScript basics, but also shows you how to save time and effort with the jQuery and jQuery UI libraries of prewritten JavaScript code. You’ll build web pages that feel and act like desktop programs—with little or no programming. The important stuff you need to know: Pull back the curtain on JavaScript. Learn how to build a basic program with this language. Get up to speed on jQuery. Quickly assemble JavaScript programs that work well on multiple web browsers. Transform your user interface. Learn jQuery UI, the JavaScript library for interface features like design themes and controls. Make your pages interactive. Create JavaScript events that react to visitor actions. Use animations and effects. Build drop-down navigation menus, pop-ups, automated slideshows, and more. Collect data with web forms. Create easy-to-use forms that ensure more accurate visitor responses. Practice with living examples. Get step-by-step tutorials for web projects you can build yourself.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781491948613"
          },
          {
            type: "ISBN_10",
            identifier: "1491948612"
          }
        ],
        readingModes: {
          text: true,
          image: true
        },
        pageCount: 686,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.3.5.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=ptiYBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=ptiYBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=ptiYBAAAQBAJ&printsec=frontcover&dq=javascript&hl=&cd=1&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=ptiYBAAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=ptiYBAAAQBAJ"
      },
      saleInfo: {
        country: "US",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 50.99,
          currencyCode: "USD"
        },
        retailPrice: {
          amount: 28.91,
          currencyCode: "USD"
        },
        buyLink:
          "https://play.google.com/store/books/details?id=ptiYBAAAQBAJ&rdid=book-ptiYBAAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 5.099e7,
              currencyCode: "USD"
            },
            retailPrice: {
              amountInMicros: 2.891e7,
              currencyCode: "USD"
            },
            giftable: true
          }
        ]
      },
      accessInfo: {
        country: "US",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true
        },
        pdf: {
          isAvailable: true
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=ptiYBAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false
      },
      searchInfo: {
        textSnippet:
          "JavaScript lets you supercharge your HTML with animation, interactivity, and visual effects—but many web designers find the language hard to learn."
      }
    },
    {
      kind: "books#volume",
      id: "PXa2bby0oQ0C",
      etag: "1cm/0pY58DM",
      selfLink: "https://www.googleapis.com/books/v1/volumes/PXa2bby0oQ0C",
      volumeInfo: {
        title: "JavaScript: The Good Parts",
        subtitle: "The Good Parts",
        authors: ["Douglas Crockford"],
        publisher: '"O\'Reilly Media, Inc."',
        publishedDate: "2008-05-08",
        description:
          "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that's more reliable, readable, and maintainable than the language as a whole—a subset you can use to create truly extensible and efficient code. Considered the JavaScript expert by many people in the development community, author Douglas Crockford identifies the abundance of good ideas that make JavaScript an outstanding object-oriented programming language-ideas such as functions, loose typing, dynamic objects, and an expressive object literal notation. Unfortunately, these good ideas are mixed in with bad and downright awful ideas, like a programming model based on global variables. When Java applets failed, JavaScript became the language of the Web by default, making its popularity almost completely independent of its qualities as a programming language. In JavaScript: The Good Parts, Crockford finally digs through the steaming pile of good intentions and blunders to give you a detailed look at all the genuinely elegant parts of JavaScript, including: Syntax Objects Functions Inheritance Arrays Regular expressions Methods Style Beautiful features The real beauty? As you move ahead with the subset of JavaScript that this book presents, you'll also sidestep the need to unlearn all the bad parts. Of course, if you want to find out more about the bad parts and how to use them badly, simply consult any other JavaScript book. With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9780596554873"
          },
          {
            type: "ISBN_10",
            identifier: "0596554877"
          }
        ],
        readingModes: {
          text: true,
          image: true
        },
        pageCount: 172,
        printType: "BOOK",
        categories: ["Computers"],
        averageRating: 4.5,
        ratingsCount: 44,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "0.6.6.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=PXa2bby0oQ0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=PXa2bby0oQ0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=PXa2bby0oQ0C&printsec=frontcover&dq=javascript&hl=&cd=2&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=PXa2bby0oQ0C&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=PXa2bby0oQ0C"
      },
      saleInfo: {
        country: "US",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 23.99,
          currencyCode: "USD"
        },
        retailPrice: {
          amount: 13.6,
          currencyCode: "USD"
        },
        buyLink:
          "https://play.google.com/store/books/details?id=PXa2bby0oQ0C&rdid=book-PXa2bby0oQ0C&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 2.399e7,
              currencyCode: "USD"
            },
            retailPrice: {
              amountInMicros: 1.36e7,
              currencyCode: "USD"
            },
            giftable: true
          }
        ]
      },
      accessInfo: {
        country: "US",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true
        },
        pdf: {
          isAvailable: true
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=PXa2bby0oQ0C&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false
      },
      searchInfo: {
        textSnippet:
          "If you develop sites or applications for the Web, this book is an absolute must."
      }
    },
    {
      kind: "books#volume",
      id: "UAYvDwAAQBAJ",
      etag: "UWB82rGkBsI",
      selfLink: "https://www.googleapis.com/books/v1/volumes/UAYvDwAAQBAJ",
      volumeInfo: {
        title: "Eloquent JavaScript",
        subtitle: "A Modern Introduction to Programming",
        authors: ["Marijn Haverbeke"],
        publisher: "No Starch Press",
        publishedDate: "2011-01-15",
        description:
          "JavaScript is at the heart of almost every modern Web application, whether it's Google Apps, Twitter, or the newest browser-based game. Though it's simple for beginners to pick up and play with, JavaScript is not a toy—it's a flexible and complex language that can be used to build full-scale applications. Eloquent JavaScript dives into this flourishing language and teaches you to write code that's beautiful and effective. By immersing you in example code and encouraging experimentation right from the start, the author quickly gives you the tools you need to build your own programs. As you follow along with examples like an artificial life simulation and a version of the classic game Sokoban, you'll learn to: –Understand the essential elements of programming: syntax, control, and data –Use object-oriented and functional programming techniques to organize and clarify your programs –Script the browser and make basic Web applications –Work with tools like regular expressions and XMLHttpRequest objects And since programming is an art that's best learned by doing, all example code is available online in an interactive sandbox for you to experiment with. With Eloquent JavaScript as your guide, you can tweak, expand, and modify the author's code, or throw it away and build your own creations from scratch. Before you know it, you'll be fluent in the language of the Web.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781593272937"
          },
          {
            type: "ISBN_10",
            identifier: "1593272936"
          }
        ],
        readingModes: {
          text: true,
          image: false
        },
        pageCount: 224,
        printType: "BOOK",
        categories: ["Computers"],
        averageRating: 3.5,
        ratingsCount: 2,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=UAYvDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=UAYvDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=UAYvDwAAQBAJ&printsec=frontcover&dq=javascript&hl=&cd=3&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=UAYvDwAAQBAJ&dq=javascript&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Eloquent_JavaScript.html?hl=&id=UAYvDwAAQBAJ"
      },
      saleInfo: {
        country: "US",
        saleability: "NOT_FOR_SALE",
        isEbook: false
      },
      accessInfo: {
        country: "US",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true
        },
        pdf: {
          isAvailable: false
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=UAYvDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false
      },
      searchInfo: {
        textSnippet:
          "Eloquent JavaScript dives into this flourishing language and teaches you to write code that&#39;s beautiful and effective."
      }
    },
    {
      kind: "books#volume",
      id: "LpctBAAAQBAJ",
      etag: "hjH6POux0sk",
      selfLink: "https://www.googleapis.com/books/v1/volumes/LpctBAAAQBAJ",
      volumeInfo: {
        title: "JavaScript and JQuery",
        subtitle: "Interactive Front-End Web Development",
        authors: ["Jon Duckett"],
        publisher: "John Wiley & Sons",
        publishedDate: "2014-06-30",
        description:
          "Provides information on how to make more interactive, engaging, and usable Web pages with JavaScript and jQuery, covering core programming concepts in both and such techniques as animation, form validation, and interactive galleries.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781118531648"
          },
          {
            type: "ISBN_10",
            identifier: "1118531647"
          }
        ],
        readingModes: {
          text: false,
          image: true
        },
        pageCount: 622,
        printType: "BOOK",
        categories: ["Computers"],
        averageRating: 5.0,
        ratingsCount: 1,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "0.9.1.0.preview.1",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=LpctBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=LpctBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=LpctBAAAQBAJ&printsec=frontcover&dq=javascript&hl=&cd=4&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=LpctBAAAQBAJ&dq=javascript&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/JavaScript_and_JQuery.html?hl=&id=LpctBAAAQBAJ"
      },
      saleInfo: {
        country: "US",
        saleability: "NOT_FOR_SALE",
        isEbook: false
      },
      accessInfo: {
        country: "US",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false
        },
        pdf: {
          isAvailable: false
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=LpctBAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false
      },
      searchInfo: {
        textSnippet:
          "Learn JavaScript and jQuery a nicer way This full-color book adopts a visual approach to teaching JavaScript &amp; jQuery, showing you how to make web pages more interactive and interfaces more intuitive through the use of inspiring code ..."
      }
    },
    {
      kind: "books#volume",
      id: "2weL0iAfrEMC",
      etag: "8zH3Yz7/fsA",
      selfLink: "https://www.googleapis.com/books/v1/volumes/2weL0iAfrEMC",
      volumeInfo: {
        title: "JavaScript: The Definitive Guide",
        subtitle: "The Definitive Guide",
        authors: ["David Flanagan"],
        publisher: '"O\'Reilly Media, Inc."',
        publishedDate: "2006-08-17",
        description:
          "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in today's Web 2.0 applications. This book is both an example-driven programmer's guide and a keep-on-your-desk reference, with new chapters that explain everything you need to know to get the most out of JavaScript, including: Scripted HTTP and Ajax XML processing Client-side graphics using the canvas tag Namespaces in JavaScript--essential when writing complex programs Classes, closures, persistence, Flash, and JavaScript embedded in Java applications Part I explains the core JavaScript language in detail. If you are new to JavaScript, it will teach you the language. If you are already a JavaScript programmer, Part I will sharpen your skills and deepen your understanding of the language. Part II explains the scripting environment provided by web browsers, with a focus on DOM scripting with unobtrusive JavaScript. The broad and deep coverage of client-side JavaScript is illustrated with many sophisticated examples that demonstrate how to: Generate a table of contents for an HTML document Display DHTML animations Automate form validation Draw dynamic pie charts Make HTML elements draggable Define keyboard shortcuts for web applications Create Ajax-enabled tool tips Use XPath and XSLT on XML documents loaded with Ajax And much more Part III is a complete reference for core JavaScript. It documents every class, object, constructor, method, function, property, and constant defined by JavaScript 1.5 and ECMAScript Version 3. Part IV is a reference for client-side JavaScript, covering legacy web browser APIs, the standard Level 2 DOM API, and emerging standards such as the XMLHttpRequest object and the canvas tag. More than 300,000 JavaScript programmers around the world have madethis their indispensable reference book for building JavaScript applications. \"A must-have reference for expert JavaScript programmers...well-organized and detailed.\" -- Brendan Eich, creator of JavaScript",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "0596554478"
          },
          {
            type: "ISBN_13",
            identifier: "9780596554477"
          }
        ],
        readingModes: {
          text: true,
          image: true
        },
        pageCount: 1032,
        printType: "BOOK",
        categories: ["Computers"],
        averageRating: 4.0,
        ratingsCount: 56,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "0.3.2.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=2weL0iAfrEMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=2weL0iAfrEMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=2weL0iAfrEMC&printsec=frontcover&dq=javascript&hl=&cd=5&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=2weL0iAfrEMC&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=2weL0iAfrEMC"
      },
      saleInfo: {
        country: "US",
        saleability: "FOR_SALE_AND_RENTAL",
        isEbook: true,
        listPrice: {
          amount: 39.99,
          currencyCode: "USD"
        },
        retailPrice: {
          amount: 23.49,
          currencyCode: "USD"
        },
        buyLink:
          "https://play.google.com/store/books/details?id=2weL0iAfrEMC&rdid=book-2weL0iAfrEMC&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 3.999e7,
              currencyCode: "USD"
            },
            retailPrice: {
              amountInMicros: 2.349e7,
              currencyCode: "USD"
            },
            giftable: true
          },
          {
            finskyOfferType: 3,
            listPrice: {
              amountInMicros: 2.0e7,
              currencyCode: "USD"
            },
            retailPrice: {
              amountInMicros: 2.0e7,
              currencyCode: "USD"
            },
            rentalDuration: {
              unit: "DAY",
              count: 90.0
            }
          }
        ]
      },
      accessInfo: {
        country: "US",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true
        },
        pdf: {
          isAvailable: true
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=2weL0iAfrEMC&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false
      },
      searchInfo: {
        textSnippet:
          "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in today&#39;s Web 2.0 applications."
      }
    },
    {
      kind: "books#volume",
      id: "qU3rAgAAQBAJ",
      etag: "QK+YJlvpDCc",
      selfLink: "https://www.googleapis.com/books/v1/volumes/qU3rAgAAQBAJ",
      volumeInfo: {
        title: "Speaking JavaScript",
        subtitle: "An In-Depth Guide for Programmers",
        authors: ["Axel Rauschmayer"],
        publisher: '"O\'Reilly Media, Inc."',
        publishedDate: "2014-02-25",
        description:
          "Like it or not, JavaScript is everywhere these days—from browser to server to mobile—and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position. Speaking JavaScript helps you approach the language with four standalone sections. First, a quick-start guide teaches you just enough of the language to help you be productive right away. More experienced JavaScript programmers will find a complete and easy-to-read reference that covers each language feature in depth. Complete contents include: JavaScript quick start: Familiar with object-oriented programming? This part helps you learn JavaScript quickly and properly. JavaScript in depth: Learn details of ECMAScript 5, from syntax, variables, functions, and object-oriented programming to regular expressions and JSON with lots of examples. Pick a topic and jump in. Background: Understand JavaScript’s history and its relationship with other programming languages. Tips, tools, and libraries: Survey existing style guides, best practices, advanced techniques, module systems, package managers, build tools, and learning resources.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781449364991"
          },
          {
            type: "ISBN_10",
            identifier: "1449364993"
          }
        ],
        readingModes: {
          text: true,
          image: true
        },
        pageCount: 460,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.4.5.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=qU3rAgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=qU3rAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=qU3rAgAAQBAJ&printsec=frontcover&dq=javascript&hl=&cd=6&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=qU3rAgAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=qU3rAgAAQBAJ"
      },
      saleInfo: {
        country: "US",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 42.99,
          currencyCode: "USD"
        },
        retailPrice: {
          amount: 24.99,
          currencyCode: "USD"
        },
        buyLink:
          "https://play.google.com/store/books/details?id=qU3rAgAAQBAJ&rdid=book-qU3rAgAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 4.299e7,
              currencyCode: "USD"
            },
            retailPrice: {
              amountInMicros: 2.499e7,
              currencyCode: "USD"
            },
            giftable: true
          }
        ]
      },
      accessInfo: {
        country: "US",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true
        },
        pdf: {
          isAvailable: true
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=qU3rAgAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false
      },
      searchInfo: {
        textSnippet:
          "This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position. Speaking JavaScript helps you approach the language with four standalone sections."
      }
    },
    {
      kind: "books#volume",
      id: "Nz9iAwAAQBAJ",
      etag: "yEWfq1giDM0",
      selfLink: "https://www.googleapis.com/books/v1/volumes/Nz9iAwAAQBAJ",
      volumeInfo: {
        title: "Effective JavaScript",
        subtitle: "68 Specific Ways to Harness the Power of JavaScript",
        authors: ["David Herman"],
        publisher: "Pearson Education",
        publishedDate: "2013",
        description:
          "Provides information on how to write better JavaScript programs, covering such topics as functions, arrays, library and API design, and concurrency.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9780321812186"
          },
          {
            type: "ISBN_10",
            identifier: "0321812182"
          }
        ],
        readingModes: {
          text: false,
          image: true
        },
        pageCount: 206,
        printType: "BOOK",
        categories: ["Computers"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "0.1.0.0.preview.1",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=Nz9iAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=Nz9iAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=Nz9iAwAAQBAJ&printsec=frontcover&dq=javascript&hl=&cd=7&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=Nz9iAwAAQBAJ&dq=javascript&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Effective_JavaScript.html?hl=&id=Nz9iAwAAQBAJ"
      },
      saleInfo: {
        country: "US",
        saleability: "NOT_FOR_SALE",
        isEbook: false
      },
      accessInfo: {
        country: "US",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
        epub: {
          isAvailable: false
        },
        pdf: {
          isAvailable: false
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=Nz9iAwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false
      },
      searchInfo: {
        textSnippet:
          "Provides information on how to write better JavaScript programs, covering such topics as functions, arrays, library and API design, and concurrency."
      }
    },
    {
      kind: "books#volume",
      id: "vlZaDwAAQBAJ",
      etag: "j4MlviBho4M",
      selfLink: "https://www.googleapis.com/books/v1/volumes/vlZaDwAAQBAJ",
      volumeInfo: {
        title: "Learning PHP, MySQL & JavaScript",
        subtitle: "With jQuery, CSS & HTML5",
        authors: ["Robin Nixon"],
        publisher: '"O\'Reilly Media, Inc."',
        publishedDate: "2018-05-09",
        description:
          "Build interactive, data-driven websites with the potent combination of open source technologies and web standards, even if you have only basic HTML knowledge. In this update to this popular hands-on guide, you’ll tackle dynamic web programming with the latest versions of today’s core technologies: PHP, MySQL, JavaScript, CSS, HTML5, and key jQuery libraries. Web designers will learn how to use these technologies together and pick up valuable web programming practices along the way—including how to optimize websites for mobile devices. At the end of the book, you’ll put everything together to build a fully functional social networking site suitable for both desktop and mobile browsers. Explore MySQL, from database structure to complex queries Use the MySQLi extension, PHP’s improved MySQL interface Create dynamic PHP web pages that tailor themselves to the user Manage cookies and sessions and maintain a high level of security Enhance the JavaScript language with jQuery and jQuery mobile libraries Use Ajax calls for background browser-server communication Style your web pages by acquiring CSS2 and CSS3 skills Implement HTML5 features, including geolocation, audio, video, and the canvas element Reformat your websites into mobile web apps",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781491979099"
          },
          {
            type: "ISBN_10",
            identifier: "1491979097"
          }
        ],
        readingModes: {
          text: true,
          image: true
        },
        pageCount: 832,
        printType: "BOOK",
        averageRating: 3.0,
        ratingsCount: 1,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.3.4.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=vlZaDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=vlZaDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=vlZaDwAAQBAJ&printsec=frontcover&dq=javascript&hl=&cd=8&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=vlZaDwAAQBAJ&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=vlZaDwAAQBAJ"
      },
      saleInfo: {
        country: "US",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 42.99,
          currencyCode: "USD"
        },
        retailPrice: {
          amount: 24.99,
          currencyCode: "USD"
        },
        buyLink:
          "https://play.google.com/store/books/details?id=vlZaDwAAQBAJ&rdid=book-vlZaDwAAQBAJ&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 4.299e7,
              currencyCode: "USD"
            },
            retailPrice: {
              amountInMicros: 2.499e7,
              currencyCode: "USD"
            },
            giftable: true
          }
        ]
      },
      accessInfo: {
        country: "US",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true
        },
        pdf: {
          isAvailable: true
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=vlZaDwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false
      },
      searchInfo: {
        textSnippet:
          "At the end of the book, you’ll put everything together to build a fully functional social networking site suitable for both desktop and mobile browsers."
      }
    },
    {
      kind: "books#volume",
      id: "WTZqecc9olUC",
      etag: "bwUo58s+pnk",
      selfLink: "https://www.googleapis.com/books/v1/volumes/WTZqecc9olUC",
      volumeInfo: {
        title: "JavaScript Patterns",
        subtitle: "Build Better Applications with Coding and Design Patterns",
        authors: ["Stoyan Stefanov"],
        publisher: '"O\'Reilly Media, Inc."',
        publishedDate: "2010-09-09",
        description:
          "What's the best approach for developing an application with JavaScript? This book helps you answer that question with numerous JavaScript coding patterns and best practices. If you're an experienced developer looking to solve problems related to objects, functions, inheritance, and other language-specific categories, the abstractions and code templates in this guide are ideal—whether you're using JavaScript to write a client-side, server-side, or desktop application. Written by JavaScript expert Stoyan Stefanov—Senior Yahoo! Technical and architect of YSlow 2.0, the web page performance optimization tool—JavaScript Patterns includes practical advice for implementing each pattern discussed, along with several hands-on examples. You'll also learn about anti-patterns: common programming approaches that cause more problems than they solve. Explore useful habits for writing high-quality JavaScript code, such as avoiding globals, using single var declarations, and more Learn why literal notation patterns are simpler alternatives to constructor functions Discover different ways to define a function in JavaScript Create objects that go beyond the basic patterns of using object literals and constructor functions Learn the options available for code reuse and inheritance in JavaScript Study sample JavaScript approaches to common design patterns such as Singleton, Factory, Decorator, and more Examine patterns that apply specifically to the client-side browser environment",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "1449396941"
          },
          {
            type: "ISBN_13",
            identifier: "9781449396947"
          }
        ],
        readingModes: {
          text: true,
          image: true
        },
        pageCount: 236,
        printType: "BOOK",
        categories: ["Computers"],
        averageRating: 4.5,
        ratingsCount: 4,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "1.7.6.0.preview.3",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=WTZqecc9olUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=WTZqecc9olUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=WTZqecc9olUC&printsec=frontcover&dq=javascript&hl=&cd=9&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=WTZqecc9olUC&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=WTZqecc9olUC"
      },
      saleInfo: {
        country: "US",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 23.99,
          currencyCode: "USD"
        },
        retailPrice: {
          amount: 16.99,
          currencyCode: "USD"
        },
        buyLink:
          "https://play.google.com/store/books/details?id=WTZqecc9olUC&rdid=book-WTZqecc9olUC&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 2.399e7,
              currencyCode: "USD"
            },
            retailPrice: {
              amountInMicros: 1.699e7,
              currencyCode: "USD"
            },
            giftable: true
          }
        ]
      },
      accessInfo: {
        country: "US",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true
        },
        pdf: {
          isAvailable: true
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=WTZqecc9olUC&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false
      },
      searchInfo: {
        textSnippet:
          "What&#39;s the best approach for developing an application with JavaScript? This book helps you answer that question with numerous JavaScript coding patterns and best practices."
      }
    },
    {
      kind: "books#volume",
      id: "ymDsh5yOfpsC",
      etag: "GJPc833agS0",
      selfLink: "https://www.googleapis.com/books/v1/volumes/ymDsh5yOfpsC",
      volumeInfo: {
        title: "JavaScript Web Applications",
        authors: ["Alex MacCaw"],
        publisher: '"O\'Reilly Media, Inc."',
        publishedDate: "2011-08-18",
        description:
          "Provides information on creating Web applications with JavaScript, covering such topics as structure, frameworks, templating, and communicating with the server.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781449303518"
          },
          {
            type: "ISBN_10",
            identifier: "144930351X"
          }
        ],
        readingModes: {
          text: false,
          image: true
        },
        pageCount: 255,
        printType: "BOOK",
        categories: ["Computers"],
        averageRating: 4.0,
        ratingsCount: 1,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "0.1.0.0.preview.1",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=ymDsh5yOfpsC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=ymDsh5yOfpsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        language: "en",
        previewLink:
          "http://books.google.com/books?id=ymDsh5yOfpsC&printsec=frontcover&dq=javascript&hl=&cd=10&source=gbs_api",
        infoLink:
          "http://books.google.com/books?id=ymDsh5yOfpsC&dq=javascript&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/JavaScript_Web_Applications.html?hl=&id=ymDsh5yOfpsC"
      },
      saleInfo: {
        country: "US",
        saleability: "NOT_FOR_SALE",
        isEbook: false
      },
      accessInfo: {
        country: "US",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false
        },
        pdf: {
          isAvailable: true
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=ymDsh5yOfpsC&hl=&printsec=frontcover&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false
      },
      searchInfo: {
        textSnippet:
          "Provides information on creating Web applications with JavaScript, covering such topics as structure, frameworks, templating, and communicating with the server."
      }
    }
  ]
};

ReactDOM.render(
  <App mockBookResults={mockBookResults} />,
  document.getElementById("root")
);
