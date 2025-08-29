// Course data
const courses = [
  {
    id: "html",
    name: "HTML",
    icon: "fab fa-html5",
    color: "#e34c26",
    description: "Master the building blocks of web development with comprehensive HTML training",
    topics:[
  {
    id: "html-introduction",
    name: "Introduction",
    videoId: "https://www.youtube.com/watch?v=G3e-cpL7ofc",
    documentation: "https://www.w3schools.com/html/html_intro.asp",
    quiz: [
      {
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language", 
          "High Tech Modern Language",
          "Home Tool Markup Language",
          "Hyperlink and Text Markup Language"
        ],
        correct: 0
      },
      {
        question: "What is the latest version of HTML?",
        options: ["HTML4", "HTML 2.0", "HTML5", "XHTML"],
        correct: 2
      },
      {
        question: "HTML files must have which file extension?",
        options: [".htm", ".html", ".web", ".txt"],
        correct: 1
      },
      {
        question: "Who invented HTML?",
        options: ["Tim Berners-Lee", "Steve Jobs", "Bill Gates", "Ken Thompson"],
        correct: 0
      },
      {
        question: "What does the <html> tag define?",
        options: [
          "A hyperlink",
          "The root of an HTML document",
          "A hidden comment",
          "A heading"
        ],
        correct: 1
      }
    ]
  },
  {
    id: "html-basics",
    name: "Basic Structure",
    videoId: "https://www.youtube.com/watch?v=G3e-cpL7ofc",
    documentation: "https://www.w3schools.com/html/html_basic.asp",
    quiz: [
      {
        question: "Which declaration is used to define the document type in HTML?",
        options: ["<!DOCTYPE html>", "<!HTML>", "<type: html>", "<doc html>"],
        correct: 0
      },
      {
        question: "What tag contains metadata like title and links?",
        options: ["<body>", "<meta>", "<head>", "<header>"],
        correct: 2
      },
      {
        question: "What tag holds the visible page content?",
        options: ["<head>", "<meta>", "<body>", "<base>"],
        correct: 2
      },
      {
        question: "How do you start an HTML comment?",
        options: ["<!-- comment -->", "// comment", "/* comment */", "# comment"],
        correct: 0
      },
      {
        question: "Which HTML element is used to show the title in the browser tab?",
        options: [
          "<heading>",
          "<title>",
          "<tab>",
          "<caption>"
        ],
        correct: 1
      }
    ]
  },
  {
    id: "html-headings-paragraphs",
    name: "Headings and Paragraphs",
    videoId: "https://www.youtube.com/watch?v=G3e-cpL7ofc",
    documentation: "https://www.w3schools.com/html/html_headings.asp",
    quiz: [
      {
        question: "Which tag is used for the largest heading?",
        options: ["<h6>", "<h1>", "<head>", "<heading>"],
        correct: 1
      },
      {
        question: "How many heading tags are in HTML?",
        options: ["3", "4", "5", "6"],
        correct: 3
      },
      {
        question: "Which tag is used to create a paragraph?",
        options: ["<para>", "<pr>", "<p>", "<par>"],
        correct: 2
      },
      {
        question: "Which heading tag defines the smallest heading?",
        options: ["<h1>", "<h3>", "<h6>", "<head>"],
        correct: 2
      },
      {
        question: "What is the default alignment for headings?",
        options: ["Right", "Left", "Center", "Justify"],
        correct: 1
      }
    ]
  },
  {
    id: "html-elements",
    name: "Elements & Attributes",
    videoId: "https://www.youtube.com/watch?v=G3e-cpL7ofc",
    documentation: "https://www.w3schools.com/html/html_elements.asp",
    quiz: [
      {
        question: "Which tag defines a block-level group of elements?",
        options: ["<div>", "<span>", "<section>", "<block>"],
        correct: 0
      },
      {
        question: "Which attribute provides an alternative text for <img>?",
        options: ["alt", "title", "desc", "src"],
        correct: 0
      },
      {
        question: "Which element is naturally inline?",
        options: ["<section>", "<div>", "<span>", "<article>"],
        correct: 2
      },
      {
        question: "What does the id attribute do?",
        options: [
          "Sets a unique identifier",
          "Defines a CSS class",
          "Creates a link",
          "Sets input value"
        ],
        correct: 0
      },
      {
        question: "How do you specify inline CSS?",
        options: ["css", "style", "format", "font"],
        correct: 1
      }
    ]
  },
  {
    id: "html-lists",
    name: "Lists",
    videoId: "https://www.youtube.com/watch?v=G3e-cpL7ofc",
    documentation: "https://www.w3schools.com/html/html_lists.asp",
    quiz: [
      {
        question: "Which tag creates an ordered list?",
        options: ["<ul>", "<li>", "<ol>", "<dl>"],
        correct: 2
      },
      {
        question: "Which tag represents a list item?",
        options: ["<item>", "<li>", "<ol>", "<ul>"],
        correct: 1
      },
      {
        question: "What is the default marker for unordered lists?",
        options: ["Numbers", "Bullets", "Dashes", "Squares"],
        correct: 1
      },
      {
        question: "Which is used for definition lists?",
        options: ["<dl>", "<ol>", "<ul>", "<desc>"],
        correct: 0
      },
      {
        question: "What attribute changes the bullet type of an unordered list?",
        options: ["order", "style", "type", "marker"],
        correct: 2
      }
    ]
  },
  {
    id: "html-links",
    name: "Links",
    videoId: "https://www.youtube.com/watch?v=G3e-cpL7ofc",
    documentation: "https://www.w3schools.com/html/html_links.asp",
    quiz: [
      {
        question: "Which HTML tag creates hyperlinks?",
        options: ["<a>", "<link>", "<href>", "<url>"],
        correct: 0
      },
      {
        question: "Which attribute is required for hyperlinks?",
        options: ["link", "ref", "href", "src"],
        correct: 2
      },
      {
        question: "How can you open a link in a new tab?",
        options: ['target="_blank"', 'window="_new"', 'open="tab"', 'href="new"'],
        correct: 0
      },
      {
        question: "Which is a relative URL?",
        options: [
          "/about.html",
          "https://example.com",
          "ftp://abc.com",
          "mailto:abc@mail.com"
        ],
        correct: 0
      },
      {
        question: "What does anchor tag with href=\"#\" do?",
        options: [
          "Scrolls to page top",
          "Links to homepage",
          "No action/default anchor",
          "Downloads a file"
        ],
        correct: 2
      }
    ]
  },
  {
    id: "html-images",
    name: "Images",
    videoId: "https://www.youtube.com/watch?v=G3e-cpL7ofc",
    documentation: "https://www.w3schools.com/html/html_images.asp",
    quiz: [
      {
        question: "Which tag is used to display images?",
        options: ["<img>", "<image>", "<media>", "<src>"],
        correct: 0
      },
      {
        question: "Which attribute contains the image file path?",
        options: ["ref", "src", "alt", "path"],
        correct: 1
      },
      {
        question: "Which is NOT valid for <img>?",
        options: ["alt", "src", "title", "value"],
        correct: 3
      },
      {
        question: "What’s <figure> used for?",
        options: [
          "Image showing only",
          "Caption and group images",
          "SVG drawing",
          "Image sizing"
        ],
        correct: 1
      },
      {
        question: "Which tag creates an image caption?",
        options: ["<caption>", "<figcaption>", "<imgcaption>", "<imgdesc>"],
        correct: 1
      }
    ]
  },
  {
    id: "html-tables",
    name: "Tables",
    videoId: "https://www.youtube.com/watch?v=G3e-cpL7ofc",
    documentation: "https://www.w3schools.com/html/html_tables.asp",
    quiz: [
      {
        question: "Which tag makes a table?",
        options: ["<table>", "<row>", "<col>", "<grid>"],
        correct: 0
      },
      {
        question: "What defines a table row?",
        options: ["<row>", "<tr>", "<td>", "<head>"],
        correct: 1
      },
      {
        question: "Which is for table header cells?",
        options: ["<th>", "<thead>", "<head>", "<header>"],
        correct: 0
      },
      {
        question: "How do you merge cells horizontally?",
        options: ["rowspan", "colspan", "merge", "span"],
        correct: 1
      },
      {
        question: "What adds a title to a table?",
        options: ["<caption>", "<tablelabel>", "<title>", "<summary>"],
        correct: 0
      }
    ]
  },
  {
    id: "html-forms",
    name: "Forms",
    videoId: "https://www.youtube.com/watch?v=kUMe1FH4CHE",
    documentation: "https://www.w3schools.com/html/html_forms.asp",
    quiz: [
      {
        question: "Which tag creates a form?",
        options: ["<form>", "<input>", "<fieldset>", "<action>"],
        correct: 0
      },
      {
        question: "Where do you set form submission URL?",
        options: ["method", "action", "name", "target"],
        correct: 1
      },
      {
        question: "Which input type hides characters (password)?",
        options: ["text", "number", "password", "hidden"],
        correct: 2
      },
      {
        question: "What does <label> provide?",
        options: [
          "Form CSS",
          "Linked, accessible text",
          "Auto-submit",
          "Validation only"
        ],
        correct: 1
      },
      {
        question: "How to make a field required?",
        options: ["required", "needsinput", "checked", "mandatory"],
        correct: 0
      }
    ]
  },
  {
    id: "html-media",
    name: "Media (Audio, Video)",
    videoId: "https://www.youtube.com/watch?v=kUMe1FH4CHE",
    documentation: "https://www.w3schools.com/html/html_media.asp",
    quiz: [
      {
        question: "Which tag is for audio files?",
        options: ["<audio>", "<video>", "<sound>", "<music>"],
        correct: 0
      },
      {
        question: "What tag plays videos?",
        options: ["<audio>", "<movie>", "<media>", "<video>"],
        correct: 3
      },
      {
        question: "What does the controls attribute do?",
        options: [
          "Plays media automatically",
          "Shows play/pause buttons",
          "Adds CSS effects",
          "Downloads file"
        ],
        correct: 1
      },
      {
        question: "How to add captions/subtitles in video?",
        options: ["<caption>", "<sub>", "<track>", "<script>"],
        correct: 2
      },
      {
        question: "How do you embed a YouTube video?",
        options: ["<video>", "<youtube>", "<iframe>", "<source>"],
        correct: 2
      }
    ]
  },
  {
    id: "html-semantic",
    name: "Semantic HTML",
    videoId: "https://www.youtube.com/watch?v=kUMe1FH4CHE",
    documentation: "https://www.w3schools.com/html/html5_semantic_elements.asp",
    quiz: [
      {
        question: "Which tag is for navigation?",
        options: ["<nav>", "<navigation>", "<link>", "<menu>"],
        correct: 0
      },
      {
        question: "Which is for page footer?",
        options: ["<below>", "<footer>", "<ending>", "<bottom>"],
        correct: 1
      },
      {
        question: "What’s <aside> for?",
        options: [
          "Main content",
          "Navigation bar",
          "Side content",
          "Article title"
        ],
        correct: 2
      },
      {
        question: "What does <section> define?",
        options: [
          "A styled div",
          "A thematic group of content",
          "External link",
          "Form entry"
        ],
        correct: 1
      },
      {
        question: "Why use semantic tags?",
        options: [
          "SEO and accessibility",
          "Adds color",
          "Speeds up browser",
          "For CSS only"
        ],
        correct: 0
      }
    ]
  }
]
  },
  {
    id: "css",
    name: "CSS",
    icon: "fab fa-css3-alt",
    color: "#1572b6",
    description: "Learn to style beautiful and responsive web interfaces with CSS",
    topics: [
  {
    id: "css-introduction",
    name: "Introduction to CSS",
    videoId: "https://www.youtube.com/watch?v=n4R2E7O-Ngo",
    documentation: "https://www.w3schools.com/css/css_intro.asp",
    quiz: [
      {
        question: "What does CSS stand for?",
        options: [
          "Computer Style Sheets",
          "Creative Style Sheets",
          "Cascading Style Sheets",
          "Colorful Style Sheets"
        ],
        correct: 2
      },
      {
        question: "Which HTML attribute is used to define inline styles?",
        options: ["font", "styles", "class", "style"],
        correct: 3
      },
      {
        question: "Which property is used to change the background color?",
        options: ["bgcolor", "background-color", "color", "background"],
        correct: 1
      },
      {
        question: "Which property controls the text size?",
        options: ["font-style", "font-size", "text-size", "text-style"],
        correct: 1
      },
      {
        question: "Which CSS property is used to make the text bold?",
        options: ["font-weight", "font-style", "text-weight", "text-style"],
        correct: 0
      }
    ]
  },
  {
    id: "css-selectors",
    name: "CSS Selectors",
    videoId: "https://www.youtube.com/watch?v=G3e-cpL7ofc&t=1042s",
    documentation: "https://www.w3schools.com/css/css_selectors.asp",
    quiz: [
      {
        question: "Which selector selects all elements?",
        options: [".", "#", "*", "all"],
        correct: 2
      },
      {
        question: "Which selector selects elements with a specific class?",
        options: ["#", ".", "*", "%"],
        correct: 1
      },
      {
        question: "How do you select an element with a specific ID?",
        options: [".id", "#id", "*id", "!id"],
        correct: 1
      },
      {
        question: "Which selector selects elements by attribute?",
        options: ["attribute", "[attr]", "#attr", ".attr"],
        correct: 1
      },
      {
        question: "What does the pseudo-class :hover do?",
        options: [
          "Selects elements clicked",
          "Selects elements on mouse over",
          "Selects hidden elements",
          "Selects elements when active"
        ],
        correct: 1
      }
    ]
  },
  {
    id: "css-box-model",
    name: "CSS Box Model",
    videoId: "https://www.youtube.com/watch?v=G3e-cpL7ofc&t=2500s",
    documentation: "https://www.w3schools.com/css/css_boxmodel.asp",
    quiz: [
      {
        question: "Which part of the box model contains the content?",
        options: ["padding", "border", "content", "margin"],
        correct: 2
      },
      {
        question: "Which part is outside the border in the box model?",
        options: ["padding", "margin", "content", "border"],
        correct: 1
      },
      {
        question: "What does padding do?",
        options: [
          "Space inside the border",
          "Space outside the margin",
          "Space between border and margin",
          "Space outside the border"
        ],
        correct: 0
      },
      {
        question: "Which property sets the width of the border?",
        options: ["border-color", "border-style", "border-width", "border-size"],
        correct: 2
      },
      {
        question: "What is the default value of box-sizing?",
        options: ["content-box", "border-box", "padding-box", "margin-box"],
        correct: 0
      }
    ]
  },
  {
    id: "css-color-background",
    name: "Colors and Backgrounds",
    videoId: "https://www.youtube.com/watch?v=G3e-cpL7ofc&t=2080s",
    documentation: "https://www.w3schools.com/css/css_colors.asp",
    quiz: [
      {
        question: "How do you set a background color?",
        options: ["color", "background-color", "bgcolor", "color-bg"],
        correct: 1
      },
      {
        question: "What syntax is used to define an RGB color?",
        options: [
          "rgb(255,255,255)",
          "#rgb(255,255,255)",
          "color(rgb)",
          "rgba(255,255,255,1)"
        ],
        correct: 0
      },
      {
        question: "How do you make a color semi-transparent?",
        options: ["rgba()", "rgb()", "transparent()", "opacity()"],
        correct: 0
      },
      {
        question: "Which CSS property controls the opacity of an element?",
        options: ["transparent", "visibility", "opacity", "display"],
        correct: 2
      },
      {
        question: "Which is NOT a valid color value in CSS?",
        options: ["#FFF", "rgb(0,0,0)", "transparent", "colorful"],
        correct: 3
      }
    ]
  },
  {
    id: "css-text-fonts",
    name: "Text and Fonts",
    videoId: "https://www.youtube.com/watch?v=G3e-cpL7ofc&t=4620s",
    documentation: "https://www.w3schools.com/css/css_text.asp",
    quiz: [
      {
        question: "Which property changes the text color?",
        options: ["text-color", "color", "font-color", "text-style"],
        correct: 1
      },
      {
        question: "What property changes the font size?",
        options: ["font-style", "text-size", "font-size", "text-style"],
        correct: 2
      },
      {
        question: "Which property aligns text?",
        options: ["text-align", "align", "font-align", "text-position"],
        correct: 0
      },
      {
        question: "Which property controls spacing between letters?",
        options: ["letter-spacing", "word-spacing", "font-spacing", "text-spacing"],
        correct: 0
      },
      {
        question: "How do you make text bold?",
        options: ["font-weight", "font-style", "font-bold", "text-weight"],
        correct: 0
      }
    ]
  },
  {
    id: "css-layout",
    name: "CSS Layout and Positioning",
    videoId: "https://www.youtube.com/watch?v=G3e-cpL7ofc&t=7500s",
    documentation: "https://www.w3schools.com/css/css_layout.asp",
    quiz: [
      {
        question: "Which property controls the position of an element?",
        options: ["position", "float", "display", "layout"],
        correct: 0
      },
      {
        question: "What are possible values of the position property?",
        options: ["static, relative, absolute, fixed", "block, inline", "top, left", "flex, grid"],
        correct: 0
      },
      {
        question: "Which property is used for floating elements?",
        options: ["float", "position", "clear", "alignment"],
        correct: 0
      },
      {
        question: "What does 'z-index' control?",
        options: ["Stack order", "Visibility", "Position", "Size"],
        correct: 0
      },
      {
        question: "Which display value does not take up space in the document flow?",
        options: ["block", "inline", "none", "flex"],
        correct: 2
      }
    ]
  },
  {
    id: "css-flexbox-grid",
    name: "Flexbox and Grid",
    videoId: "https://www.youtube.com/watch?v=G3e-cpL7ofc&t=13000s",
    documentation: "https://www.w3schools.com/css/css3_flexbox.asp",
    quiz: [
      {
        question: "Which property defines a flex container?",
        options: ["flex", "display: flex", "flexbox", "container"],
        correct: 1
      },
      {
        question: "Which property controls the direction of flex items?",
        options: ["flex-direction", "flex-align", "flex-wrap", "flex-order"],
        correct: 0
      },
      {
        question: "Which CSS layout system uses rows and columns?",
        options: ["Float", "Flexbox", "Grid", "Block"],
        correct: 2
      },
      {
        question: "Which property defines the number of columns in CSS Grid?",
        options: ["grid-template-columns", "grid-columns", "grid-cols", "columns"],
        correct: 0
      },
      {
        question: "Which value allows flex items to wrap onto multiple lines?",
        options: ["wrap", "nowrap", "wrap-reverse", "no-wrap"],
        correct: 0
      }
    ]
  },
  {
    id: "css-pseudo-classes-elements",
    name: "Pseudo-classes and Pseudo-elements",
    videoId: "https://www.youtube.com/watch?v=G3e-cpL7ofc&t=14000s",
    documentation: "https://www.w3schools.com/css/css_pseudo_classes.asp",
    quiz: [
      {
        question: "Which pseudo-class applies styles when an element is hovered over?",
        options: [":click", ":hover", ":active", ":visited"],
        correct: 1
      },
      {
        question: "Which pseudo-element represents the first letter of a block?",
        options: ["::first-line", "::first-letter", "::before", "::after"],
        correct: 1
      },
      {
        question: "Which pseudo-class represents the active link?",
        options: [":active", ":visited", ":link", ":focus"],
        correct: 0
      },
      {
        question: "Which pseudo-selector inserts content before an element?",
        options: ["::before", "::after", "::first-letter", "::first-line"],
        correct: 0
      },
      {
        question: "Which pseudo-class targets form input elements in focus?",
        options: [":focus", ":hover", ":checked", ":disabled"],
        correct: 0
      }
    ]
  },
  {
    id: "css-animations-transitions",
    name: "Animations and Transitions",
    videoId: "https://www.youtube.com/watch?v=G3e-cpL7ofc&t=16500s",
    documentation: "https://www.w3schools.com/css/css3_animations.asp",
    quiz: [
      {
        question: "Which CSS property is used to create smooth transitions?",
        options: ["animation", "transition", "transform", "fade"],
        correct: 1
      },
      {
        question: "Which rule defines keyframes for an animation?",
        options: ["@keyframes", "@animation", "@frames", "@motion"],
        correct: 0
      },
      {
        question: "Which property defines the duration of an animation?",
        options: ["animation-length", "animation-duration", "animation-time", "animation-speed"],
        correct: 1
      },
      {
        question: "What does easing control in animations?",
        options: ["Animation speed", "Timing function", "Delay", "Iteration count"],
        correct: 1
      },
      {
        question: "Which property defines the number of times the animation plays?",
        options: ["animation-iteration-count", "animation-repeat", "animation-frequency", "animation-cycles"],
        correct: 0
      }
    ]
  }
]
,
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "fab fa-js-square",
    color: "#f7df1e",
    description: "Build interactive web applications with modern JavaScript programming",
    topics: [
  {
    id: "js-introduction",
    name: "JavaScript Introduction and Basics",
    videoId: "https://www.youtube.com/watch?v=EerdGm-ehJQ",
    documentation: "https://www.w3schools.com/js/",
    quiz: [
      {
        question: "What is JavaScript primarily used for?",
        options: ["Styling web pages", "Adding interactivity to web pages", "Database management", "Server-side scripting only"],
        correct: 1
      },
      {
        question: "Which symbol is used for single-line comments?",
        options: ["//", "/*", "<!--", "#"],
        correct: 0
      },
      {
        question: "Which keyword declares a constant variable?",
        options: ["let", "var", "const", "constant"],
        correct: 2
      },
      {
        question: "How do you output a message to the browser console?",
        options: ["console.log()", "print()", "output()", "msg()"],
        correct: 0
      },
      {
        question: "Which function concatenates strings?",
        options: ["concat()", "add()", "join()", "combine()"],
        correct: 0
      }
    ]
  },
  {
    id: "js-data-types-and-variables",
    name: "Data Types and Variables",
    videoId: "https://www.youtube.com/watch?v=EerdGm-ehJQ&t=800s",
    documentation: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures",
    quiz: [
      {
        question: "Which is NOT a primitive data type?",
        options: ["String", "Number", "Boolean", "Array"],
        correct: 3
      },
      {
        question: "How do you declare a changeable variable?",
        options: ["const", "let", "var", "both let and var"],
        correct: 3
      },
      {
        question: "What type is null?",
        options: ["object", "undefined", "null", "number"],
        correct: 0
      },
      {
        question: "How to check variable type?",
        options: ["typeof", "type", "check", "typeofvar"],
        correct: 0
      },
      {
        question: "Which declares block-scoped variable?",
        options: ["var", "let", "const", "both let and const"],
        correct: 1
      }
    ]
  },
  {
    id: "js-operators-and-control-flow",
    name: "Operators and Control Flow",
    videoId: "https://www.youtube.com/watch?v=EerdGm-ehJQ&t=2000s",
    documentation: "https://javascript.info/ifelse",
    quiz: [
      {
        question: "Which operator assigns a value?",
        options: ["=", "==", "===", "=>"],
        correct: 0
      },
      {
        question: "'==' compares?",
        options: ["Value and type", "Values only", "Types only", "None"],
        correct: 1
      },
      {
        question: "What keyword for condition?",
        options: ["if", "switch", "for", "while"],
        correct: 0
      },
      {
        question: "Loop that runs while true?",
        options: ["for", "do-while", "while", "switch"],
        correct: 2
      },
      {
        question: "'break' does?",
        options: ["Exit loop", "Skip iteration", "End program", "None"],
        correct: 0
      }
    ]
  },
  {
    id: "js-functions",
    name: "Functions",
    videoId: "https://www.youtube.com/watch?v=EerdGm-ehJQ&t=5500s",
    documentation: "https://javascript.info/function-basics",
    quiz: [
      {
        question: "How to define a function?",
        options: ["function f() {}", "def f() {}", "func f() {}", "method f() {}"],
        correct: 0
      },
      {
        question: "What returns value?",
        options: ["break", "exit", "return", "yield"],
        correct: 2
      },
      {
        question: "Function expression?",
        options: ["Function assigned to variable", "Anonymous function", "Both", "None"],
        correct: 2
      },
      {
        question: "Arrow function syntax?",
        options: ["()=>", "->", ":=>", "::="],
        correct: 0
      },
      {
        question: "Hoisting is?",
        options: ["Declarations moved up", "Delayed run", "Nested functions", "None"],
        correct: 0
      }
    ]
  },
  {
    id: "js-objects-and-arrays",
    name: "Objects and Arrays",
    videoId: "https://www.youtube.com/watch?v=EerdGm-ehJQ&t=9000s",
    documentation: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects",
    quiz: [
      {
        question: "Object declaration?",
        options: ["var obj = {}", "var obj = []", "var obj = ()", "var obj = <>"],
        correct: 0
      },
      {
        question: "Add element to array's end?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correct: 0
      },
      {
        question: "Access first element of arr?",
        options: ["arr[1]", "arr[0]", "arr.first()", "arr.get(0)"],
        correct: 1
      },
      {
        question: "Object property?",
        options: ["Key-value pair", "Function", "Event", "Variable"],
        correct: 0
      },
      {
        question: "Delete object prop?",
        options: ["delete obj.prop", "remove obj.prop", "clear obj.prop", "pop obj.prop"],
        correct: 0
      }
    ]
  },
  {
    id: "js-events-and-dom",
    name: "Events and DOM Manipulation",
    videoId: "https://www.youtube.com/watch?v=EerdGm-ehJQ&t=11000s",
    documentation: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction",
    quiz: [
      {
        question: "What does DOM stand for?",
        options: ["Document Object Model", "Data Object Model", "Document Order Model", "Direct Object Method"],
        correct: 0
      },
      {
        question: "How to attach a click event handler?",
        options: ["element.addEventListener('click', fn)", "element.onclick = fn", "Both", "None"],
        correct: 2
      },
      {
        question: "Which method selects element by ID?",
        options: ["getElementById()", "querySelectorAll()", "getElementsByClassName()", "querySelector()"],
        correct: 0
      },
      {
        question: "What is event bubbling?",
        options: [
          "Event propagates from child to parent",
          "Event propagates from parent to child",
          "Event stops immediate propagation",
          "None"
        ],
        correct: 0
      },
      {
        question: "How to stop event bubbling?",
        options: ["event.stopPropagation()", "return false", "event.preventDefault()", "event.cancel()"],
        correct: 0
      }
    ]
  },
  {
    id: "js-asynchronous-js",
    name: "Asynchronous JavaScript",
    videoId: "https://www.youtube.com/watch?v=EerdGm-ehJQ&t=13000s",
    documentation: "https://javascript.info/async",
    quiz: [
      {
        question: "What is a Promise?",
        options: ["An object for async operations", "String object", "Calculate number", "CSS selector"],
        correct: 0
      },
      {
        question: "Which method handles resolved promises?",
        options: [".then()", ".catch()", ".finally()", ".all()"],
        correct: 0
      },
      {
        question: "Async function declared with?",
        options: ["function async", "async function", "async()", "async:"],
        correct: 1
      },
      {
        question: "What does await do?",
        options: [
          "Pauses async function until promise resolves",
          "Declares a promise",
          "Runs function immediately",
          "Throws error"
        ],
        correct: 0
      },
      {
        question: "Which handles rejected promise?",
        options: [".catch()", ".then()", ".finally()", ".all()"],
        correct: 0
      }
    ]
  },
  {
    id: "js-classes-modules",
    name: "Classes and Modules",
    videoId: "https://www.youtube.com/watch?v=EerdGm-ehJQ&t=15000s",
    documentation: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Classes",
    quiz: [
      {
        question: "How do you define a class?",
        options: ["class MyClass {}", "function class MyClass {}", "MyClass = class {}", "New class MyClass {}"],
        correct: 0
      },
      {
        question: "How do you create an instance?",
        options: ["new MyClass()", "MyClass()", "create MyClass()", "instance MyClass()"],
        correct: 0
      },
      {
        question: "What is a module?",
        options: [
          "A file containing JavaScript code imported/exported",
          "A CSS framework",
          "An HTML snippet",
          "A database"
        ],
        correct: 0
      },
      {
        question: "Which keyword exports code from a module?",
        options: ["export", "public", "module", "import"],
        correct: 0
      },
      {
        question: "Which keyword imports code into a module?",
        options: ["include", "import", "fetch", "require"],
        correct: 1
      }
    ]
  }
]
,
  },
  {
    id: "sfmc",
    name: "Salesforce Marketing Cloud",
    icon: "fas fa-cloud",
    color: "#0078d4",
    description: "Master email marketing automation with Salesforce Marketing Cloud",
    topics: [
      {
        id: "sfmc-intro",
        name: "SFMC Introduction",
        videoId: "H7R1RTxYhvU",
        documentation: "https://help.salesforce.com/s/articleView?id=sf.mc_overview.htm",
        quiz: [
          {
            question: "What is Salesforce Marketing Cloud primarily used for?",
            options: [
              "CRM",
              "Digital Marketing",
              "Sales Analytics",
              "Project Management",
            ],
            correct: 1,
          },
        ],
      },
      {
        id: "sfmc-email-studio",
        name: "Email Studio",
        videoId: "kX3wJyiYhgI",
        documentation: "https://help.salesforce.com/s/articleView?id=sf.mc_es_email_studio.htm",
        quiz: [
          {
            question: "Which studio is used for email marketing in SFMC?",
            options: [
              "Journey Builder",
              "Email Studio",
              "Content Builder",
              "Automation Studio",
            ],
            correct: 1,
          },
        ],
      },
    
  {
    id: "sfmc-introduction",
    name: "Introduction to Salesforce Marketing Cloud",
    videoId: "https://www.youtube.com/watch?v=EoWI_ROFjSw",
    documentation: "https://help.salesforce.com/s/articleView?id=mktg.mktg_admin_setup_overview.htm",
    quiz: [
      {
        question: "What is Salesforce Marketing Cloud primarily used for?",
        options: [
          "Customer relationship management",
          "Marketing automation and customer engagement",
          "Financial accounting",
          "Project management"
        ],
        correct: 1
      },
      {
        question: "Which Salesforce product does Marketing Cloud fall under?",
        options: [
          "Sales Cloud",
          "Service Cloud",
          "Customer 360",
          "AppExchange"
        ],
        correct: 2
      },
      {
        question: "What are the key communication channels Marketing Cloud supports?",
        options: [
          "Email, SMS, Push notifications",
          "Phone calls and Chat only",
          "Physical mail",
          "Social media management only"
        ],
        correct: 0
      },
      {
        question: "Which user role typically manages Marketing Cloud setup?",
        options: [
          "Sales manager",
          "Marketing admin",
          "Developer",
          "Support agent"
        ],
        correct: 1
      },
      {
        question: "What is the purpose of the Marketing Cloud Setup Assistant?",
        options: [
          "Automates campaign creation",
          "Guides administrators through configuration steps",
          "Manages user licenses",
          "Monitors campaign statistics"
        ],
        correct: 1
      }
    ]
  },
  {
    id: "sfmc-email-studio",
    name: "Email Studio in Salesforce Marketing Cloud",
    videoId: "https://www.youtube.com/watch?v=SxI19VHlNXU",
    documentation: "https://help.salesforce.com/s/articleView?id=mktg.mc_email.htm",
    quiz: [
      {
        question: "What is Email Studio used for in SFMC?",
        options: [
          "Building and sending personalized email campaigns",
          "Managing customer support tickets",
          "Phone call management",
          "Social media posting"
        ],
        correct: 0
      },
      {
        question: "Which feature helps track email opens and clicks?",
        options: [
          "Journey Builder",
          "Email Tracking",
          "Audience Studio",
          "Automation Studio"
        ],
        correct: 1
      },
      {
        question: "What type of content can be created in Email Studio?",
        options: [
          "Transactional and marketing emails",
          "Voice messages",
          "Printed mail",
          "Text messages"
        ],
        correct: 0
      },
      {
        question: "Can Email Studio send emails without coding?",
        options: [
          "No, coding is always required",
          "Yes, with drag-and-drop interface",
          "Only templates require coding",
          "Only for transactional emails"
        ],
        correct: 1
      },
      {
        question: "Which data extension type is commonly used to store subscriber lists in Email Studio?",
        options: [
          "Standard Data Extension",
          "Salesforce Data Extension",
          "Temporary Data Extension",
          "Data Filter"
        ],
        correct: 0
      }
    ]
  },
  {
    id: "sfmc-journey-builder",
    name: "Journey Builder",
    videoId: "https://www.youtube.com/watch?v=jqbAaqkJI4g",
    documentation: "https://help.salesforce.com/s/articleView?id=mktg_jb_overview.htm",
    quiz: [
      {
        question: "What is the primary purpose of Journey Builder?",
        options: [
          "Create and automate customer journeys",
          "Build websites",
          "Manage support cases",
          "Store customer data"
        ],
        correct: 0
      },
      {
        question: "Which element defines a starting point in Journey Builder?",
        options: [
          "Entry Event",
          "Journey Start",
          "Campaign Launch",
          "Trigger Point"
        ],
        correct: 0
      },
      {
        question: "Can Journey Builder send multi-channel messages?",
        options: [
          "No, only email",
          "Yes, emails, SMS, push notifications",
          "Only SMS",
          "Only social media"
        ],
        correct: 1
      },
      {
        question: "What feature helps add decision-making in journeys?",
        options: [
          "Split Activity",
          "Send Email Activity",
          "Wait Activity",
          "Goal Setting"
        ],
        correct: 0
      },
      {
        question: "What type of data is used to drive journeys?",
        options: [
          "Event and contact data",
          "Financial data",
          "External CRM data only",
          "None"
        ],
        correct: 0
      }
    ]
  },
  {
    id: "sfmc-automation-studio",
    name: "Automation Studio",
    videoId: "https://www.youtube.com/watch?v=kUMe1FH4CHE",
    documentation: "https://help.salesforce.com/s/articleView?id=mktg.mc_automation_studio.htm",
    quiz: [
      {
        question: "What is Automation Studio used for?",
        options: [
          "Create automated marketing workflows",
          "Send emails manually",
          "Manage user roles",
          "Create landing pages"
        ],
        correct: 0
      },
      {
        question: "Which of the following can be automated?",
        options: [
          "Data imports, segmentation, emails",
          "Only emails",
          "Only SMS sends",
          "User management"
        ],
        correct: 0
      },
      {
        question: "Which action defines a scheduled automation?",
        options: [
          "Schedule Activity",
          "Trigger Activity",
          "Run Now",
          "Event Activity"
        ],
        correct: 0
      },
      {
        question: "Can SQL queries be used in Automation Studio?",
        options: [
          "No",
          "Yes to filter and manipulate data",
          "Only with API access",
          "Only with external tools"
        ],
        correct: 1
      },
      {
        question: "Which activity imports data from external sources?",
        options: [
          "Import Activity",
          "Extract Activity",
          "Filter Activity",
          "Send Email Activity"
        ],
        correct: 0
      }
    ]
  },
  {
    id: "sfmc-contact-builder",
    name: "Contact Builder",
    videoId: "https://www.youtube.com/watch?v=WMH5wXWGsOc",
    documentation: "https://help.salesforce.com/s/articleView?id=mktg_contact_builder.htm",
    quiz: [
      {
        question: "What is Contact Builder used for?",
        options: [
          "Manage customer data and relationships in SFMC",
          "Build emails",
          "Create reports",
          "Manage Social Media"
        ],
        correct: 0
      },
      {
        question: "Which feature connects various data sources in Contact Builder?",
        options: [
          "Data Designer",
          "Data Extensions",
          "Journey Builder",
          "Automation Studio"
        ],
        correct: 0
      },
      {
        question: "What does a data extension represent?",
        options: [
          "Table of data records",
          "Email template",
          "Contact journey",
          "Automation schedule"
        ],
        correct: 0
      },
      {
        question: "What is a Contact Key?",
        options: [
          "Primary identifier for contacts",
          "Password for contacts",
          "Email ID",
          "Campaign ID"
        ],
        correct: 0
      },
      {
        question: "What type of relationships can be defined in Contact Builder?",
        options: [
          "One-to-one, one-to-many",
          "Only one-to-one",
          "Only many-to-many",
          "None"
        ],
        correct: 0
      }
    ]
  }
]

  },
  {
    id: "ampscript",
    name: "AMPscript",
    icon: "fas fa-code",
    color: "#ff6b6b",
    description: "Dynamic personalization scripting language for marketing automation",
    topics: [
  {
    id: "ampscript-introduction",
    name: "Introduction to AMPscript",
    videoId: "https://www.youtube.com/watch?v=AuphZ0T7cuc",
    documentation: "https://trailhead.salesforce.com/content/learn/modules/marketing-cloud-programmatic-languages/explore-ampscript",
    quiz: [
      {
        question: "What is AMPscript?",
        options: [
          "A Salesforce Marketing Cloud proprietary scripting language",
          "A HTML extension",
          "A CRM tool",
          "A project management tool"
        ],
        correct: 0
      },
      {
        question: "Which syntax indicates an AMPscript block?",
        options: [
          "%%[  ]%%",
          "<!-- --!>",
          "{ }",
          "<script>"
        ],
        correct: 0
      },
      {
        question: "What does the Output() function do in AMPscript?",
        options: [
          "It prints a variable's value",
          "It stops the script",
          "It saves data",
          "It deletes a variable"
        ],
        correct: 0
      },
      {
        question: "Which AMPscript keyword declares a variable?",
        options: [
          "SET",
          "VAR",
          "DECLARE",
          "LET"
        ],
        correct: 1
      },
      {
        question: "AMPscript can be used to personalize which types of content?",
        options: [
          "Emails, SMS, landing pages",
          "Only emails",
          "Only SMS messages",
          "Web apps"
        ],
        correct: 0
      }
    ]
  },
  {
    id: "ampscript-variables-control-structures",
    name: "Variables and Control Structures",
    videoId: "https://www.youtube.com/watch?v=63qkgaeYwjw",
    documentation: "https://developer.salesforce.com/docs/marketing/marketing-cloud-ampscript/guide/mc-ampscript-guide-language-basics.html",
    quiz: [
      {
        question: "How do you assign a value to a variable in AMPscript?",
        options: [
          "SET @varName = value",
          "var @varName = value",
          "DECLARE @varName = value",
          "LET @varName = value"
        ],
        correct: 0
      },
      {
        question: "Which block starts an IF condition in AMPscript?",
        options: [
          "IF condition THEN",
          "if()",
          "when condition",
          "conditional block"
        ],
        correct: 0
      },
      {
        question: "How do you close an IF block?",
        options: [
          "ENDIF",
          "END IF",
          "else",
          "close if"
        ],
        correct: 0
      },
      {
        question: "Can ELSEIF be used in AMPscript conditional blocks?",
        options: [
          "Yes",
          "No",
          "Only ELSE is allowed",
          "Only nested IF"
        ],
        correct: 0
      },
      {
        question: "Which function returns the lowercase of a string in AMPscript?",
        options: [
          "LOWERCASE()",
          "tolower()",
          "lower()",
          "toLowerCase()"
        ],
        correct: 0
      }
    ]
  },
  {
    id: "ampscript-data-extensions",
    name: "Using Data Extensions with AMPscript",
    videoId: "https://www.youtube.com/watch?v=AuphZ0T7cuc&t=600s",
    documentation: "https://ampscript.guide/data-extension-processing/",
    quiz: [
      {
        question: "How do you retrieve data from a data extension in AMPscript?",
        options: [
          "Lookup() function",
          "Get() function",
          "Select() function",
          "Fetch() function"
        ],
        correct: 0
      },
      {
        question: "Which function inserts or updates data in a data extension?",
        options: [
          "UpsertDE()",
          "InsertDE()",
          "UpdateDE()",
          "SetDE()"
        ],
        correct: 0
      },
      {
        question: "Can AMPscript use SQL queries directly inside the script?",
        options: [
          "No, but SQL can be used in Query Activities",
          "Yes, directly in AMPscript",
          "Only SELECT statements",
          "Only INSERT statements"
        ],
        correct: 0
      },
      {
        question: "What type of object is a Data Extension?",
        options: [
          "A table-like structure to store subscriber data",
          "A CRM contact",
          "An email template",
          "A marketing automation"
        ],
        correct: 0
      },
      {
        question: "Can you dynamically set email content based on data extension values in AMPscript?",
        options: [
          "Yes",
          "No",
          "Only with AMPscript extensions",
          "Only with external APIs"
        ],
        correct: 0
      }
    ]
  },
  {
    id: "ampscript-functions",
    name: "AMPscript Functions and String Manipulation",
    videoId: "https://www.youtube.com/watch?v=63qkgaeYwjw&t=1000s",
    documentation: "https://ampscript.com/ampscript-basics/",
    quiz: [
      {
        question: "Which function concatenates multiple strings in AMPscript?",
        options: [
          "Concat()",
          "Combine()",
          "Join()",
          "Add()"
        ],
        correct: 0
      },
      {
        question: "How do you check the length of a string in AMPscript?",
        options: [
          "Length()",
          "Len()",
          "StringLength()",
          "CharCount()"
        ],
        correct: 1
      },
      {
        question: "Which function converts text to uppercase?",
        options: [
          "Uppercase()",
          "UPPER()",
          "Upper()",
          "ToUpperCase()"
        ],
        correct: 1
      },
      {
        question: "What function trims spaces from text?",
        options: [
          "Trim()",
          "Cut()",
          "Erase()",
          "Remove()"
        ],
        correct: 0
      },
      {
        question: "Can you embed AMPscript functions inside HTML emails?",
        options: [
          "Yes, for personalization",
          "No",
          "Only in plain text emails",
          "Only in Cloud Pages"
        ],
        correct: 0
      }
    ]
  }
]
,
  },
  {
    id: "sql",
    name: "SQL",
    icon: "fas fa-database",
    color: "#336791",
    description: "Query and manage database systems effectively for data-driven marketing",
    topics: [
  {
    id: "sql-introduction",
    name: "Introduction to SQL",
    videoId: "https://www.youtube.com/watch?v=8IuqFU5gw1E",
    documentation: "https://www.w3schools.com/sql/",
    quiz: [
      {
        question: "What does SQL stand for?",
        options: [
          "Structured Query Language",
          "Simple Query Language",
          "Statement Question Language",
          "Script Query Language"
        ],
        correct: 0
      },
      {
        question: "Which SQL statement is used to fetch data from a database?",
        options: ["GET", "FETCH", "SELECT", "EXTRACT"],
        correct: 2
      },
      {
        question: "Which command is used to delete all rows in a table?",
        options: ["REMOVE", "TRUNCATE", "DELETE", "ERASE"],
        correct: 1
      },
      {
        question: "Which command adds new data to a table?",
        options: ["INSERT INTO", "ADD ROW", "CREATE", "UPDATE"],
        correct: 0
      },
      {
        question: "What type of language is SQL?",
        options: ["Procedural", "Object-Oriented", "Declarative", "Markup"],
        correct: 2
      }
    ]
  },
  {
    id: "sql-commands",
    name: "SQL Commands and Clauses",
    videoId: "https://www.youtube.com/watch?v=q_JsgpiuY98",
    documentation: "https://www.w3schools.com/sql/sql_ref_keywords.asp",
    quiz: [
      {
        question: "Which keyword is used to filter records in SQL?",
        options: ["FILTER BY", "WHERE", "HAVING", "GROUP BY"],
        correct: 1
      },
      {
        question: "Which clause groups rows that have the same values?",
        options: ["GROUP BY", "ORDER BY", "HAVING", "JOIN"],
        correct: 0
      },
      {
        question: "Which keyword orders the result-set in SQL?",
        options: ["ORDER BY", "SORT BY", "GROUP BY", "FILTER"],
        correct: 0
      },
      {
        question: "Which command modifies existing data in a table?",
        options: ["UPDATE", "MODIFY", "CHANGE", "ALTER"],
        correct: 0
      },
      {
        question: "Which keyword is used to combine the result of two or more SELECT statements?",
        options: ["JOIN", "INTERSECT", "UNION", "MERGE"],
        correct: 2
      }
    ]
  },
  {
    id: "sql-joins",
    name: "SQL Joins",
    videoId: "https://www.youtube.com/watch?v=yE6tIle64tU",
    documentation: "https://www.w3schools.com/sql/sql_join.asp",
    quiz: [
      {
        question: "Which join returns all rows when there is a match in both tables?",
        options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"],
        correct: 0
      },
      {
        question: "Which join returns all rows from the left table and matching rows from the right table?",
        options: ["LEFT JOIN", "INNER JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
        correct: 0
      },
      {
        question: "Which keyword can combine rows from two tables based on a related column?",
        options: ["MERGE", "JOIN", "UNITE", "CONNECT"],
        correct: 1
      },
      {
        question: "What does a CROSS JOIN do?",
        options: [
          "Returns the Cartesian product of two tables",
          "Joins tables based on matching columns",
          "Filters matching rows only",
          "Returns unmatched rows"
        ],
        correct: 0
      },
      {
        question: "Which join includes all records when there is a match and also unmatched records from both tables?",
        options: ["FULL OUTER JOIN", "LEFT JOIN", "INNER JOIN", "RIGHT JOIN"],
        correct: 0
      }
    ]
  },
  {
    id: "sql-functions",
    name: "SQL Functions",
    videoId: "https://www.youtube.com/watch?v=8IuqFU5gw1E&t=2430s",
    documentation: "https://www.w3schools.com/sql/sql_functions.asp",
    quiz: [
      {
        question: "Which SQL function returns the total number of rows?",
        options: ["COUNT()", "SUM()", "TOTAL()", "SIZE()"],
        correct: 0
      },
      {
        question: "Which function calculates the average value of a numeric column?",
        options: ["AVG()", "MEAN()", "SUM()", "TOTAL()"],
        correct: 0
      },
      {
        question: "What does LOWER() do in SQL?",
        options: [
          "Converts text to uppercase",
          "Converts text to lowercase",
          "Returns a substring",
          "Calculates length of string"
        ],
        correct: 1
      },
      {
        question: "Which function returns the current date and time?",
        options: ["NOW()", "CURRENT_TIME()", "DATE()", "TIME()"],
        correct: 0
      },
      {
        question: "Which function rounds a numeric value?",
        options: ["ROUND()", "CEIL()", "FLOOR()", "TRUNC()"],
        correct: 0
      }
    ]
  },
  {
    id: "sql-subqueries",
    name: "Subqueries in SQL",
    videoId: "https://www.youtube.com/watch?v=q_JsgpiuY98&t=2100s",
    documentation: "https://www.w3schools.com/sql/sql_subqueries.asp",
    quiz: [
      {
        question: "What is a subquery?",
        options: [
          "A query inside another query",
          "A query that returns no results",
          "A join between two tables",
          "An outdated SQL command"
        ],
        correct: 0
      },
      {
        question: "Where can subqueries be used?",
        options: [
          "In SELECT, WHERE, and FROM clauses",
          "Only in SELECT statements",
          "Only in WHERE clauses",
          "Only in FROM clauses"
        ],
        correct: 0
      },
      {
        question: "Can subqueries return multiple columns?",
        options: [
          "Yes",
          "No",
          "Only in some databases",
          "Only in JOINs"
        ],
        correct: 0
      },
      {
        question: "Which keyword allows a subquery to be referenced as a table?",
        options: ["ALIAS", "EXISTS", "WITH", "TEMP"],
        correct: 2
      },
      {
        question: "What type of subquery returns a single value?",
        options: [
          "Scalar subquery",
          "Correlated subquery",
          "Nested subquery",
          "Join subquery"
        ],
        correct: 0
      }
    ]
  }
],
  },
];

// Celebration messages
const celebrationMessages = [
  "🎉 Awesome! You've completed another topic!",
  "🌟 Great job! Knowledge unlocked!",
  "🚀 Well done! You're making amazing progress!",
  "💪 Fantastic! Another step closer to mastery!",
  "🎯 Excellent work! Topic completed successfully!",
  "⭐ Brilliant! You're on fire today!",
  "🏆 Outstanding! Learning goal achieved!",
];