import styles from "@/app/Home.module.scss";
import SectionContainer from "./components/SectionContainer/SectionContainer";

export default function Home() {
  return (
    <main className={`page ${styles.home}`}>
      <h2>Welcome to Typescript tutorial</h2>
      <p>
        TypeScript is typed JavaScript. TypeScript adds types to
        JavaScript to help you speed up the development by catching
        errors before you even run the JavaScript code.
      </p>
      <p>
        TypeScript is an open-source programming language that builds
        on top of JavaScript. It works on any web browser, any OS, and
        any environment that JavaScript runs.
      </p>
      <h3>In this TypeScript tutorial, you’ll learn:</h3>
      <ul>
        <li>
          Why TypeScript offers a lot of benefits over vanilla
          JavaScript.
        </li>
        <li>
          Understand what TypeScript truly is and how it works under
          the hood.
        </li>
        <li>
          Use TypeScript and its rich features like Types, Classes,
          Interfaces, Modules, and more.
        </li>
      </ul>
      <h3>Prerequisites</h3>
      <ul>
        <li>
          Basic JavaScript knowledge. If you want to learn JavaScript,
          check out the JavaScript Tutorial.
        </li>
        <li>ECMAScript 2015 or ES6 knowledge.</li>
      </ul>
      <div className={styles.home__sections}>
        <SectionContainer title="Section 1 - Getting started">
          <ul>
            <li>Why Typescript and what it is</li>
            <li>Typescript advantages</li>
            <li>Setting environment</li>
          </ul>
        </SectionContainer>
      </div>
    </main>
  );
}
