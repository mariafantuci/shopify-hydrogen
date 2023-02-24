/* eslint-disable prettier/prettier */
export function AlertMessage(){
  return (
    <div className="bg-[#4C9FE9] flex flex-row flex-wrap items-center justify-between uppercase w-full min-h-32 py-2 px-4 md:px-20">
      <span className="text-white text-sm leading-6 inline-block m-0">Free shipping on orders over $75</span>
      <div className="hidden md:flex md:flex-row md:flex-wrap md:items-center md:justify-around gap-5">
        <a className="no-underline capitalize text-sm leading-6 inline-block m-0 text-white" href="tel:+800-432-1987">800-432-1987</a>
        <a className="no-underline capitalize text-sm leading-6 inline-block m-0 text-white" href="/">Warranty</a>
        <a className="no-underline capitalize text-sm leading-6 inline-block m-0 text-white" href="mailto:suport@gmail.com">Support</a>
      </div>
    </div>
  )
}
