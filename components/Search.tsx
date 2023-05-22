import React, {memo} from 'react';

const Search = ({onSearchChange}) => {
    return (
        <div  className={`flex flex h-full p-2`}>
            <input className="" type='search 'placeholder='Search ...' onChange={onSearchChange} />
        </div>
    );
}

export default memo(Search);