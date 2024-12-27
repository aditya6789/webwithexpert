
interface IInput {
    label :string;
    placeholder:string;
    classname?:string;
}
const Inputwithlabel = ({label,placeholder,classname}:IInput) => {
  return (
    <div className={`flex flex-col w-full ${classname}`}>
    <label htmlFor="" className="text-md md:text-xl font-medium">{label}</label>
    <input
      type="text"
      placeholder={placeholder}
      className="border-b-2 border-gray-300 focus:border-gray-800 outline-none transition duration-300 ease-in-out pb-3 pt-5 text-lg md:text-xl"
    />
  </div>
  
  )
}

export default Inputwithlabel