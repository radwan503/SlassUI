const IllustrativeImageSection = () => {
  return (
    <section className="bg-gray-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="relative w-full aspect-[16/9] max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-700">
          <img
            src="https://placehold.co/1200x675/1f2937/d1d5db?text=Complex+UI+Layouts+and+Components"
            alt="Illustrative UI Components"
            className="w-full h-full object-cover object-center"
            onError={(e:any) => { e.target.onerror = null; e.target.src = "https://placehold.co/1200x675/1f2937/d1d5db?text=Complex+UI+Layouts+and+Components"; }}
          />
          {/* You could overlay some abstract shapes or text here if desired to match the image more closely */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};
export default IllustrativeImageSection