import {rootURL, loginFirst, getHeaders} from './utilities.js';

const showStories = async () => {
    const response = await fetch(`${rootURL}/api/stories`, {
        headers: getHeaders()
    })
    const data = await response.json();
    console.log('Stories:', data);
}

const showPosts = async () => {
    const response = await fetch(`${rootURL}/api/posts`, {
        headers: getHeaders()
    })
    const data = await response.json();
    console.log('Posts:', data);
}

const initPage = async () => {
    // first log in (we will build on this after Spring Break):
    await loginFirst('webdev', 'password');

    // then use the access token provided to access data on the user's behalf
    showStories();
    showPosts();
}

initPage();
