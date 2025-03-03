export default function Circle({ children }) {
    return (
        <button className="circle text-[#DA4533] flex gap-[4px] font-medium text-[16px]  bg-transparent px-[21px] py-[11px] rounded-[100%] border border-red   group    cursor-pointer items-center">{children}
        </button>)
}