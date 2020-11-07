import React from 'react';

import './post-status-filter.css';

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <button name="all">Все</button>
            <button name="liked">Понравилось</button>
        </div>
    )
}

export default PostStatusFilter;