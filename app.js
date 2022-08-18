const SUPABASE_URL = 'https://iiheuanoirgtlmgbnvou.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpaGV1YW5vaXJndGxtZ2Judm91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjA2MTA4MjAsImV4cCI6MTk3NjE4NjgyMH0.0nFD2sYSDNfeuHIBj-7JNMLMp8hUsGMk6J90sU5381w';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


// importing other stuff, utility functions for:
// working with supabase
import { checkAuth, signOutUser, getPosts } from './fetch-utils.js';
// pure rendering (data --> DOM)
import { renderPosts } from './render-utils.js';

// some "boiler plate" code for:
// sign out link
const signOutLink = document.getElementById('sign-out-link');
signOutLink.addEventListener('click', signOutUser);
// make sure we have a user
checkAuth();

// grab needed DOM elements on page
const bulletinBoard = document.getElementById('bulletin-board');

async function displayPosts() {
    const posts = await getPosts();
    const listEls = renderPosts(posts);
    bulletinBoard.append(listEls);
}

displayPosts();
