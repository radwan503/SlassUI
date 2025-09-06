const Button = ({ children, variant = 'primary', size = 'md', className = '', icon: Icon, ...props }:any) => {
  let baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white';
  let variantStyles = '';
  let sizeStyles = '';

  switch (variant) {
    case 'primary':
      variantStyles = 'bg-gray-900 text-white hover:bg-gray-700 focus:ring-gray-900';
      break;
    case 'secondary':
      variantStyles = 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-100';
      break;
    case 'outline':
      variantStyles = 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-300';
      break;
    case 'ghost':
      variantStyles = 'text-gray-700 hover:bg-gray-900 focus:ring-gray-100';
      break;
    case 'link':
      variantStyles = 'text-blue-600 hover:underline focus:ring-blue-600';
      break;
    case 'indigo':
      variantStyles = 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-600';
      break;
    default:
      variantStyles = 'bg-gray-900 text-white hover:bg-gray-700 focus:ring-gray-900';
  }

  switch (size) {
    case 'sm':
      sizeStyles = 'py-1.5 px-3 text-sm';
      break;
    case 'md':
      sizeStyles = 'py-2.5 px-5 text-base';
      break;
    case 'lg':
      sizeStyles = 'py-3 px-6 text-lg';
      break;
    default:
      sizeStyles = 'py-2.5 px-5 text-base';
  }

  return (
    <button className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`} {...props}>
      {children}
      {Icon && <Icon className="w-5 h-5 ml-2" />}
    </button>
  );
};



export default Button;
