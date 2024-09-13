import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import BackButton from "../components/Buttons/BackButton/BackButton";
import NextButton from "../components/Buttons/NextButton/NextButton";

import { sectionsData } from "../sectionsData";
import BackButtonExtended from "../components/Buttons/BackButtonExtended/BackButtonExtended";

const codeString1 = `function greet(name: string): string {
    return "Hello, \${name}!";
}

console.log(greet("Alice")); // Output: Hello, Alice!
`;

const codeString2 = `function greet(name: string, greeting?: string): string {
    return greeting ? '\${greeting}, \${name}!' : 'Hello, \${name}!';
}

console.log(greet("Alice"));          // Output: Hello, Alice!
console.log(greet("Alice", "Hi"));    // Output: Hi, Alice!
`;

const codeString3 = `function greet(name: string, greeting: string = "Hello"): string {
    return '\${greeting}, \${name}!';
}

console.log(greet("Alice"));          // Output: Hello, Alice!
console.log(greet("Alice", "Hi"));    // Output: Hi, Alice!
`;

const codeString4 = `function add(x: number, y: number): number {
    return x + y;
}
`;

const codeString5 = `function logMessage(message: string): void {
    console.log(message);
}

logMessage("This is a log message.");
`;

const codeString6 = `type GreetFunction = (name: string) => string;

const greet: GreetFunction = (name: string): string => {
    return 'Hello, \${name}!';
}

console.log(greet("Alice"));
`;

const codeString7 = `function format(input: number): string;
function format(input: string): string;

function format(input: number | string): string {
    if (typeof input === "number") {
        return 'Number: \${input.toFixed(2)}';
    } else {
        return 'String: \${input.toUpperCase()}';
    }
}

console.log(format(123.456));   // Output: Number: 123.46
console.log(format("hello"));   // Output: String: HELLO
`;

const codeString8 = `function sum(...numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3));      // Output: 6
console.log(sum(10, 20, 30, 40)); // Output: 100
`;

const codeString9 = `const multiply = (a: number, b: number): number => a * b;

console.log(multiply(5, 3));  // Output: 15
`;

export default function Section() {
  return (
    <div className="page section">
      <div className="page__header">
        <BackButton />
        <h2>Section 3 - Functions in TypeScript</h2>
      </div>
      <h2>Function Declaration with Type Annotations</h2>
      <p>
        In TypeScript, you can specify types for function parameters
        and return values. The syntax looks like this:
      </p>
      <SyntaxHighlighter
        className="wrap-white-space"
        language="javascript"
        style={darcula}
      >
        {codeString1}
      </SyntaxHighlighter>
      <p>In this example:</p>
      <ul>
        <li>
          <span className="highlighted">name: string </span>specifies
          that the <span className="highlighted">name</span> parameter
          must be of type <span className="highlighted">string.</span>
        </li>
        <li>
          <span className="highlighted">: string</span> after the
          function parentheses specifies that the function returns a
          string.
        </li>
      </ul>
      <h3>Optional Parameters</h3>
      <p>
        In TypeScript, you can make parameters optional by adding a{" "}
        <span className="highlighted">?</span>
        after the parameter name. This means the parameter doesn`t
        have to be provided when calling the function.
      </p>
      <SyntaxHighlighter
        className="wrap-white-space"
        language="javascript"
        style={darcula}
      >
        {codeString2}
      </SyntaxHighlighter>
      <p>
        Here, the <span className="highlighted">greeting</span>{" "}
        parameter is optional. If it is not provided, the function
        defaults to saying `Hello`.
      </p>
      <h3>Default Parameters</h3>
      <p>
        You can also set default values for parameters. If the
        argument is not passed when the function is called, the
        default value is used.
      </p>
      <SyntaxHighlighter
        className="wrap-white-space"
        language="javascript"
        style={darcula}
      >
        {codeString3}
      </SyntaxHighlighter>
      <p>
        In this example, the
        <span className="highlighted"> greeting</span> parameter has a
        default value of
        <span className="highlighted">`Hello`</span>, which is used
        when no value is provided.
      </p>
      <h3>Return Types</h3>
      <p>
        TypeScript automatically infers the return type of a function
        based on the return statements inside the function. However,
        you can explicitly declare the return type for clarity and
        safety.
      </p>
      <h3>Example</h3>
      <SyntaxHighlighter
        className="wrap-white-space"
        language="javascript"
        style={darcula}
      >
        {codeString4}
      </SyntaxHighlighter>
      <p>
        Here, the return type is explicitly set to{" "}
        <span className="highlighted">number</span>, ensuring the
        function always returns a number.
      </p>
      <h3>Example: Void Return Type</h3>
      <p>
        A function that doesn`t return a value can have a return type
        of <span className="highlighted">void</span>. This is useful
        for functions that only perform actions (like logging) but
        don`t return anything.
      </p>
      <SyntaxHighlighter
        className="wrap-white-space"
        language="javascript"
        style={darcula}
      >
        {codeString5}
      </SyntaxHighlighter>
      <p>
        The return type <span className="highlighted">void</span>{" "}
        tells TypeScript that this function doesn`t return a value.
      </p>
      <h2>Function Types (Type Aliases for Functions)</h2>
      <p>
        You can define types for functions using type aliases. This is
        useful when you need to ensure that a variable or argument
        adheres to a specific function signature.
      </p>
      <SyntaxHighlighter
        className="wrap-white-space"
        language="javascript"
        style={darcula}
      >
        {codeString6}
      </SyntaxHighlighter>
      <p>
        Here, <span className="highlighted">GreetFunction</span>{" "}
        defines a type for functions that take a
        <span className="highlighted">string</span> as an argument and
        return a <span className="highlighted">string</span>. The
        variable<span className="highlighted"> greet</span>
        must conform to this type.
      </p>
      <h3>Function Overloading</h3>
      <p>
        TypeScript allows you to define multiple function signatures
        (overloads) for the same function. Function overloading lets
        you define different ways to call a function, depending on the
        types of arguments passed.
      </p>
      <h3>Example: Function Overloads</h3>
      <SyntaxHighlighter
        className="wrap-white-space"
        language="javascript"
        style={darcula}
      >
        {codeString7}
      </SyntaxHighlighter>
      <p>
        In this example, the{" "}
        <span className="highlighted">format</span> function has two
        overloads: one that accepts a{" "}
        <span className="highlighted">number</span> and one that
        accepts a <span className="highlighted">string</span>. The
        implementation of the function handles both types.
      </p>
      <h2>Rest Parameters</h2>
      <p>
        You can use rest parameters in TypeScript to represent an
        indefinite number of arguments. This is useful when you want
        to pass multiple arguments to a function as an array.
      </p>
      <SyntaxHighlighter
        className="wrap-white-space"
        language="javascript"
        style={darcula}
      >
        {codeString8}
      </SyntaxHighlighter>
      <p>
        In this example, the <span className="highlighted">sum</span>{" "}
        function takes a variable{" "}
        <span className="highlighted">number</span> of number
        arguments, using the rest parameter syntax{" "}
        <span className="highlighted">...numbers</span>, and sums
        them.
      </p>
      <h2>Arrow Functions</h2>
      <p>
        TypeScript supports arrow functions, just like JavaScript.
        Arrow functions provide a concise syntax for writing
        functions, and they also have lexical this behavior.
      </p>
      <h3>Example: Arrow Function</h3>
      <SyntaxHighlighter
        className="wrap-white-space"
        language="javascript"
        style={darcula}
      >
        {codeString9}
      </SyntaxHighlighter>
      <p>
        In this example, <span className="highlighted">multiply</span>{" "}
        is an arrow function that multiplies two numbers.
      </p>
      <h3>Conclusion</h3>
      <p>
        In this section, you`ve learned how to work with functions in
        TypeScript, including how to define type-safe parameters and
        return values, use optional and default parameters, create
        function types, and more. TypeScript’s static typing for
        functions improves code quality and reduces errors by ensuring
        correct usage throughout your project. Next section idea:
        `Interfaces and Type Aliases in TypeScript`, where you can
        dive deeper into how to define complex types for objects and
        functions using interfaces and type aliases.
      </p>
      <div className="section-bottom-nav">
        <BackButtonExtended
          sectionId={2}
          previousSectionTitle={sectionsData[2].sectionTitle}
        />
        <div style={{ marginRight: "auto", width: "50%" }}></div>
      </div>
    </div>
  );
}
