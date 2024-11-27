export const Button3D = ({
  label,
  onClick
}: {
  label: string;
  onClick?: () => void;
}) => {
  return (
    <button className="cursor-pointer px-[0.5em] py-[0.25em] text-[#000] border-black border-[3px] border-solid active:[box-shadow:0px_0px_0px_0px] active:top-[5px] [box-shadow:1px_1px_0px_0px,_2px_2px_0px_0px,_3px_3px_0px_0px,_4px_4px_0px_0px,_5px_5px_0px_0px] md:px-[0.75em] md:py-[0.25em] relative select-none active:left-[5px]"
      onClick={onClick}
    >
      <span>{label}</span>
    </button>
  )
}