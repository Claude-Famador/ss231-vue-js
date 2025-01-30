<template>
    <div class="profile-container">
      <h1 class="title">About Me</h1>
      <p class="intro">Hello! I am Claude Jairo Famador and this is my attempt in making a personal webpage about me. There's not much to see here so move along.</p>
  
      <section class="section">
        <h2 class="subtitle">Education / Achievements</h2>
        <ul class="list">
          <li>Award for Research Paper Making</li>
          <li>2nd and 3rd Place in my Highschool's Spelling Bee</li>
        </ul>
      </section>
  
      <section class="section">
        <h2 class="subtitle">Course</h2>
        <table class="course-table">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Software System</td>
              <td>2023</td>
            </tr>
          </tbody>
        </table>
      </section>
  
      <section class="section">
        <h2 class="subtitle">IT Experience</h2>
        <p>I only ever saw tutorials on YouTube and worked from there I have slight HTML knowledge from highschooll but didn't delve into it that much</p>
      </section>
  
      <section class="section">
        <h2 class="subtitle">Hobbies & Interests</h2>
        <ul class="list">
          <li>Tetris</li>
          <li>Video Editing</li>
          <li>Achievement Hunting in Games</li>
        </ul>
      </section>
  
      <section class="section">
        <h2 class="subtitle">Goals In Life / Dream</h2>
        <p>Build a solid reputation within the CS World and manage to implement my hobbies and interests into this to build a passion project.</p>
      </section>
  
      <section class="section">
        <h2 class="subtitle">Picture Gallery</h2>
        <div class="gallery">
          <img src="htmlimg1.jpg" alt="Images of me and my groupmates in our research group with one of our consultants">
          <img src="htmlimg2.jpg" alt="After the Defense">
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PersonalProfile'
  }
  </script>
  
  <style scoped>
  .profile-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .title {
    font-size: 2em;
    color: #333;
    margin-bottom: 20px;
  }
  
  .subtitle {
    font-size: 1.5em;
    color: #444;
    margin: 20px 0 10px 0;
  }
  
  .section {
    margin-bottom: 30px;
  }
  
  .list {
    list-style-type: disc;
    margin-left: 20px;
  }
  
  .course-table {
    width: 100%;
    border-collapse: collapse;
    margin: 10px 0;
  }
  
  .course-table th,
  .course-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  
  .course-table th {
    background-color: #f5f5f5;
  }
  
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 15px;
  }
  
  .gallery img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  </style>