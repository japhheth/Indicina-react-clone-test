import React, { FC, useState } from 'react';
import { searchRepos } from '../api/searchApi';
import SearchInput from '../components/SearchInput';
import Repositories from '../components/Repositories';
import errorHandler from '../utils/errorHandler';
import { useToasts } from 'react-toast-notifications';



const Search: FC = () => {
    const [searchInput, setSearchInput] = useState<string>('');
    const [repositories, setRepositories] = useState<Array<any>>([]);
    const [isDoneSearching, setIsDoneFetching] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const { addToast } = useToasts();
 
 
    const searchHandler = (e: any) => {
        e.preventDefault();
        if (searchInput) {
            if (searchInput) {
                setLoading(true);
                searchRepos(searchInput)
                    .then((response: any) => {
                        const { nodes } = response.data.data.search;
                        if (nodes.length) {
                            setRepositories([...nodes]);
                            addToast('Successfully fetched results', { appearance: 'success', autoDismiss: true });
                            setIsDoneFetching(true);
                        } else {
                            addToast('Results not found', { appearance: 'error', autoDismiss: true });
                        }
                        setLoading(false);
                    })
                    .catch((error: any) =>{
                        errorHandler(error).then((message) => addToast(message, { appearance: 'error' }));
                        setLoading(false)
                    });
            }
        }


    }
    return (
        <section className="relative">
            {!isDoneSearching && <SearchInput loading={loading} searchHandler={searchHandler} setSearchInput={(e: any) => setSearchInput(e)} />}
            {isDoneSearching && <Repositories repositories={repositories} />}
        </section>
    )
}

export default Search
