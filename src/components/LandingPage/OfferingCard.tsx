const OfferingCard = ({ icon: Icon, title, description, image }:any) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-start text-left h-full">
    <div className="flex items-center mb-4">
      {Icon && <Icon className="w-8 h-8 text-gray-900 mr-3" />}
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
    {image && (
      <div className="w-full h-32 bg-gray-50 rounded-lg overflow-hidden border border-gray-200 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top"
          onError={(e:any) => { e.target.onerror = null; e.target.src = `https://placehold.co/300x128/e5e7eb/4b5563?text=Image+for+${title.replace(/\s/g, '+')}`; }}
        />
      </div>
    )}
  </div>
);

export default OfferingCard