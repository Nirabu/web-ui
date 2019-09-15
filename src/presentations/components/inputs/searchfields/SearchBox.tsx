import * as React from 'react';

const SearchBox: React.FC = () => {
    return (
        <>
            <form style={{paddingBottom: '2.5rem'}}>
                <input
                    placeholder="Nimado search"
                />
            </form>
        </>
    )
};

export default SearchBox;

