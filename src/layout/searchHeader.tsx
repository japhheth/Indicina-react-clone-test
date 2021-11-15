import React, { FC, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

const SearchHeader: FC = () => {
    const navigate = useNavigate();
    const { addToast } = useToasts();

    const logoutHandler = () => {
        localStorage.clear();
        navigate('/');
        addToast('Logged out Successfully', { appearance: 'success', autoDismiss: true });
    }

    return (
        <div>
            <Menu as="div" className="relative inline-block text-left flex justify-end items-end w-8/12 mx-auto pt-10">
                <div className="w-3/12">
                    <div className="relative">
                        <Menu.Button className="inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2">
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
    )
}

export default SearchHeader;
