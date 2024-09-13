import styles from "@/app/Home.module.scss";
import SectionContainer from "./components/SectionContainer/SectionContainer";
//Data
import { sectionsData } from "./sectionsData";

export default function Home() {
  console.log("Sections data", sectionsData.length);
  return (
    <main className={`page ${styles.home}`}>
      <h3 className="error">
        Please note this project is still in development
      </h3>

      <h2 className="headline">Welcome to Typescript tutorial</h2>
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
      <h3 className="headline">
        In this TypeScript tutorial, you’ll learn:
      </h3>
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
      <h3 className="headline">Prerequisites</h3>
      <ul>
        <li>
          Basic JavaScript knowledge. If you want to learn JavaScript,
          check out the JavaScript Tutorial.
        </li>
        <li>ECMAScript 2015 or ES6 knowledge.</li>
      </ul>
      <div className={styles.home__sections}>
        <SectionContainer
          title={sectionsData[0].sectionTitle}
          sectionId={sectionsData[0].sectionId}
        >
          <ul>
            <li>Why Typescript and what it is</li>
            <li>Typescript advantages over Javascript</li>
            <li>Setting environment</li>
          </ul>
        </SectionContainer>
        <SectionContainer
          title={sectionsData[1].sectionTitle}
          sectionId={sectionsData[1].sectionId}
        >
          <ul>
            <li>Declaring Variables with Type Annotations</li>
            <li>Basic Types in TypeScript</li>
            <li>Union Types</li>
          </ul>
        </SectionContainer>
        <SectionContainer
          title={sectionsData[2].sectionTitle}
          sectionId={sectionsData[2].sectionId}
        >
          <ul>
            <li>Function Declaration with Type Annotations</li>
            <li>Function Types (Type Aliases for Functions)</li>
            <li>Rest Parameters</li>
            <li>Arrow Functions</li>
          </ul>
        </SectionContainer>
      </div>
    </main>
  );
}
