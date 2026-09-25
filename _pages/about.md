---
permalink: /
author_profile: true
stylesheets:
  - /assets/css/home.css
redirect_from: 
  - /about/
  - /about.html
---
<h1 class="main-heading">Welcome to my Homepage!</h1>

Hi! I am a second-year master's student and I am currently studying at National University of Defense Technology with [Prof. Zhiping Cai](https://scholar.google.com/citations?hl=zh-CN&user=uVwk4XIAAAAJ). My current research focuses on **Style Transfer**, **3D Reconstruction** Based on 3DGS and **Edge Detection**. Feel free to reach out if you are interested in collaboration or potential opportunities.

News
---------------
<div class="news-box">
  <ul class="news-list">
    
<li><span class="news-date"><em>2026.07</em></span> 🎉🎉 DCGS has successfully advanced to the second stage of AAAI27.</li>
<li><span class="news-date"><em>2026.07</em></span> 🎉🎉 DCGS has been submitted to AAAI 2027.</li>
<li><span class="news-date"><em>2026.06</em></span> 🎉🎉 I began my internship at Huawei.</li>
<li><span class="news-date"><em>2026.03</em></span> 🎉🎉 StyleGallery has been accepted by CVPR 2026.</li>
<li><span class="news-date"><em>2026.02</em></span> 🤡🤡 IJCAI has been downgraded to CCF-B</li>
<li><span class="news-date"><em>2026.02</em></span> 🎉🎉 DCGS has been submitted to IJCAI 2026.</li>
<li><span class="news-date"><em>2025.11</em></span> 🎉🎉 StyleGallery has been submitted to CVPR 2026.</li>
<li><span class="news-date"><em>2024.09</em></span> 🎉🎉 I began my graduate studies at NUDT.</li>
<li><span class="news-date"><em>2024.06</em></span> 🎉🎉 I have successfully completed my undergraduate studies!.</li>
  </ul>
</div>

Experience
--------------

<div class="experience-container">

  <div class="experience-card">
      <img src="images/huawei-color.svg" alt="Huawei logo" class="experience-logo">
      <div class="experience-info">
          <strong>Huawei Nanjing Research Institute</strong><br>
          <em>2026.6 - 2026.9 (Outstanding Intern)</em><br>
          Haisi Semiconductor Business Department, Internship
      </div>
  </div>


  <div class="experience-card">
      <img src="images/nudt.png" alt="NUDT logo" class="experience-logo">
      <div class="experience-info">
          <strong>National University of Defense Technology</strong><br>
          <em>2024.09 - Present</em><br>
          College of Computer Science, Master's Degree Candidate
      </div>
  </div>

  <div class="experience-card">
      <img src="images/ouc.png" alt="OUC logo" class="experience-logo">
      <div class="experience-info">
          <strong>Ocean University of China</strong><br>
          <em>2020.09 - 2024.06</em><br>
          Department of Information Science and Engineering, Bachelor's Degree
      </div>
  </div>

</div>


Publications
--------------
<button class="pub-button active" onclick="filterPublications(event, 'all')">Core Publications</button>
<button class="pub-button" onclick="filterPublications(event, 'list')">Full Publications List</button>

(* equal contribution · &dagger; corresponding author · &Dagger; project leader)

<div id="core-publications" class="publication-view" data-publication-view="core">


<div class="publication-card" data-category="all"> 
  <div style="display: flex; align-items: center;">
    <div class="pub-media-rotator" data-interval="4000" style="position: relative; width: 320px; height: 180px; margin-right: 20px; border-radius: 8px; overflow: hidden; flex: 0 0 auto;"> 
      <img src="images/stylegallery.png" alt="StyleGallery" style="width: 320px; height: 180px; object-fit: contain; display: block; margin: 0 auto;"> 
    </div> 
    <div>
      <strong>StyleGallery: Training-free and Semantic-aware Personalized Style Transfer from Arbitrary Image References</strong><br>
      <i style="font-size: 13px;">
        <a href="https://iiiiiiiword.github.io/" target="_blank">
          <strong>Boyu He*</strong>
        </a>,
        <a href="https://yunfan1202.github.io/" target="_blank">
          <strong>Yunfan Ye*</strong>
        </a>,
        <strong>Chang Liu</strong>,
        <strong>Weishang Wu</strong>,
        <strong>Fang Liu&dagger;</strong>,
        <strong>Zhiping Cai&dagger;</strong>.
      </i><br> 
      We introduce StyleGallery, a training-free and semantic-aware framework for personalized style transfer from arbitrary image references. By adaptively clustering and matching semantic regions without extra masks, it enables fine-grained, interpretable stylization while preserving global content structure and supporting flexible customization with multiple style references.
      <br> 
      <b><i style="color:#83a1c7;">CVPR 2026 &nbsp;
      </i></b> 
      <a href="https://arxiv.org/html/2603.10354v2"><em>[arXiv]</em></a> 
      <a href="https://github.com/iiiiiiiword/StyleGallery"><em>[code]</em></a> 
    </div>
  </div> 
</div>


</div>


<div id="full-publications" class="publication-view" data-publication-view="list" hidden>
  <ul class="full-publication-list">
    <li>
      <span class="pub-list-badge">CVPR 2026</span>
      <span class="pub-list-title">StyleGallery: Training-free and Semantic-aware Personalized Style Transfer from Arbitrary Image References</span><br>
      <span class="pub-list-authors">
        <a href="https://iiiiiiiword.github.io/" target="_blank">
          <strong>Boyu He</strong>
        </a>,
        <a href="https://yunfan1202.github.io/" target="_blank">
          <strong>Yunfan Ye*</strong>
        </a>,
        <strong>Chang Liu</strong>,
        <strong>Weishang Wu</strong>,
        <strong>Fang Liu&dagger;</strong>,
        <strong>Zhiping Cai&dagger;</strong>.
      </span>
      <span class="pub-list-note">Poster.</span>
      <span class="pub-list-links"><a href="https://arxiv.org/html/2603.10354v2">[arXiv]</a><a href="https://github.com/iiiiiiiword/StyleGallery">[code]</a></span>
    </li>
  </ul>
</div>

<script src="assets/js/show_publications.js"></script>
<script src="assets/js/pub_media_rotator.js"></script>


<!-- Projects
--------
<div class="project-card" data-category="project"> 
  <div style="display: flex; align-items: center;">
    <div class="pub-media-rotator" data-interval="4000" style="position: relative; width: 320px; height: 180px; margin-right: 20px; border-radius: 8px; overflow: hidden; flex: 0 0 auto;">
      <img src="images/stylegallery-pg.png" alt="StyleGallery-Project Page" style="width: 620px; height: 180px; object-fit: contain; display: block; margin: 0 auto;">
    </div>
    <div> 
      <strong>StyleGallery's Page</strong><br>
      In collaboration with Yue Su, I refined and improved his original homepage template. A clean standalone template version is coming soon.
      <br> 
      <b><i style="color:#83a1c7;">Project &nbsp;</i></b> 
      <a href=""><em>[code]</em></a> 
    </div>
  </div> 
</div> -->


<!-- Awards
--------
- *3026.01*, Successfully survived 17 consecutive paper deadlines without touching grass.
- *3025.09*, Best Excuse Generation Award, SleepFormer Research Group.
- *3025.06*, Outstanding Contributor to Instant Noodle Consumption Efficiency.
- *3024.12*, GPU Emotional Damage Scholarship (Full Funding).
- *3024.08*, Ranked Top 0.1% Worldwide in “I’ll Fix It Tomorrow”.



Services
--------
- *3026.06 – Present*, Chief Coffee Consumption Officer, Midnight Research Lab.
- *3026.01 – Present*, Full-time Debugger of Problems Created by Myself.
- Reviewer for Journal of Unfinished Projects.
- Area Chair for Conference on Last-Minute Submissions (CLMS).
- Volunteer Therapist for Burned-out GPUs.



Talks
--------
- *3026.07*, “How to Finish a Paper 3 Minutes Before Deadline.”
- *3026.05*, “Large Language Models and Large Amounts of Caffeine.”
- *3025.11*, “On the Emotional Stability of GPUs Under Extreme Stress.”
- *3025.08*, “Instant Noodles as Scalable Research Infrastructure.”
- *3025.03*, “Sleep is Temporary, Camera-Ready is Forever.” -->
