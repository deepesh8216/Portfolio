type Props = {
  children: React.ReactNode;
};

export default function ButtonTextChange({ children }: Props) {
  return (
    <>
      <button className='group relative h-12 rounded-full border-2 border-black bg-black px-5 text-white'>
        <span className='relative inline-flex overflow-hidden'>
          <div className='translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12'>
            {children}
          </div>
          <div className='absolute translate-y-[114%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0'>
            {children}
          </div>
        </span>
      </button>
    </>
  );
}
  
