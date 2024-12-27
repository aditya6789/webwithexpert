interface ILogoCard {
  title: string;
}

const LogoCard = ({ title }: ILogoCard) => {
  return (
    <div className="rounded-3xl flex justify-center items-center bg-white text-black shadow-md py-6 px-10">
      <h1 className="text-center font-semibold text-2xl ">{title}</h1>
    </div>
  );
};

export default LogoCard;
