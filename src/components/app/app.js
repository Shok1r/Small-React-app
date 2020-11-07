import React from 'react';
import AppHeader from '../app-header/app-header'
import PostStatusFilter from '../post-status-filter/post-status-filter';
import SearchPanel from '../search-panel/search-panel';
import PostList from '../post-list/post-list';


import './app.css';
import PostAddForm from '../post-add-form/post-add-form';

const App = () => {
    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList/>
            <PostAddForm/>
        </div>
    )
}

export default App;