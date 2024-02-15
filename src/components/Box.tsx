type propsType={
    heading:string,
    title:string,
    func1: ()=> void
}

const Box = ({heading,title,func1}:propsType) => {
    func1();
  return (
    <div className="flex flex-col items-center gap-y-8">
        <h1 className="font-bold text-[25px] text-violet-800">{heading}</h1>
        <p className="text-[15px] text-violet-500">{title}</p>
    </div>
  )
}

export default Box
