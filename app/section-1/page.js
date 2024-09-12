import BackButton from "../components/Buttons/BackButton/BackButton";
import NextButton from "../components/Buttons/NextButton/NextButton";

export default function Section() {
  return (
    <div className="page">
      <div className="page__header">
        <BackButton />
        <h2>Section 1 - Getting started</h2>
        <NextButton />
      </div>
      <p>
        TypeScript is a programming language - it contains all of
        JavaScript, and then a bit more. Using our example above,
        let`s compare the scripts for `Hello, World`` in JavaScript vs
        TypeScript:
      </p>
      <code>let name = Batman; name = `Chris` name = 43242678</code>

      <p>
        The type of the box variable changes based on the value
        assigned to it. To find the type of the box variable at
        runtime, you use the typeof operator:
      </p>
      <code>
        let box; console.log(typeof(box)); // undefined box = `Hello`;
        console.log(typeof(box)); // string box = 100;
        console.log(typeof(box)); // number
      </code>
    </div>
  );
}
