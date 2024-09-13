"use client";
import React from "react";
import Editor from "@monaco-editor/react";
import styles from "@/app/components/CodePlayground/CodePlauground.module.scss";

const CodePlayground = () => {
  return (
    <Editor
      className={styles.codePlayground}
      height="300px"
      defaultLanguage="typescript"
      defaultValue={`// you can start be defining simple variable and try to change it's value
// let typescriptIsGreat: boolean = true`}
      theme="vs-dark"
      loading={<h1>Loading code sanbox editor...</h1>}
    />
  );
};

export default CodePlayground;
