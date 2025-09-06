import { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

// Register the language
SyntaxHighlighter.registerLanguage("javascript", js);

const BlockPreview = ({
  code,
  children,
  language = "javascript",
}: {
  code: string;
  children: React.ReactNode;
  language?: string;
}) => {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  // Clean code (remove ?raw or loader lines)
  const cleanCode = code?.replace(/^.*\?raw.*\n?/gm, "").trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(cleanCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow bg-darkBg dark:bg-gray-800">
      {/* Tabs */}
      <div className="flex border-b dark:border-gray-700">
        <button
          onClick={() => setActiveTab("preview")}
          className={`flex-1 px-4 py-2 text-sm font-medium ${
            activeTab === "preview"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
          }`}
        >
          Preview
        </button>
        <button
          onClick={() => setActiveTab("code")}
          className={`flex-1 px-4 py-2 text-sm font-medium ${
            activeTab === "code"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
          }`}
        >
          Code
        </button>
      </div>

      {/* Content */}
      <div className="p-4 relative">
        {activeTab === "preview" ? (
          <div className="bg-transparent dark:bg-gray-900 rounded">
            {children}
          </div>
        ) : (
          <div className="relative">
            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="absolute top-0 right-0 mt-2 mr-2 bg-gray-700 text-white text-xs px-2 py-1 rounded hover:bg-gray-600"
            >
              {copied ? "Copied!" : "Copy"}
            </button>

            {/* Scrollable Syntax Highlighted Code */}
            <div className="max-h-[500px] overflow-y-auto rounded-lg">
              <SyntaxHighlighter
                language={language}
                style={atomOneDark}
                customStyle={{
                  padding: "1rem",
                  fontSize: "0.875rem",
                }}
              >
                {cleanCode}
              </SyntaxHighlighter>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlockPreview;
