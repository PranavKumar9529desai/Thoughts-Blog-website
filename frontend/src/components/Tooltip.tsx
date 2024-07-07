export function Tooltip({ text }: { text: string }) {
  return (
    <>
      <span className="hidden w-[120px] bg-black text-white text-center py-[5px] rounded-[6px] absolute z-10">
        {text}
      </span>
    </>
  );
}
