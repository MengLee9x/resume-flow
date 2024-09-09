const Tag = ({ tagName }) => {
  return (
    <div
      className="bg-paleBlueGray inline-flex
      items-center
      justify-center
      rounded-[8px]
      h-[52px]
      px-2
      py-1
      text-sm
      font-semibold
      bg-gray-200
      text-gray-700
      mr-2
      mb-2
      whitespace-nowrap"
    >
      {tagName}
    </div>
  );
};

export default Tag;
