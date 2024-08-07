---
title: 'Home'
date: 2023-10-24
type: landing

design:
  # Default section spacing
  spacing: "0rem"

sections:
  - block: hero
    content:
      title: Bring data science into your classroom
      text: Free data science resources for K-12 teachers and students
      # primary_action:
      #   text: Get Started
      #   url: https://hugoblox.com/templates/
      #   icon: rocket-launch
      # secondary_action:
      #   text: Read the docs
      #   url: https://docs.hugoblox.com
      #announcement:
      #  text: "Announcing the release of version 1."
      #  link:
      #    text: "Read more"
      #    url: "/blog/"
    design:
      spacing:
        padding: [0, 0, 0, 0]
        margin: [0, 0, 0, 0]
      # For full-screen, add `min-h-screen` below
      css_class: "dark"
      background:
        color: "navy"
        image:
          # Add your image background to `assets/media/`.
          filename: banner.png
          filters:
            brightness: 0.5
  - block: stats
    content:
      items:
        - statistic: "160K+"
          description: |
            Students trained
        - statistic: "6K+"
          description: |
            Teachers trained
        - statistic: "125+"
          description: |
            Number of resources
    design:
      spacing:
        padding: ['0', '0', '0', '0']
        margin: [0, 0, 0, 0]
  - block: markdown
    id: resources
    content:
      title: '<h1 style="font-size:40px; text-align: center;">Teacher Resources</h1>'
      text: '<h1 style="font-size:25px; text-align: center;width: 60vw;">Free data science resources for K-12 teachers and students</h1>'
      # primary_action:
      #   text: Get Started
      #   url: https://hugoblox.com/templates/
      #   icon: rocket-launch
    design:
      spacing:
        padding: ['40px', '0', '0', '0']
        margin: [0, 0, 0, 0]
        
  - block: cta-image-paragraph
    design:
      # For full-screen, add `min-h-screen` below
      # Section background color (CSS class)
      css_class: "bg-gray-100 dark:bg-gray-900"
      spacing:
        padding: ['0', '0', '0', '0']
    content:
    # COMPUTATIONAL THINKING
      items:
        - title: Computational thinking tests
          text: We have two computational thinking tests designed for Grades 5-12 teachers and students.
          # feature_icon: bolt
          # features:
          #   - "a"
          #   - "b"
          #   - "c"
          #Upload image to `assets/media/` and reference the filename here
          image: computational_thinking.png
          button:
            text: Access computational thinking tests
            url: https://callysto.github.io/website/computational-thinking-tests/
    # LEARNING MODULES
        - title: Learning modules
          text: These pre-made, introductory data science lessons are a way for students to develop critical thinking and problem solving skills. We start with a question, find an open dataset to answer the question, and then ask students to reflect. Filter learning modules by the subject areas or topics of interest.
          feature_icon: bolt
          features:
            - "Languages"
            - "Mathematics / Mathématiques"
            - "Social studies / Etudes Sociales"
            - "Science and more"
          # Upload image to `assets/media/` and reference the filename here
          image: social-media.png
          button:
            text: Browse learning modules
            url: https://callysto.github.io/website/learning-modules/
      # LESSON PLANS
        - title: Lesson plans
          text: We designed lesson plans to solve a variety of problems (including TED-Ed Riddles) using Python code in Jupyter notebooks. For each problem, there are three resources -
          feature_icon: bolt
          features:
            - "Teacher lesson plan (how to introduce and teach the problem)"
            - "Teacher Jupyter notebook (including instructions)"
            - "Student Jupyter notebook"
          # Upload image to `assets/media/` and reference the filename here
          image: CALM.png
          button:
            text: Browse lesson plans
            url: https://callysto.github.io/website/lesson-plans/
      # DATA VISUALIZATIONS
        - title: Data visualizations
          text: These pre-made, introductory data science lessons are a way for students to develop critical thinking and problem solving skills. We start with a question, find an open dataset to answer the question, and then ask students to reflect.
          #feature_icon: check
          #features:
          #  - "Future-proof - edit your content in text files"
          #  - "Website is generated by a single app, Hugo"
          #  - "No JavaScript knowledge required"
          # Upload image to `assets/media/` and reference the filename here
          image: dataviz.png
          button:
            text: Check out data viz
            #url: ../assets/media/example.html
            url: https://callysto.github.io/website/data-visualization/
            #url: govt_funding.html
      # STARTER KIT & ONLINE COURSES
        - title: Starter kit and online courses
          text: To get you started with integrating Callysto data science into your classroom, we have free teacher starter kit and online courses.
          feature_icon: bolt
          features:
            - "Teacher starter kit"
            - "Computing Science 10 course"
            - "Callysto artificial intelligence course"
            - "Computational thinking course"
            - "Callysto data science course"
          # Upload image to `assets/media/` and reference the filename here
          image: courses.png
          button:
            text: Browse teacher starter kit and online courses
            url: https://callysto.github.io/website/distance-learning/
      # ADDITIONAL RESOURCES  
        - title: Additional resources
          text: Additional resources
          #feature_icon: check
          #features:
          #  - "Future-proof - edit your content in text files"
          #  - "Website is generated by a single app, Hugo"
          #  - "No JavaScript knowledge required"
          # Upload image to `assets/media/` and reference the filename here
          image: additional-resources.png
          button:
            text: Check out additional resources
            url: https://callysto.github.io/website/additional-resources/
      # BLOG POSTS  
        - title: Blog posts
          text: Blog
          #feature_icon: check
          #features:
          #  - "Future-proof - edit your content in text files"
          #  - "Website is generated by a single app, Hugo"
          #  - "No JavaScript knowledge required"
          # Upload image to `assets/media/` and reference the filename here
          image: blog.png
          button:
            text: Check out our blog posts
            url: https://callysto.github.io/website/blog/
      # Contributions  
        - title: Contributions
          text: We would like to express our sincere thanks to everyone who contributed to the Callysto project. 
          #feature_icon: check
          #features:
          #  - "Future-proof - edit your content in text files"
          #  - "Website is generated by a single app, Hugo"
          #  - "No JavaScript knowledge required"
          # Upload image to `assets/media/` and reference the filename here
          image: contributions.png
          button:
            text: Meet our contributors
            url: https://callysto.github.io/website/contributions/
    design:
      # Section background color (CSS class)
      css_class: "bg-gray-000 dark:bg-gray-900"

  - block: markdown
    id: about
    content:
      title: '<h1 style="font-size:40px; text-align: center;">About</h1>'
      text: '<p style="font-size:25px; text-align: center; width: 70vw;">Callysto is a free, online learning tool that helps Grades 5-12 students and teachers learn and apply in-demand data science skills including data analysis and visualization, coding, and computational thinking. <br><br>Our interactive learning modules are available in a variety of subjects – from math to history – and are aligned with existing curriculum. Our mission is to foster computational thinking and data literacy skills in Canadian schools.'
    design:
      spacing:
        padding: ['40px', '0', '0', '0']
        margin: [0, 0, 0, 0]

  - block: testimonials
    content:
      title: ""
      text: ""
      items:
        - name: "Jenn O’neill"
          role: "Teacher"
          # Upload image to `assets/media/` and reference the filename here
          # image: "testimonial-1.jpg"
          text: "Students who I thought wouldn’t like coding or doing a computer-type skill are saying, “this is pretty cool.” And at the end of the day I always want them to work on teamwork, communication, problem solving, and conceptual learning that goes beyond just the textbook."
    design:
      spacing:
        # Reduce bottom spacing so the testimonial appears vertically centered between sections
        padding: ["6rem", 0, 0, 0]
  - block: cta-card
    id: contact
    content:
      title: Have questions? We're here to help.
      text: Email contact@callysto.ca if you have questions about how to use Callysto in your classroom.
      # button:
      #   text: Get Started
      #   url: https://hugoblox.com/templates/
    design:
      card:
        # Card background color (CSS class)
        css_class: "bg-primary-700"
        css_style: ""
---
