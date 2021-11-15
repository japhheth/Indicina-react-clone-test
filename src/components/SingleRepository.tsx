import React, { FC } from 'react';
import { formatDateFromToday } from '../utils/date';

const SingleRepository: FC<any> = ({ repository }: any) => {
    const isEmpty = (obj: any) => {
        if (obj === null) {
            return false
        } else {
            return true
        }
    }
    return (
        <div className="bg-white p-4 mb-4">
            <div>
                <p className="text-black font-semibold mb-3">{repository.nameWithOwner}</p>
                <p className="text-gray-600 text-sm font-thin mb-3">{repository.description || 'Not available'}</p>
                <p className="text-gray-600 text-sm font-thin mb-3">
                    <span className="border-r-2 border-r-black pr-1">{repository.stargazerCount}</span>
                    <span className="border-r-2 border-r-gray-700 px-1"> {isEmpty(repository.licenseInfo) ? repository.licenseInfo.key : 'No License'} </span>
                    <span className="border-r-2 border-r-gray-700 px-1"> {isEmpty(repository.primaryLanguage) ? repository.primaryLanguage.name : 'Nil'} </span>
                    <span className="px-1"> {formatDateFromToday(repository.updatedAt) || 'Nil'} </span>
                </p>
            </div>
        </div>

    )
}

export default SingleRepository
