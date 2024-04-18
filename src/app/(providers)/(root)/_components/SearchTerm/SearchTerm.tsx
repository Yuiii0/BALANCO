interface SearchTermProps {
  productCount: number;
  searchTerm: string;
}

function SearchTerm({ productCount, searchTerm }: SearchTermProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-y-4 mb-5">
      <h4 className="font-light text-[13px] flex flex-col gap-y-1 text-center items-center justify-center border-b w-20 ">
        <p className="w-full">검색 결과 </p>
        <p className="text-[11px]  w-full font-extralight">
          <span className="text-gray-500 font-bold"> {productCount}</span>
          개의 상품
        </p>
      </h4>
      <p className="font-extrabold text-2xl">{`' ${searchTerm} '`}</p>
    </div>
  );
}

export default SearchTerm;
