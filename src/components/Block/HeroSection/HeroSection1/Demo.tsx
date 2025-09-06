
import BlockPreview from "../../../Shared/BlockPreview";
import HeroSection1 from "./HeroSection1";
import snippetCode from "./HeroSection1.tsx?raw";

const HeroSectionDemo1 = () => {
  return (
    <BlockPreview code={snippetCode} language="tsx">
      <HeroSection1 />
    </BlockPreview>
  );
};

export default HeroSectionDemo1;
