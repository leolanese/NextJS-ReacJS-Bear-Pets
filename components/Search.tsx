import React, {memo} from 'react';

const Search = ({onSearchChange}) => {
    return (
        <div className="pa2 ba ">
            <input className="w-90" type='search 'placeholder='Search ...' onChange={onSearchChange} />
        </div>
    );
}

export default memo(Search);