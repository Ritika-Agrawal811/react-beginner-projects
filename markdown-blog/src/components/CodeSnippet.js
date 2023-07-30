import React, { useEffect, useState, useContext } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  materialDark,
  materialLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyIcon, PasteIcon } from "../assets/icon";
import ThemeContext from "../context/ThemeContext";
import CopyToClipboard from "react-copy-to-clipboard";
import styles from "../css/post.module.css";

const CodeSnippet = ({ children, language }) => {
  const [copied, setCopied] = useState(false);
  const { isDark } = useContext(ThemeContext);

  const handleCopy = () => {
    setCopied(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);

      return () => clearTimeout(timer);
    }, 1000);
  }, [copied]);

  return (
    <div className={styles["code-snippet__container"]}>
      <CopyToClipboard
        text={children}
        onCopy={handleCopy}
      >
        <button className={`icon ${styles["copy-icon"]}`}>
          {copied ? <PasteIcon /> : <CopyIcon />}
        </button>
      </CopyToClipboard>
      <SyntaxHighlighter
        language={language}
        style={isDark ? materialDark : materialLight}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;
