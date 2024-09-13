import BackButton from "../components/Buttons/BackButton/BackButton";
import NextButton from "../components/Buttons/NextButton/NextButton";

import { sectionsData } from "../sectionsData";

export default function RootLayout() {
  return (
    <div className="page section">
      <div className="page__header">
        <BackButton />
        <h2>Section 1 - Getting started</h2>
        <NextButton sectionId={sectionsData[1].sectionId} />
      </div>
    </div>
  );
}
