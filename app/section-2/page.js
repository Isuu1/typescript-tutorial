import BackButton from "../components/Buttons/BackButton/BackButton";
import NextButton from "../components/Buttons/NextButton/NextButton";

import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import NextButtonExtended from "../components/Buttons/NextButtonExtended/NextButtonExtended";

import { sectionsData } from "../sectionsData";
import BackButtonExtended from "../components/Buttons/BackButtonExtended/BackButtonExtended";

const codeString1 = `let score: number = 95.5;         // A number value
let isAvailable: boolean = false; // A boolean value
let message: string = "Welcome!"; // A string value
let values: number[] = [1, 2, 3]; // An array of numbers`;

const codeString2 = `let result: number | string;
result = 100;      // OK: 'result' is a number
result = "Passed"; // OK: 'result' is a string`;

const codeString3 = `let age: number = 25;           // 'age' is of type 'number'
const isStudent: boolean = true; // 'isStudent' is of type 'boolean'
let greeting: string = "Hello!"; //'greeting' is of type 'string'`;

const codeString4 = `let city = "New York"; // TypeScript infers that 'city' is a string
let score = 95;        // 'score' is inferred as a number`;

export default function Section() {
  return (
    <div className="page section">
      <div className="page__header">
        <BackButton />
        <h2>
          Section 2 - Variables and Type Annotations in TypeScript
        </h2>
        <NextButton sectionId={sectionsData[2].sectionId} />
      </div>
      <h2>Basic Types in Typescript</h2>
      <ul>
        <li>
          <span className="highlighted">number:</span> For both
          integers and floating-point numbers.
        </li>
        <li>
          <span className="highlighted">string:</span> For textual
          data.
        </li>
        <li>
          <span className="highlighted">boolean:</span> For true/false
          values.
        </li>
        <li>
          <span className="highlighted">array:</span> For storing
          multiple values of a specific type.
        </li>
        <li>
          <span className="highlighted">object:</span> For key-value
          pairs.
        </li>
        <li>
          <span className="highlighted">any:</span> A special type
          that allows any value (should be used sparingly).
        </li>
        <li>
          <span className="highlighted">void:</span> Represents the
          absence of a value (used in functions that don’t return
          anything).
        </li>
        <li>
          <span className="highlighted">null</span> and undefined:
          Special types for null and undefined values.
        </li>
      </ul>
      <h3>Example</h3>
      <SyntaxHighlighter
        className="wrap-white-space"
        language="javascript"
        style={darcula}
      >
        {codeString1}
      </SyntaxHighlighter>
      <h2>Union types</h2>
      <p>
        TypeScript allows variables to hold multiple types using union
        types. This is useful when a value could be one of several
        types.
      </p>
      <h3>Example</h3>
      <SyntaxHighlighter
        className="wrap-white-space"
        language="javascript"
        style={darcula}
      >
        {codeString2}
      </SyntaxHighlighter>
      <p>
        In this example, the variable result can either be a{" "}
        <span className="highlighted">number</span> or a{" "}
        <span className="highlighted">string</span>, thanks to the
        union type{" "}
        <span className="highlighted">number | string.</span>
      </p>
      <h3>Conclusion</h3>
      <p>
        In this section, you`ve learned how to declare variables in
        TypeScript, use type annotations, and work with basic types.
        TypeScript’s type system helps catch potential errors early by
        ensuring that variables hold values of the correct type. In
        the next section, we’ll explore functions in TypeScript,
        including how to add types to function parameters and return
        values.
      </p>
      <h2>Declaring variables with Type Annotations</h2>
      <p>
        TypeScript allows you to declare variables using the standard
        let, const, and var keywords, along with explicit types using
        a <span className="highlighted">colon (:)</span> followed by
        the type name.
      </p>
      <h3>Example: Declaring Variables with Types</h3>
      <SyntaxHighlighter
        className="wrap-white-space"
        language="javascript"
        style={darcula}
      >
        {codeString3}
      </SyntaxHighlighter>
      <p>
        In this example, we have declared variables with explicit
        types:
      </p>
      <ul>
        <li>
          <span className="highlighted">age</span> is a{" "}
          <span className="highlighted">number.</span>
        </li>
        <li>
          <span className="highlighted">isStudent</span> is a{" "}
          <span className="highlighted">boolean.</span>
        </li>
        <li>
          <span className="highlighted">greeting</span> is a{" "}
          <span className="highlighted">string.</span>
        </li>
      </ul>
      <h3>Example: Type Inference</h3>
      <p>
        If you don`t explicitly annotate the type, TypeScript will
        infer the type based on the assigned value.
      </p>
      <SyntaxHighlighter
        className="wrap-white-space"
        language="javascript"
        style={darcula}
      >
        {codeString4}
      </SyntaxHighlighter>
      <div className="section-bottom-nav">
        <BackButtonExtended
          sectionId={1}
          previousSectionTitle={sectionsData[1].sectionTitle}
        />
        <NextButtonExtended
          sectionId={3}
          nextSectionTitle={sectionsData[2].sectionTitle}
        />
      </div>
    </div>
  );
}
