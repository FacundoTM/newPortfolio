const Technologies = () => {
  return (
    <div>
      <ul className="flex sm:flex-row columns-3 flex-col gap-10 justify-center text-[14px] text-[#7f8690]">
        <div className="flex justify-center gap-10">
          <li className="w-fit self-center cursor-pointer transition duration-700 hover:opacity-50 border-[1px] p-4">
            Javascript
          </li>
          <li className="w-fit self-center cursor-pointer transition duration-700 hover:opacity-50 border-[1px] p-4">
            React
          </li>
          <li className="w-fit self-center cursor-pointer transition duration-700 hover:opacity-50 border-[1px] p-4">
            NodeJS
          </li>
        </div>
        <div className="flex justify-center gap-10">
          <li className="w-fit self-center cursor-pointer transition duration-700 hover:opacity-50 border-[1px] p-4">
            Express
          </li>
          <li className="w-fit self-center cursor-pointer transition duration-700 hover:opacity-50 border-[1px] p-4">
            NestJS
          </li>
          <li className="w-fit self-center cursor-pointer transition duration-700 hover:opacity-50 border-[1px] p-4">
            TypeScript
          </li>
          <li className="w-fit self-center cursor-pointer transition duration-700 hover:opacity-50 border-[1px] p-4">
            MongoDB
          </li>
          <li className="w-fit self-center cursor-pointer transition duration-700 hover:opacity-50 border-[1px] p-4">
            SQL
          </li>
          
        </div>
      </ul>
    </div>
  );
};

export default Technologies;
