/* eslint-disable prettier/prettier */
export function Header({layout}) {
  const links = layout?.headerMenu
  return (
    <header className="bg-white block py-6 px-4 lg:py-10 lg:px-20 lg:pb-0">
      <div className="container flex justify-between items-center">
          <div className="flex items-center">
              <button className="lg:hidden mr-4" aria-label="Open menu" data-menu-open>
                  hamburger menu
              </button>

              <button className="mr-6 text-sm uppercase font-bold lg:hidden" aria-label="Open search" data-search-open >
                  search
              </button>

              <nav className="">
                  <ul className="w-full flex flex-col md:flex-row">
                  {(links?.items || []).map(link => {
                      return(
                      <li className="py-4 lg:py-0 lg:mr-6 lg:pb-11 lg:border-black menu__level-1 box-border lg:-mb-0.5" key={link.id}>
                          <a className="text-xl uppercase font-medium lg:text-xs lg:font-bold" href={link.url}>{link.title}</a>
                          {(link?.items || []).map(subLink => {
                              return(
                              <li className="py-4 lg:py-0 lg:mr-6 lg:pb-11 lg:border-black menu__level-1 box-border lg:-mb-0.5" key={subLink.id}>
                                  <a className="text-xl uppercase font-medium lg:text-xs lg:font-bold" href={subLink.url}>{subLink.title}</a>
                                  {(subLink?.items || []).map(thirdLink => {
                                      return(
                                      <li className="py-4 lg:py-0 lg:mr-6 lg:pb-11 lg:border-black menu__level-1 box-border lg:-mb-0.5" key={thirdLink.id}>
                                          <a className="text-xl uppercase font-medium lg:text-xs lg:font-bold" href={thirdLink.url}>{thirdLink.title}</a>
                                      </li>
                                      )
                                  })
                                  }
                              </li>
                              )
                          })
                          }
                      </li>
                      )
                  })}
                  </ul>
              </nav>
          </div>
          <div className="flex items-center lg:pb-10">
              <button className="mr-6 text-sm uppercase font-bold hidden lg:block" aria-label="Open search" data-search-open >
                  Search
              </button>
              
          </div>            
      </div>
    </header>
  );
}
