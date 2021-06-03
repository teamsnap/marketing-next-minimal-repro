import fetch from 'node-fetch';

// We have an issue where our RSS feed isn't being cleaned
// by the wordpress functions.php file
// so we are taking that over and swapping
// with the correct URL pattern
// This is an MVP fix, this should only happen on build

export default async function handler(req, res) {
  try {
    const feed = await fetch('https://tsblogadmin.teamsnap.com/feed').then(
      (res) => res.text()
    );
    const cleanedFeed = feed.replace(
      /https:\/\/tsblogadmin\.teamsnap\.com/g,
      'https://www.teamsnap.com/blog'
    );
    res.setHeader('Content-Type', 'application/rss+xml');
    res.send(cleanedFeed);
  } catch (e) {
    // If an error, redirect to the source feed
    res.redirect('https://tsblogadmin.teamsnap.com/feed');
    console.error(e);
  }
}
