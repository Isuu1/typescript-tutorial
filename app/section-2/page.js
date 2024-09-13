import BackButton from "../components/Buttons/BackButton/BackButton";
import NextButton from "../components/Buttons/NextButton/NextButton";

export default function Section() {
  return (
    <div className="page section">
      <div className="page__header">
        <BackButton />
        <h2>
          Section 2 - Variables and Type Annotations in TypeScript
        </h2>
        <NextButton />
      </div>
      <h2>What is Typescript</h2>
    </div>
  );
}
