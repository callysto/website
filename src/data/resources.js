const B = 'https://callysto.github.io/jupyterlite/lab?path=';

export const resources = [

  // ── AI & Data Science Course ─────────────────────────────────────────────
  { title: 'Introduction to Data Science', desc: 'Get started with Jupyter notebooks, Python basics, and what data science means in the real world.', type: 'ai-course', subjects: ['ai', 'technology'], href: B + 'data-science-and-artificial-intelligence%2F01-introduction.ipynb' },
  { title: 'Working with Data', desc: 'Load, explore, and clean datasets using pandas — the essential Python data library.', type: 'ai-course', subjects: ['ai', 'technology'], href: B + 'data-science-and-artificial-intelligence%2F02-working-with-data.ipynb' },
  { title: 'Statistics', desc: 'Descriptive statistics, distributions, and how to summarise data meaningfully.', type: 'ai-course', subjects: ['ai', 'math'], href: B + 'data-science-and-artificial-intelligence%2F03-statistics.ipynb' },
  { title: 'Data Visualizations', desc: 'Create charts and graphs that communicate data insights clearly and compellingly.', type: 'ai-course', subjects: ['ai', 'technology'], href: B + 'data-science-and-artificial-intelligence%2F04-visualizations.ipynb' },
  { title: 'Markdown for Data Science', desc: 'Format notebooks with text, headings, and mathematical expressions using Markdown.', type: 'ai-course', subjects: ['ai', 'technology', 'english'], href: B + 'data-science-and-artificial-intelligence%2F05-markdown.ipynb' },
  { title: 'Data Analysis', desc: 'Apply a full data analysis workflow to real datasets, including Pokémon and Spotify data.', type: 'ai-course', subjects: ['ai', 'technology'], href: B + 'data-science-and-artificial-intelligence%2F06-data-analysis.ipynb' },
  { title: 'Primary Data Collection', desc: 'Design surveys and collect your own data to answer real questions.', type: 'ai-course', subjects: ['ai', 'technology'], href: B + 'data-science-and-artificial-intelligence%2F07-primary-data.ipynb' },
  { title: 'Natural Language Processing', desc: 'Teach computers to understand text — sentiment analysis, word frequency, and more.', type: 'ai-course', subjects: ['ai', 'technology', 'english'], href: B + 'data-science-and-artificial-intelligence%2F08-natural-language-processing.ipynb' },
  { title: 'Generative AI', desc: 'Explore how large language models and image generators work, and what they can and can\'t do.', type: 'ai-course', subjects: ['ai', 'technology'], href: B + 'data-science-and-artificial-intelligence%2F09-generative-ai.ipynb' },
  { title: 'AI Issues and Ethics', desc: 'Examine bias, fairness, privacy, and the societal impacts of artificial intelligence.', type: 'ai-course', subjects: ['ai', 'social-studies'], href: B + 'data-science-and-artificial-intelligence%2F10-ai-issues-and-ethics.ipynb' },
  { title: 'Training AI Models', desc: 'Build and train a simple machine learning model — see how AI actually learns from data.', type: 'ai-course', subjects: ['ai', 'technology'], href: B + 'data-science-and-artificial-intelligence%2F11-training-ai.ipynb' },
  { title: 'Getting Data', desc: 'Find, access, and import data from open datasets and APIs for your own projects.', type: 'ai-course', subjects: ['ai', 'technology'], href: B + 'data-science-and-artificial-intelligence%2F12-getting-data.ipynb' },

  // ── Hackathon Challenges ─────────────────────────────────────────────────
  { title: 'Pokémon Hackathon', desc: 'Explore the full Pokédex with Python. Analyse stats, visualise type matchups, and build ranking models.', type: 'hackathon', subjects: ['technology', 'math'], href: B + 'hackathon%2FPok%C3%A9mon%2F' },
  { title: 'Baseball Hackathon', desc: 'Dig into baseball statistics — batting averages, player comparisons, and team performance trends.', type: 'hackathon', subjects: ['technology', 'math'], href: B + 'hackathon%2FBaseball%2F' },
  { title: 'Basketball Hackathon', desc: 'Analyse NBA player stats, shot selection, and team data using Python.', type: 'hackathon', subjects: ['technology', 'math'], href: B + 'hackathon%2FBasketball%2F' },
  { title: 'Books Hackathon', desc: 'Use text analysis and NLP to explore literary datasets and uncover patterns in books.', type: 'hackathon', subjects: ['technology', 'english'], href: B + 'hackathon%2FBooks%2F' },
  { title: 'Music Hackathon', desc: 'Analyse music data — genres, tempos, popularity, and audio features from real datasets.', type: 'hackathon', subjects: ['technology', 'general'], href: B + 'hackathon%2FMusic%2F' },
  { title: 'Open Data Hackathon', desc: 'Access and explore open government and civic datasets — find a story in public data.', type: 'hackathon', subjects: ['technology', 'social-studies'], href: B + 'hackathon%2FOpenData%2F' },
  { title: 'Pets Hackathon', desc: 'Explore pet adoption and animal shelter data to find patterns and insights.', type: 'hackathon', subjects: ['technology', 'science'], href: B + 'hackathon%2FPets%2F' },
  { title: 'Santa Hackathon', desc: 'A festive data challenge — analyse holiday data and help Santa optimise his routes.', type: 'hackathon', subjects: ['technology', 'math'], href: B + 'hackathon%2FSanta%2F' },
  { title: 'Trees Hackathon', desc: 'Explore urban tree inventory data — species, locations, and canopy coverage patterns.', type: 'hackathon', subjects: ['technology', 'science'], href: B + 'hackathon%2FTrees%2F' },
  { title: 'Zoo Hackathon', desc: 'Analyse zoo animal data — species, diets, habitats, and conservation status.', type: 'hackathon', subjects: ['technology', 'science'], href: B + 'hackathon%2FZoo%2F' },

  // ── Lesson Plans ─────────────────────────────────────────────────────────
  { title: 'Amphibians and Algorithms', desc: 'Solve the Frog Jumping puzzle to explore computational thinking: decomposition, pattern recognition, and algorithm design.', type: 'lesson-plan', subjects: ['math', 'technology'], href: B + 'lesson-plans%2Famphibians-and-algorithms%2F' },
  { title: 'Calendars and Code', desc: 'Use modular arithmetic to calculate what day of the week any date falls on — including your birthday.', type: 'lesson-plan', subjects: ['math', 'technology'], href: B + 'lesson-plans%2Fcalendars-and-code%2F' },
  { title: 'Coast Salish Fish Traps', desc: 'Explore Northern Coast Salish intertidal fish trap design through tide patterns, geography, and mathematical modelling. Acknowledges the Tla\'amin Nation.', type: 'lesson-plan', subjects: ['math', 'science', 'indigenous'], href: B + 'lesson-plans%2Fcoast-salish-fish-traps%2F' },
  { title: 'Counting Letters', desc: 'Count letter frequencies in English, Cree, and Syllabics — a cross-cultural exploration of language and data.', type: 'lesson-plan', subjects: ['math', 'english', 'indigenous'], href: B + 'lesson-plans%2Fcounting-letters%2F' },
  { title: 'Data Science with COVID', desc: 'Apply real data science methods to COVID-19 datasets — understanding pandemic data and public health.', type: 'lesson-plan', subjects: ['math', 'science', 'health'], href: B + 'lesson-plans%2Fdata-science-with-covid%2F' },
  { title: 'Decoding Coins', desc: 'Use combinatorics and problem-solving to decode patterns in coin puzzles.', type: 'lesson-plan', subjects: ['math', 'technology'], href: B + 'lesson-plans%2Fdecoding-coins%2F' },
  { title: 'Escaping Zombies', desc: 'A graph theory challenge: use algorithms and logic to find the optimal escape route.', type: 'lesson-plan', subjects: ['math', 'technology'], href: B + 'lesson-plans%2Fescaping-zombies%2F' },
  { title: 'Health Data Privacy', desc: 'Explore real health datasets while learning about data privacy, consent, and ethical data use.', type: 'lesson-plan', subjects: ['health', 'ai', 'social-studies'], href: B + 'lesson-plans%2Fhealth-data-privacy%2F' },
  { title: 'Indigenous Populations', desc: 'Explore pre-contact and contemporary Indigenous population data — historical context and data literacy together.', type: 'lesson-plan', subjects: ['social-studies', 'indigenous', 'math'], href: B + 'lesson-plans%2Findigenous-populations%2F' },
  { title: 'Modelling a COVID-19 Outbreak', desc: 'Build an epidemic model using Python to understand how disease spreads through populations.', type: 'lesson-plan', subjects: ['math', 'science', 'health'], href: B + 'lesson-plans%2Fmodelling-covid-19-outbreak%2F' },
  { title: 'Physics of Music', desc: 'Explore harmonics, drumming, keyboard physics, and the mathematics of sound and music.', type: 'lesson-plan', subjects: ['science', 'math'], href: B + 'lesson-plans%2Fphysics-of-music%2F' },
  { title: 'Physics of Sound', desc: 'A 3-part series on sound waves: frequency, amplitude, and the physics of acoustics.', type: 'lesson-plan', subjects: ['science', 'math'], href: B + 'lesson-plans%2Fphysics-of-sound%2F' },
  { title: 'Plants and Data', desc: 'Collect and analyse plant growth data using Phidget sensors — bridging physical science and data collection.', type: 'lesson-plan', subjects: ['science', 'technology'], href: B + 'lesson-plans%2Fplants%2F' },
  { title: 'Salmon Fishing', desc: 'Explore salmon population and fishery data, connecting environmental science with Indigenous knowledge.', type: 'lesson-plan', subjects: ['science', 'indigenous', 'social-studies'], href: B + 'lesson-plans%2Fsalmon-fishing%2F' },
  { title: 'Sports Analytics: Soccer', desc: 'A 3-part soccer data analysis series — player stats, team performance, and match outcomes.', type: 'lesson-plan', subjects: ['math', 'technology'], href: B + 'lesson-plans%2Fsports%2F' },
  { title: 'Unfair Dice Problem', desc: 'Investigate probability and fairness using non-standard dice — a rich exploration of expected value.', type: 'lesson-plan', subjects: ['math'], href: B + 'lesson-plans%2Funfair-dice-problem%2F' },
  { title: 'Webscraping', desc: 'Learn to collect data from the web using Python — a practical skill for real-world data science.', type: 'lesson-plan', subjects: ['technology', 'ai'], href: B + 'lesson-plans%2Fwebscraping%2F' },
  { title: 'Phidgets Sensor Labs', desc: 'Use Phidget sensors to collect real-world data — temperature, humidity, light, moisture, and more.', type: 'lesson-plan', subjects: ['science', 'technology'], href: B + 'lesson-plans%2Fphidgets%2F' },

  // ── Data Labyrinth Labs ───────────────────────────────────────────────────
  { title: 'CALM: Personal Finance', desc: 'Explore budgeting, spending, and financial data through an interactive guided lab.', type: 'data-lab', subjects: ['health', 'math'], href: B + 'data-labyrinth%2FCALM%2F' },
  { title: 'Advanced Basketball Analytics', desc: 'Deep dive into basketball statistics — advanced metrics, player efficiency, and team analysis.', type: 'data-lab', subjects: ['math', 'technology'], href: B + 'data-labyrinth%2Fadvanced-basketball%2F' },
  { title: 'Basketball Data Lab', desc: 'Introductory basketball analytics — shooting percentages, player comparisons, and game data.', type: 'data-lab', subjects: ['math', 'technology'], href: B + 'data-labyrinth%2Fbasketball%2F' },
  { title: 'Cybersecurity Data Lab', desc: 'Explore cybersecurity trends and data — attack types, vulnerabilities, and security patterns.', type: 'data-lab', subjects: ['technology', 'social-studies'], href: B + 'data-labyrinth%2Fcybersecurity%2F' },
  { title: 'Gapminder: Global Development', desc: 'Recreate Hans Rosling\'s famous visualisations of global health and wealth data over time.', type: 'data-lab', subjects: ['social-studies', 'math'], href: B + 'data-labyrinth%2Fgapminder%2F' },
  { title: 'Health Data Privacy Lab', desc: 'Hands-on exploration of health datasets with a focus on privacy, consent, and data ethics.', type: 'data-lab', subjects: ['health', 'ai', 'social-studies'], href: B + 'data-labyrinth%2Fhealth-data-privacy%2F' },
  { title: 'Mini Basketball Lab', desc: 'A simplified basketball data activity — ideal for introductory data science lessons.', type: 'data-lab', subjects: ['math', 'technology'], href: B + 'data-labyrinth%2Fmini-basketball%2F' },
  { title: 'Music Data Lab', desc: 'Explore music datasets — streaming stats, genre trends, and audio feature analysis.', type: 'data-lab', subjects: ['technology', 'general'], href: B + 'data-labyrinth%2Fmusic%2F' },
  { title: 'Weather Data Lab', desc: 'Analyse historical weather data — temperature trends, precipitation, and climate patterns.', type: 'data-lab', subjects: ['science', 'math'], href: B + 'data-labyrinth%2Fweather%2F' },

  // ── Learning Modules — English Language Arts ─────────────────────────────
  { title: 'Shakespeare Statistics', desc: 'Apply data science to Shakespeare\'s plays — word frequency, character dialogue, and stylometric analysis.', type: 'learning-module', subjects: ['english', 'technology'], href: B + 'curriculum-notebooks%2FEnglishLanguageArts%2FShakespeareStatistics%2F' },
  { title: 'Great Gatsby Data Science', desc: 'Use text analysis to explore themes and patterns in The Great Gatsby.', type: 'learning-module', subjects: ['english', 'technology'], href: B + 'curriculum-notebooks%2FEnglishLanguageArts%2FGreatGatsbyDataScience%2F' },
  { title: 'Word Clouds', desc: 'Generate word clouds from any text to visualise word frequency and themes at a glance.', type: 'learning-module', subjects: ['english', 'technology'], href: B + 'curriculum-notebooks%2FEnglishLanguageArts%2FWordClouds%2F' },
  { title: 'Parts of Speech', desc: 'Use Python to identify and visualise parts of speech in any piece of writing.', type: 'learning-module', subjects: ['english', 'technology'], href: B + 'curriculum-notebooks%2FEnglishLanguageArts%2FPartsOfSpeech%2F' },
  { title: 'Readability Statistics', desc: 'Measure and compare the reading level and complexity of different texts.', type: 'learning-module', subjects: ['english', 'math'], href: B + 'curriculum-notebooks%2FEnglishLanguageArts%2FReadabilityStatistics%2F' },
  { title: 'Introduction to Poetry', desc: 'Explore poetic structure and language patterns using data analysis.', type: 'learning-module', subjects: ['english', 'technology'], href: B + 'curriculum-notebooks%2FEnglishLanguageArts%2FIntroductionToPoetry%2F' },
  { title: 'Story Plot Generator', desc: 'Use Python and generative AI to explore narrative structure and story generation.', type: 'learning-module', subjects: ['english', 'technology', 'ai'], href: B + 'curriculum-notebooks%2FEnglishLanguageArts%2FStoryPlotGenerator%2F' },

  // ── Learning Modules — Mathematics ───────────────────────────────────────
  { title: 'Fibonacci Numbers', desc: 'Explore the Fibonacci sequence, the golden ratio, and their surprising appearances throughout nature.', type: 'learning-module', subjects: ['math'], href: B + 'curriculum-notebooks%2FMathematics%2FFibonacciNumbers%2F' },
  { title: 'Flipping Coins', desc: 'Simulate thousands of coin flips to explore probability distributions and the law of large numbers.', type: 'learning-module', subjects: ['math'], href: B + 'curriculum-notebooks%2FMathematics%2FFlippingCoins%2F' },
  { title: 'Experimental Probability', desc: 'Run experiments to discover probability rules — compare theoretical predictions with real results.', type: 'learning-module', subjects: ['math'], href: B + 'curriculum-notebooks%2FMathematics%2FExperimentalProbability%2F' },
  { title: 'Central Tendency', desc: 'Explore mean, median, and mode using real datasets — when to use each measure and why.', type: 'learning-module', subjects: ['math'], href: B + 'curriculum-notebooks%2FMathematics%2FCentralTendency%2F' },
  { title: 'Exponential Growth', desc: 'Model exponential growth and decay — compound interest, population growth, and more.', type: 'learning-module', subjects: ['math', 'science'], href: B + 'curriculum-notebooks%2FMathematics%2FExponentialGrowth%2F' },
  { title: 'Coast Salish Baskets', desc: 'Explore mathematical patterns in Coast Salish basket weaving — geometry through Indigenous art.', type: 'learning-module', subjects: ['math', 'indigenous'], href: B + 'curriculum-notebooks%2FMathematics%2FCoastSalishBaskets%2F' },
  { title: 'Cryptography Ciphers', desc: 'Encode and decode secret messages using mathematical ciphers — Caesar, Vigenère, and more.', type: 'learning-module', subjects: ['math', 'technology'], href: B + 'curriculum-notebooks%2FMathematics%2FCryptographyCyphers%2F' },
  { title: 'Curve Fitting', desc: 'Fit mathematical curves to real data — an introduction to regression and mathematical modelling.', type: 'learning-module', subjects: ['math', 'science'], href: B + 'curriculum-notebooks%2FMathematics%2FCurveFitting%2F' },
  { title: 'Independent Probability', desc: 'Explore independent and dependent events through simulations and real data.', type: 'learning-module', subjects: ['math'], href: B + 'curriculum-notebooks%2FMathematics%2FIndependentProbability%2F' },
  { title: 'Double Bar Graphs', desc: 'Create and interpret double bar graphs with real Canadian data.', type: 'learning-module', subjects: ['math'], href: B + 'curriculum-notebooks%2FMathematics%2FDoubleBarGraphs%2F' },
  { title: 'Counting Triangles', desc: 'Discover combinatorics and pattern recognition by counting geometric shapes systematically.', type: 'learning-module', subjects: ['math'], href: B + 'curriculum-notebooks%2FMathematics%2FCountingTriangles%2F' },

  // ── Learning Modules — Science ────────────────────────────────────────────
  { title: 'Climate Change', desc: 'Analyse temperature and CO₂ data to understand climate change trends across Canada and the world.', type: 'learning-module', subjects: ['science', 'social-studies'], href: B + 'curriculum-notebooks%2FScience%2FClimateChange%2F' },
  { title: 'Elementary Climate Change', desc: 'An accessible introduction to climate data and global warming for younger students.', type: 'learning-module', subjects: ['science'], href: B + 'curriculum-notebooks%2FScience%2FElementaryClimateChange%2F' },
  { title: 'Bioinformatics of GMOs', desc: 'Explore DNA sequences and genetic modification data — bioinformatics meets food science.', type: 'learning-module', subjects: ['science', 'technology'], href: B + 'curriculum-notebooks%2FScience%2FBioinformaticsofGMOs%2F' },
  { title: 'Exploring the Solar System', desc: 'Visualise and analyse data about planets, moons, and objects in our solar system.', type: 'learning-module', subjects: ['science', 'math'], href: B + 'curriculum-notebooks%2FScience%2FExploringSolarSystem%2F' },
  { title: 'Projectile Motion', desc: 'Model the physics of objects in flight — angles, velocities, and trajectories.', type: 'learning-module', subjects: ['science', 'math'], href: B + 'curriculum-notebooks%2FScience%2FProjectileMotion%2F' },
  { title: 'Canadian Electricity Generation', desc: 'Analyse how Canada generates electricity — solar, hydro, nuclear, and fossil fuels compared.', type: 'learning-module', subjects: ['science', 'social-studies'], href: B + 'curriculum-notebooks%2FScience%2FCanadianElectricityGeneration%2F' },
  { title: 'Climate Across Provinces', desc: 'Compare climate data across Canadian provinces — precipitation, temperature, and seasonal patterns.', type: 'learning-module', subjects: ['science', 'social-studies'], href: B + 'curriculum-notebooks%2FScience%2FClimateAcrossProvinces%2F' },
  { title: 'Body Electricity', desc: 'Explore bioelectricity — how the human body generates and uses electrical signals.', type: 'learning-module', subjects: ['science', 'health'], href: B + 'curriculum-notebooks%2FScience%2FBodyElectricity%2F' },

  // ── Learning Modules — Social Studies ────────────────────────────────────
  { title: 'Geography of Residential Schools', desc: 'Map and analyse the geographical distribution of residential schools across Canada.', type: 'learning-module', subjects: ['social-studies', 'indigenous'], href: B + 'curriculum-notebooks%2FSocialStudies%2FGeographyResidentialSchools%2F' },
  { title: 'United Nations Data', desc: 'Explore UN global development data — health, education, poverty, and human rights indicators.', type: 'learning-module', subjects: ['social-studies'], href: B + 'curriculum-notebooks%2FSocialStudies%2FUnitedNations%2F' },
  { title: 'Globalization', desc: 'Visualise global trade, economic interconnections, and the data behind globalisation.', type: 'learning-module', subjects: ['social-studies', 'math'], href: B + 'curriculum-notebooks%2FSocialStudies%2FGlobalization%2F' },
  { title: 'Hansard Analysis', desc: 'Analyse Canadian parliamentary debates using text analysis and NLP techniques.', type: 'learning-module', subjects: ['social-studies', 'technology', 'english'], href: B + 'curriculum-notebooks%2FSocialStudies%2FHansardAnalysis%2F' },
  { title: 'Capitals of Canada', desc: 'Map and explore data about Canadian provincial and territorial capitals.', type: 'learning-module', subjects: ['social-studies'], href: B + 'curriculum-notebooks%2FSocialStudies%2FCapitalsOfCanada%2F' },
  { title: 'Historical Battles', desc: 'Visualise and analyse data from significant historical battles — casualties, timelines, and geography.', type: 'learning-module', subjects: ['social-studies'], href: B + 'curriculum-notebooks%2FSocialStudies%2FHistoricalBattles%2F' },

  // ── Learning Modules — Technology ────────────────────────────────────────
  { title: 'Introduction to Python', desc: 'A beginner-friendly introduction to Python programming — variables, loops, functions, and more.', type: 'learning-module', subjects: ['technology'], href: B + 'curriculum-notebooks%2FTechnologyStudies%2FIntroductionToPython%2F' },
  { title: 'Introduction to Data Structures', desc: 'Learn Python lists, dictionaries, and data structures through interactive examples.', type: 'learning-module', subjects: ['technology', 'math'], href: B + 'curriculum-notebooks%2FTechnologyStudies%2FIntroductionToDataStructures%2F' },
  { title: 'Computer Science 1', desc: 'Foundational computer science concepts — algorithms, problem-solving, and Python fundamentals.', type: 'learning-module', subjects: ['technology'], href: B + 'curriculum-notebooks%2FTechnologyStudies%2FComputerScience1%2F' },
  { title: 'Intro to Loops and Iteration', desc: 'Master Python loops — for loops, while loops, and iterating over data structures.', type: 'learning-module', subjects: ['technology'], href: B + 'curriculum-notebooks%2FTechnologyStudies%2FIntroToLoopsAndIteration%2F' },

  // ── Learning Modules — Health ─────────────────────────────────────────────
  { title: 'Asthma Rates', desc: 'Analyse asthma prevalence data across Canadian regions — environmental and demographic factors.', type: 'learning-module', subjects: ['health', 'science', 'social-studies'], href: B + 'curriculum-notebooks%2FHealth%2FAsthmaRates%2F' },
  { title: 'Seven Minute Workout', desc: 'Track and visualise workout data — a data science approach to health and fitness.', type: 'learning-module', subjects: ['health', 'math'], href: B + 'curriculum-notebooks%2FHealth%2FSevenMinuteWorkout%2F' },

  // ── Data Viz of the Week ──────────────────────────────────────────────────
  { title: 'COVID-19 Visualizations', desc: 'Comprehensive visualisations of COVID-19 case counts, trends, and geographic spread.', type: 'data-viz', subjects: ['science', 'health', 'math'], href: B + 'data-viz-of-the-week%2Fcovid-19-visualizations%2F' },
  { title: 'Climate Change Temperature', desc: 'Visualise global and Canadian temperature changes over decades of climate data.', type: 'data-viz', subjects: ['science', 'social-studies'], href: B + 'data-viz-of-the-week%2Fclimate-change-temperature%2F' },
  { title: 'World Happiness', desc: 'Explore the World Happiness Report data — what makes countries happier and why.', type: 'data-viz', subjects: ['social-studies', 'math'], href: B + 'data-viz-of-the-week%2Fworld-happiness%2F' },
  { title: 'Canada Rent Prices', desc: 'Visualise rental housing costs across Canadian cities and regions over time.', type: 'data-viz', subjects: ['social-studies', 'math'], href: B + 'data-viz-of-the-week%2Fcanada-rent%2F' },
  { title: 'World Carbon Emissions', desc: 'Compare carbon emissions by country — which nations emit the most and how trends are changing.', type: 'data-viz', subjects: ['science', 'social-studies'], href: B + 'data-viz-of-the-week%2Fworld-carbon-emissions%2F' },
  { title: 'Air Quality', desc: 'Analyse air quality index data across cities — pollutants, health risks, and seasonal patterns.', type: 'data-viz', subjects: ['science', 'health'], href: B + 'data-viz-of-the-week%2Fair-quality%2F' },
  { title: 'Water Quality', desc: 'Explore water quality data — contamination levels, safe drinking water access, and trends.', type: 'data-viz', subjects: ['science', 'health'], href: B + 'data-viz-of-the-week%2Fwater-quality%2F' },
  { title: 'Solar Energy', desc: 'Visualise solar energy generation data and the global transition to renewable energy.', type: 'data-viz', subjects: ['science', 'social-studies'], href: B + 'data-viz-of-the-week%2Fsolar-energy%2F' },
  { title: 'Wildfires', desc: 'Visualise wildfire data — frequency, area burned, and geographic patterns across North America.', type: 'data-viz', subjects: ['science', 'social-studies'], href: B + 'data-viz-of-the-week%2Fwildfires%2F' },
  { title: 'Government Spending', desc: 'Compare how governments allocate public spending — healthcare, education, military, and more.', type: 'data-viz', subjects: ['social-studies', 'math'], href: B + 'data-viz-of-the-week%2Fgovernment-spending%2F' },
  { title: 'Global Food Systems', desc: 'Explore global food production, consumption, and food security data.', type: 'data-viz', subjects: ['science', 'social-studies'], href: B + 'data-viz-of-the-week%2Fglobal-food%2F' },
  { title: 'Dungeons & Dragons Stats', desc: 'Analyse D&D monster stats and character data — a fun introduction to data distributions.', type: 'data-viz', subjects: ['math', 'technology'], href: B + 'data-viz-of-the-week%2Fdungeons-dragons%2F' },
  { title: 'NLP Sentiment Analysis', desc: 'Visualise sentiment patterns in text data using natural language processing techniques.', type: 'data-viz', subjects: ['technology', 'english', 'ai'], href: B + 'data-viz-of-the-week%2FNLP-sentiment-analysis%2F' },
  { title: 'Zero Emission Vehicles', desc: 'Track the growth of zero emission charging stations and EV adoption across Canada.', type: 'data-viz', subjects: ['science', 'social-studies'], href: B + 'data-viz-of-the-week%2Fzero-emission-charging-stations%2F' },
  { title: 'Black History Month: Immigration', desc: 'Visualise historical and contemporary Black immigration patterns and demographics in Canada.', type: 'data-viz', subjects: ['social-studies'], href: B + 'data-viz-of-the-week%2Fblack-history-month-immigration%2F' },
  { title: 'Pi Day', desc: 'Celebrate π with data — visualise digits, estimate π through Monte Carlo simulation, and explore the math.', type: 'data-viz', subjects: ['math'], href: B + 'data-viz-of-the-week%2Fpi-day%2F' },
  { title: 'Among Us Data', desc: 'Analyse player behaviour and game statistics from the popular game Among Us.', type: 'data-viz', subjects: ['technology', 'math'], href: B + 'data-viz-of-the-week%2Famong-us%2F' },
  { title: 'Dog Rating Inflation', desc: 'Investigate rating inflation on social media — analysing dog rating data from Twitter.', type: 'data-viz', subjects: ['math', 'social-studies'], href: B + 'data-viz-of-the-week%2Fdog-rating-inflation%2F' },
  { title: 'Price Comparison: Canada', desc: 'Compare prices of common goods and services across Canadian cities.', type: 'data-viz', subjects: ['social-studies', 'math'], href: B + 'data-viz-of-the-week%2Fprice-comparison-Canada%2F' },
  { title: 'Twitch Popularity', desc: 'Explore streaming data from Twitch — which games and streamers dominate and why.', type: 'data-viz', subjects: ['technology', 'social-studies'], href: B + 'data-viz-of-the-week%2Ftwitch-popularity%2F' },

  // ── Interesting Problems ──────────────────────────────────────────────────
  { title: 'Birthday Problem', desc: 'How many people do you need in a room before two share a birthday? The answer surprises everyone.', type: 'interesting-problem', subjects: ['math'], href: B + 'interesting-problems%2Fnotebooks%2Fbirthday-problem.ipynb' },
  { title: 'Analysing NHL Statistics', desc: 'Explore NHL player and team statistics using Python — goals, assists, and performance metrics.', type: 'interesting-problem', subjects: ['math', 'technology'], href: B + 'interesting-problems%2Fnotebooks%2Fanalysing-nhl-statistics.ipynb' },
  { title: 'Billionaires', desc: 'Analyse the world\'s billionaire data — wealth distribution, industries, and geographic concentration.', type: 'interesting-problem', subjects: ['math', 'social-studies'], href: B + 'interesting-problems%2Fnotebooks%2Fbillionaires.ipynb' },
  { title: 'Hundred Prisoners Problem', desc: 'Can 100 prisoners find their names using only 50 guesses each? A counterintuitive probability puzzle.', type: 'interesting-problem', subjects: ['math'], href: B + 'interesting-problems%2Fnotebooks%2Fhundred-prisoners-problem.ipynb' },
  { title: 'Misleading Graphs', desc: 'Identify how graphs can deceive — truncated axes, cherry-picked data, and visual manipulation.', type: 'interesting-problem', subjects: ['math', 'social-studies'], href: B + 'interesting-problems%2Fnotebooks%2Fmisleading-graphs.ipynb' },
  { title: 'Datasaurus', desc: 'Datasets with identical statistics but wildly different shapes — a powerful lesson in why visualisation matters.', type: 'interesting-problem', subjects: ['math', 'technology'], href: B + 'interesting-problems%2Fnotebooks%2Fdatasaurus.ipynb' },
  { title: 'Rock Paper Scissors', desc: 'Simulate and analyse Rock Paper Scissors — is it truly random, or can patterns be found?', type: 'interesting-problem', subjects: ['math', 'technology'], href: B + 'interesting-problems%2Fnotebooks%2Frock-paper-scissors.ipynb' },
  { title: 'Song Lyrics Analysis', desc: 'Visualise word frequency in song lyrics as pie charts — which words dominate popular music?', type: 'interesting-problem', subjects: ['math', 'english', 'technology'], href: B + 'interesting-problems%2Fnotebooks%2Fsong-lyrics-pie-charts.ipynb' },
  { title: 'Growth Charts', desc: 'Explore how growth charts work and what data they reveal about population health trends.', type: 'interesting-problem', subjects: ['math', 'health'], href: B + 'interesting-problems%2Fnotebooks%2Fgrowth-charts.ipynb' },
  { title: 'Migratory Bird Sanctuaries', desc: 'Map and analyse migratory bird sanctuary data across Canada.', type: 'interesting-problem', subjects: ['science', 'social-studies'], href: B + 'interesting-problems%2Fnotebooks%2Fmigratory-bird-sanctuaries.ipynb' },
  { title: 'Budget Visualization', desc: 'Visualise personal or government budgets using interactive Python charts.', type: 'interesting-problem', subjects: ['math', 'social-studies'], href: B + 'interesting-problems%2Fnotebooks%2Fbudget-visualization.ipynb' },
  { title: 'Populations of Countries', desc: 'Explore and compare population data across countries and regions over time.', type: 'interesting-problem', subjects: ['social-studies', 'math'], href: B + 'interesting-problems%2Fnotebooks%2Fpopulations-of-countries.ipynb' },
  { title: 'Two Digit Primes', desc: 'Investigate prime numbers, patterns, and number theory through computational exploration.', type: 'interesting-problem', subjects: ['math'], href: B + 'interesting-problems%2Fnotebooks%2Ftwo-digit-primes.ipynb' },
  { title: 'Analysing Text Statistics', desc: 'Measure sentence length, word frequency, and other statistical properties of any text.', type: 'interesting-problem', subjects: ['english', 'math', 'technology'], href: B + 'interesting-problems%2Fnotebooks%2Fanalysing-text-statistics.ipynb' },
];

export const typeConfig = {
  'learning-module': { label: 'Learning Module', color: 'var(--color-callisto)' },
  'data-viz':        { label: 'Data Viz',         color: 'var(--color-nebula)' },
  'ai-course':       { label: 'AI Course',        color: 'var(--color-aurora)' },
  'hackathon':       { label: 'Hackathon',        color: 'var(--color-stellar)' },
  'lesson-plan':     { label: 'Lesson Plan',      color: 'var(--color-callisto-light)' },
  'interesting-problem': { label: 'Interesting Problem', color: 'var(--color-dust)' },
  'data-lab':        { label: 'Data Lab',         color: 'var(--color-nebula)' },
};

export const subjectConfig = {
  'math':           'Math',
  'science':        'Science',
  'english':        'English',
  'social-studies': 'Social Studies',
  'technology':     'Technology',
  'indigenous':     'Indigenous',
  'health':         'Health',
  'ai':             'AI & Data Science',
  'general':        'General',
};
