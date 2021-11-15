import React, { FC } from 'react';
import { Fragment } from 'react'
import GithubLogo from '../assets/githubLogo.png';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

const Header: FC<any> = () => {
    const navigate = useNavigate();
    const { addToast } = useToasts();

    const logoutHandler = () => {
        localStorage.clear();
        navigate('/');
        addToast('Logged out Successfully', { appearance: 'success', autoDismiss: true });
    }
    return (
        <Disclosure as="nav" className="bg-white pt-3 shadow">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="relative inline-flex items-center">
                                <img src={GithubLogo} alt="github logo" className="h-12 mr-2" />
                                <span className="ml-2 text-3xl text-black font-bold">Github</span>
                            </div>
                            <div>
                                <input type="text" className="rounded-full border border-gray-200 w-full px-3 py-2" />
                            </div>
                            <div className="relative">
                                <Menu as="div" className="relative inline-block text-left flex justify-end items-end mx-auto">
                                    <div className="">
                                        <div className="relative">
                                            <Menu.Button className="inline-flex justify-center items-center w-full rounded-md  px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2">
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                                <p className="mx-2">John Doe</p>
                                                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                            </Menu.Button>
                                        </div>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div className="p-3 cursor-pointer">
                                                    <Menu.Item>
                                                        <p onClick={logoutHandler}>
                                                            Logout
                                                        </p>
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </div>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    )
}

export default Header;
