import Link from "next/link";
import BackButton from "../components/Buttons/BackButton/BackButton";
import NextButton from "../components/Buttons/NextButton/NextButton";

import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import CodePlayground from "../components/CodePlayground/CodePlayground";

const codeString1 = `let name = Batman;
name = Chris; 
name = 43242678`;

const codeString2 = `let name; 
console.log(typeof(name)); // undefined 
name = 'Hello';
console.log(typeof(name)); // string 
name = 100;
console.log(typeof(name)); // number`;

const codeString3 = `let name: string = 'John'`;

const codeString4 = `name = 12`;

const codeString5 = `npm install typescript --save-dev`;

export default function Section() {
  return (
    <div className="page section">
      <div className="page__header">
        <BackButton />
        <h2>Section 1 - Getting started</h2>
        <NextButton />
      </div>
      <h2>What is Typescript</h2>
      <p>
        TypeScript is a programming language - it contains all of
        JavaScript, and then a bit more. Using our example above,
        let`s compare the scripts for `Hello, World`` in JavaScript vs
        TypeScript:
      </p>
      <SyntaxHighlighter
        className="wrap-white-space"
        language="javascript"
        style={darcula}
      >
        {codeString1}
      </SyntaxHighlighter>
      <p>
        The type of the name variable changes based on the value
        assigned to it. To find the type of the name variable at
        runtime, you use the typeof operator:
      </p>
      <SyntaxHighlighter
        className="wrap-white-space"
        language="javascript"
        style={darcula}
      >
        {codeString2}
      </SyntaxHighlighter>
      <p>
        In this example, the first statement defines the variable
        without assigning a value. Its type is
        <span className="important">undefined.</span>
      </p>
      <p>
        Then, we assign `Hello` to name variable and show its type.
        The type of the name variable now changes to{" "}
        <span className="important">string.</span>
      </p>
      <p>
        Finally, we assign 100 to the name variable. This time, the
        type of the name variable changes to{" "}
        <span className="important">number.</span>
      </p>
      <p>
        As you can see, as soon as the value is assigned, the type of
        the variable changes.
      </p>
      <p>
        Due to TypeScript`s goal of only extending JavaScript, the
        existing JavaScript code we saw works as TypeScript. The
        extensions which TypeScript adds to JavaScript are intended to
        help you be more explicit about what kinds of data are used in
        your code.
      </p>
      <p>
        Here is the same sample, but using TypeScript to be more
        explicit about what the variable is:
      </p>
      <SyntaxHighlighter
        className="wrap-white-space"
        language="javascript"
        style={darcula}
      >
        {codeString3}
      </SyntaxHighlighter>
      <p>
        This extra : string allow the reader to be certain that name
        will only be a string. Annotating your variables in this way
        also gives TypeScript the chance to verify that these match.
        This is very useful, because keeping track of changes like the
        type of value in a variable seems easy when it`s one or two,
        but once it starts hitting the hundreds, that`s a lot to keep
        track of. Writing types help programmers be more confident
        about their code because types catch mistakes.
      </p>
      <p>
        Simply speaking, we call these annotations `Types`. Hence the
        name TypeScript. One of the tag-lines for TypeScript is
        `JavaScript which scales` which is a statement that these
        extra type annotations allows you to work on bigger projects.
        This is because you can verify up-front how correct your code
        is. This means you have less need to understand how every
        change affects the rest of the program.
      </p>
      <p>
        And then if you want to assign it to different type of
        variable
      </p>
      <SyntaxHighlighter
        className="wrap-white-space"
        language="javascript"
        style={darcula}
      >
        {codeString4}
      </SyntaxHighlighter>

      <p>you will see the error</p>
      <span className="error">
        Type `number` is not assignable to type `string`.(2322)
      </span>
      <p>
        In summary, this error appears because TypeScript enforces
        type safety, ensuring that variables hold values of the
        declared type, preventing type mismatches during assignment.
      </p>
      <section className="section">
        <h2>Setting environment</h2>
        <p>To add Typescript to your existing project please use:</p>
        <SyntaxHighlighter
          className="wrap-white-space"
          language="javascript"
          style={darcula}
        >
          {codeString5}
        </SyntaxHighlighter>
        <p>
          Please check official documentation for complete guide{" "}
          <Link href="https://www.typescriptlang.org/download/">
            <span className="important">here</span>
          </Link>
        </p>
      </section>
      <h2>Check different types in playgroud below. Have fun!</h2>
      <CodePlayground />
      <NextButton />
    </div>
  );
}
