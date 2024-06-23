interface IWorkCardCard {
  title: string;
  desc: string;
  img: string;
  icon: string;
  color: string;
  id: number;
}

const WorkwithusCard = ({
  title,
  desc,
  img,
  icon,
  color,
  id,
}: IWorkCardCard) => {
  return (
    <div className="md:flex justify-between items-center bg-white shadow-xl   rounded-3xl sticky top-0 mt-10">
      <div className="px-10 py-5">
        <img src={icon} alt="" className="h-[150px] w-[150px]" />
        <h1 className="text-[30px] md:text-[50px] font-bold">
          {id} {title}
        </h1>
        <p className="text-[15px] md:text-[20px] font-medium text-gray-400">
          {desc}
        </p>
      </div>
      <div className={`rounded-3xl`} style={{ background: `${color}` }}>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default WorkwithusCard;
