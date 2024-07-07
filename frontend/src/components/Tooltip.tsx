export function Tooltip({ text , numberofLikes }: { text: string , numberofLikes : number }) {
  return (
    <>
      <style>{`
           .tooltip-arrow::before {
            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            border-width: 5px;
            border-style: solid;
            border-color: #000 transparent transparent transparent;
            transform: translateX(-50%);
          }
          `}</style>
      <span className="group-hover:opacity-100 group-hover:visible opacity-0 invisible w-20 bg-gray-900 text-white text-center px-2 py-1 rounded-[10px] absolute z-10 text-sm transition-opacity duration-300 ease-in-out delay-150 font-serif bottom-full tooltip-arrow left-[-12px]">
        {`${numberofLikes} ${text}`}
      </span>
    </>
  );
}


// Define Custom CSS for the Arrow: Use a <style> tag within your component or add the styles to your CSS file, targeting the custom class with a pseudo-element to create the arrow.