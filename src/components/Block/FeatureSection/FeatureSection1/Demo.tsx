
import BlockPreview from "../../../Shared/BlockPreview";
import FeatureSection1 from "./FeatureSection1";
import snippetCode from "./FeatureSection1.tsx?raw";

const FeatureSectionDemo1 = () => {
  return (
    <BlockPreview code={snippetCode} language="tsx">
      <FeatureSection1 />
    </BlockPreview>
  );
};

export default FeatureSectionDemo1;
