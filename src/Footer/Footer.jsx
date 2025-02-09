import React from 'react';
import styles from "../Footer/Footer.module.css" // Make sure to import your CSS module

const Footer = () => {
    return (
        <footer className={styles.footer}>
          <div className={styles.partone}>  
            <div className={styles.explore}>
                <h3>Explore</h3>
                <ul>
                    <li>TEDx</li>
                    <li>TED Fellows</li>
                    <li>TED Ed</li>
                    <li>TED Translators</li>
                    <li>TED Institute</li>
                    <li>The Audacious Project</li>
                    <li>TED@Work</li>
                    <li>Podcasts</li>
                    <li>TED Blog</li>
                    <li>More ways to get TED</li>
                </ul>
            </div>
            <div className={styles.community}>
                <h3>Our Community</h3>
                <ul>
                    <li>TED Speakers</li>
                    <li>TED Fellows</li>
                    <li>TED Translators</li>
                    <li>TEDx Organizers</li>
                    <li>TED Community</li>
                </ul>
            </div>
            <div className={styles.newsletter}>
                <h3>Newsletters</h3>
                <p>Get the latest talks</p>
                <p>Get a daily email featuring the latest talk, plus a quick mix of trending content.</p>
                <form>
                    <label htmlFor="email">What's your email?</label>
                    <input type="email" id="email" name="email" />
                    <button type="submit">Subscribe</button>
                </form>
                <p>By subscribing, you understand and agree that we will store, process and manage your personal information according to our Privacy Policy</p>
            </div>
        </div>
           <hr />
       
       <div className={styles.parttwo}>
            <div className={styles.members}>
                <h3>Become a TED Member</h3>
                <p>TED Members help billions of people worldwide access inspiring ideas. Plus, they get exclusive benefits like invite-only events with speakers. Join today for a brighter future - and a better you.</p>
            </div>
            <div className={styles.follow}>
                <h3>Follow TED</h3>
                <p>Download the TED App</p>
            </div>
        </div>    
            <div className={styles.policies}>
                <ul>
                    <li>TED Talks Usage Policy</li>
                    <li>Privacy Policy</li>
                    <li>Advertising / Partnership</li>
                    <li>TED.com Terms of Use</li>
                    <li>Jobs</li>
                    <li>Press</li>
                    <li>Help</li>
                    <li>Privacy Preferences</li>
                </ul>
            </div>
            <p>© TED Conferences, LLC. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
