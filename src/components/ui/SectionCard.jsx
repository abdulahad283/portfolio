export default function SectionCard({
  icon: Icon,
  heading,
  description,
  children,
  contentClassName = "",
}) {
  return (
    <>
      {/* Card wrapper  */}
      <div className="rounded-2xl border border-[#ededee] bg-white">
        {/* Header zone  */}
        <div className="flex flex-col gap-6 px-6 pb-8 pt-6">
          {/* <Icon  */}
          <div className="flex w-fit items-center justify-center rounded-xl border border-[#ededee] bg-[#f6f6f6] p-[14px]">
            <Icon className="h-6 w-6" />
          </div>

          {/* COntent  */}
          <div className="flex flex-col gap-3">
            <h2 className="text-[21px] font-medium leading-[1.2] tracking-[-0.63px] text-[#1d1d26]">
              {heading}
            </h2>
            <p className="max-w-[400px] text-sm font-medium leading-[1.4] tracking-[-0.28px] text-[#77777d]">
              {description}
            </p>
          </div>
        </div>

        <hr className="border-[#ededee]" />

        {/* Content zone  */}
        <div className={`pb-10 pl-6 pr-6 pt-8 ${contentClassName}`}>
          {children}
        </div>
      </div>
    </>
  );
}
