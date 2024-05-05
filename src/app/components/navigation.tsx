'use client';

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useRouter, usePathname } from 'next/navigation'
import ThemeSwitch from './themeswitch';

const user = {
    imageUrl:
        'https://media.licdn.com/dms/image/C5603AQEQAeuKugEbKQ/profile-displayphoto-shrink_800_800/0/1520303954133?e=1720051200&v=beta&t=R5Dcmln0V_VCki0qlaXQZ-wUJlEyn-iPLsOi4SgNz2Q',
}
const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Blog', href: '/blog', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
    const router = useRouter();
    const pathName = usePathname();
    return (
        <>
            <Disclosure as="nav" className="bg-gray-800 shadow-lg">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="flex h-16 items-center justify-between">
                                <div className="flex items-center">
                                    <div className="hidden md:block">
                                        <div className="flex items-baseline space-x-4">
                                            {navigation.map((item) => (
                                                <a
                                                    onClick={() => router.push(item.href)}
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        pathName === item.href
                                                            ? 'bg-gray-900 text-white'
                                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'rounded-md px-3 py-2 text-sm font-medium'
                                                    )}
                                                    aria-current={pathName === item.href ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className='ml-4 flex items-center md:ml-6'>
                                    <div className="relative ml-3">
                                        <ThemeSwitch />
                                    </div>

                                    <div className="hidden md:block">
                                        <div className="ml-4 flex items-center md:ml-6">
                                            <div className="relative ml-3">
                                                <div>

                                                    <div className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                        <span className="absolute -inset-1.5" />
                                                        <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="-mr-2 flex md:hidden">
                                        <Disclosure.Button className="ml-3 relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute -inset-0.5" />
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="md:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        onClick={() => router.push(item.href)}
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            pathName === item.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block rounded-md px-3 py-2 text-base font-medium'
                                        )}
                                        aria-current={pathName === item.href ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    )
}