import { Disclosure } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import Link from "next/link"

const Menu = () => {
  return (
    <Disclosure as="nav" className="bg-gray-100">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto relative h-16 relative flex">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <Disclosure.Button className="inline-flex items-center justify-start text-black">
                {open ? (
                  <XIcon className="block h-8 w-8" />
                ) : (
                  <MenuIcon className="block h-8 w-8" />
                )}
              </Disclosure.Button>
            </div>
            <div className="hidden sm:flex space-x-8 items-center justify-start font-semibold text-black">
              <Link href="/">
                <a>Index</a>
              </Link>
              <Link href="/about">
                <a>About</a>
              </Link>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <Disclosure.Button as="div">
              <Link href="/">
                <a>Index</a>
              </Link>
            </Disclosure.Button>
            <Disclosure.Button as="div">
              <Link href="/about">
                <a>About</a>
              </Link>
            </Disclosure.Button>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Menu
