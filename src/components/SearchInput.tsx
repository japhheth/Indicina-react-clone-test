import React, { FC } from 'react';
import GithubLogo from '../assets/githubLogo.png';
import SearchHeader from '../layout/searchHeader';

import Loader from 'react-loader-spinner';

const SearchInput: FC<any> = ({ setSearchInput, searchHandler, loading }: any) => {
    return (
        <div className="">
            <SearchHeader />
            <main className="h-screen flex flex-col justify-center items-center">
                <div className="flex flex-col">
                    <div className="relative flex justify-center items-center">
                        <img src={GithubLogo} alt="github logo" className="w-2/12" />
                        <span className="ml-2 text-3xl text-black font-bold">Github</span>
                    </div>
                    <div className="relative mt-2">
                        <input type="text" className="rounded-full border border-gray-200 w-full px-3 py-4" onChange={(e) => setSearchInput(e.target.value)} />
                    </div>
                    <div className="flex justify-center items-center mt-10">
                        <button className="bg-gray-500 text-white rounded-lg px-6 py-3" onClick={searchHandler}>{loading ? <Loader type="TailSpin" color="#1D1E2C" height={20} width="100%" /> : 'Search Github'}</button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default SearchInput
