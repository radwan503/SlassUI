import BlockPreview from "../Shared/BlockPreview";


const ButtonExample = () => {
  const buttonCode = `
<button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
  Click Me
</button>`;

  return (
    <BlockPreview code={buttonCode} language="javascript">
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Click Me
      </button>
    </BlockPreview>
  );
};

export default ButtonExample;
