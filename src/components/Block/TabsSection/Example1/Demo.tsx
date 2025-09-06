
import BlockPreview from "../../../Shared/BlockPreview";
import ProductsTabs from "./ProductsTabs";
import productsTabsCode from "./ProductsTabs.tsx?raw";

const Example1Tabs = () => {
  return (
    <BlockPreview code={productsTabsCode} language="tsx">
      <ProductsTabs />
    </BlockPreview>
  );
};

export default Example1Tabs;
