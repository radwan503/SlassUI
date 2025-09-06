
import BlockPreview from "../../../Shared/BlockPreview";
import FeaturesSection2 from "./FeatureSection2";
import snippetCode from "./FeatureSection2.tsx?raw";

const FeatureSectionDemo2 = () => {
  return (
    <BlockPreview code={snippetCode} language="tsx">
      <FeaturesSection2 />
    </BlockPreview>
  );
};

export default FeatureSectionDemo2;
