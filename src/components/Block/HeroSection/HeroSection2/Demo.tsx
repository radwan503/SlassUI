
import BlockPreview from "../../../Shared/BlockPreview";
import snippetCode from "./HeroSection2.tsx?raw";
import HeroSection2 from "./HeroSection2";

const HeroSectionDemo2 = () => {
  return (
    <BlockPreview code={snippetCode} language="tsx">
      <HeroSection2 />
    </BlockPreview>
  );
};

export default HeroSectionDemo2;
