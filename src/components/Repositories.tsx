import React, { FC, useState, useEffect } from 'react';
import SingleRepository from './SingleRepository';
import Header from '../layout/header';


const Repositories: FC<any> = ({ repositories }: any) => {
    const [repositoryLength, setRepositoryLength] = useState<number>(0);

    useEffect(() => {
        if (repositories.length) {
            setRepositoryLength(repositories.length)
        }
    }, [repositories])
    return (
        <div className="relative">
            <Header />
            <div className="bg-gray-100 p-10">
                <div className="flex w-8/12 mx-auto">
                    <div className="w-3/12 mr-8">
                        <div className="bg-white p-5  h-auto">
                            <div className="bg-gray-200 p-2 flex justify-between">
                                <p className="text-gray-500 text-sm">Repositories</p>
                                <p className="text-gray-500 text-sm">{repositoryLength}</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-9/12">
                        <h4 className="font-bold text-2xl">{repositoryLength} repository results</h4>
                        <div className="repo-wrapper mt-4">
                            {repositories.length && repositories.map((item: any, index: any) => (
                                <SingleRepository key={index} repository={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Repositories;
