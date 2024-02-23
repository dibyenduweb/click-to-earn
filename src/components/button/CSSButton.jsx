/* eslint-disable react/prop-types */
const CSSButton = ({cssbtn}) => {
  return (
    <button className="bg-sky-900 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded">
      {cssbtn}
    </button>
  );
};

export default CSSButton;
