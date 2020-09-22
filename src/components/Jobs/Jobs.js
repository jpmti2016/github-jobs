import React, { useState, useEffect } from "react";

import Job from "./Job";
import Pagination from "../Pagination";
import SearchForm from "./SearchForm";
import SelectForm from "./SelectForm";

import axios from "axios";
// axios.defaults.baseURL = "https://jobs.github.com";

const Jobs = ({ jobs, setJobs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [numberOfButtons, setNumberOfButtons] = useState(5);
  const [search, setSearch] = useState("");
  const [fulltime, setFullTime] = useState(false);
  const [location, setLocation] = useState("New York");

  useEffect(() => {
    // const getGitHubJobs = async () => {
    //   try {
    //     const response = await axios.get(
    //       `/positions.json?description=${search}&location=${location}&full_time=${fulltime}`
    //     );

    //     setJobs(response?.data);
    //     setNumberOfItems(response?.data?.length);
    //   } catch (error) {
    //     console.error("getJobsCall", error);
    //   }
    // };

    // getGitHubJobs();
    const data = [
      {
        "id": "6aa19690-d874-4fdd-a1d8-a1168a7b632c",
        "type": "Full Time",
        "url":
          "https://jobs.github.com/positions/6aa19690-d874-4fdd-a1d8-a1168a7b632c",
        "created_at": "Mon Sep 21 22:07:44 UTC 2020",
        "company": "Agiloft, Inc.",
        "company_url": "http://www.agiloft.com",
        "location": "Moscow, Russia",
        "title": "QA Automation Engineer - Remote",
        "description":
          '<p><strong>THRIVE WITH AGILOFT</strong></p>\n<p>Are you an experienced QA Automation Engineer who is successful, motivated, smart, energetic, and looking for a rewarding position in a growing, profitable, and dynamic company?</p>\n<p>Agiloft is expanding our developer team, looking for QA Automation Engineers hat thrive working with enterprises in multiple industries, with unique business challenges requiring sophisticated solution design.</p>\n<p><strong>WHY JOIN AGILOFT?</strong></p>\n<ul>\n<li>\n<p>Agiloft was named the market leader in every category in the <a href="https://www.agiloft.com/flash/Gartner_critical_capabilities_for_CLM.pdf">Gartner Critical Capabilities for CLM report</a>, and a market leader in the Gartner Magic Quadrant.</p>\n</li>\n<li>\n<p>Contract Lifecycle Management (CLM) is one of the fastest-growing areas of enterprise sales, with a TAM projected to climb from $2B to $7B in the next 5 years.</p>\n</li>\n<li>\n<p>The Agiloft Contract and Commerce Lifecycle Platform has won over <a href="https://www.agiloft.com/awards.htm">a dozen awards, including the Editor\'s Choice award from PC Mag</a>, for the past five years in a row.</p>\n</li>\n<li>\n<p>Agiloft has a highly differentiated value proposition which is uniquely appealing to enterprises: pre-built applications with a deeply configurable, no-code platform for integrated Business Process Management throughout an organization.</p>\n</li>\n<li>\n<p>Agiloft is pioneering the applied use of Artificial Intelligence to enable next-generation business commerce at organizations ranging from small enterprises to U.S. government agencies and Fortune 100 companies.</p>\n</li>\n<li>\n<p>Agiloft is the only company in the industry with the confidence to provide an unconditional satisfaction guarantee, and you too will be successful with Agiloft.</p>\n</li>\n</ul>\n<p>As the leader in the CCLM market, Agiloft is winning many Enterprise deals and looking to hire the best talent to meet this demand with a competitive compensation plan that rewards overachievement.</p>\n<p><strong>POSITION OVERVIEW</strong></p>\n<p>We are looking for a full-time QA Automation Engineer to help with manual and automated quality assurance of the Agiloft software platform. You should have no less than two years of professional experience in software testing and test automation. We also expect you to perform well working in a geographically distributed and diverse team.</p>\n<p><strong>Job Responsibilities</strong></p>\n<ul>\n<li>Write test scripts and scenarios to extend existing testing automation framework</li>\n<li>Advance and maintain the test automation framework</li>\n<li>Research and resolve any broken automation scripts that fail during execution</li>\n<li>Support manual QA testing efforts in conversion of manual test cases into automated ones</li>\n<li>Update test results in test tracking tool(s)</li>\n<li>Report, track, and manage any discovered defects to resolution</li>\n<li>Work effectively and collaboratively with other members on the product team</li>\n</ul>\n<p><strong>Required Qualifications</strong></p>\n<ul>\n<li>Solid experience with WATIR and/or Ruby/Selenium/Python</li>\n<li>2+ years of test automation experience in web/cloud services, applications, and platforms</li>\n<li>Experience with writing and executing detailed test cases, test plans and test design documents</li>\n<li>Experience with application (UI/API/Unit) automation tools, BDD automation tools, monitoring tools, performance testing tools, and automation technologies</li>\n<li>BS in Computer Science, Software Engineering or equivalent.</li>\n<li>Ability to speak and write in English</li>\n</ul>\n<p><strong>BENEFITS AND PERKS</strong></p>\n<ul>\n<li>Competitive salary</li>\n<li>Referral bonuses</li>\n<li>Flexible work schedules</li>\n<li>Professional development and career growth opportunities</li>\n<li>Awesome team members</li>\n</ul>\n<p><strong>To Apply</strong></p>\n<p>For immediate consideration, go to For immediate consideration, go to <a href="https://tinyurl.com/y2g63jvr">https://www.agiloft.com/QAAutomationEngineer</a> to apply.</p>\n',
        "how_to_apply":
          '<p>For immediate consideration, go to For immediate consideration, go to <a href="https://tinyurl.com/y2g63jvr">https://www.agiloft.com/QAAutomationEngineer</a> to apply.</p>\n',
        "company_logo":
          "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcHFLIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--66e409d3491ec8fc74f3c38e92da7fbd35e2a675/Agiloft%20Logo%20plain%20(Indeed).png",
      },
      {
        "id": "077f6345-89f7-482e-a67f-f85c4de53a4b",
        "type": "Full Time",
        "url":
          "https://jobs.github.com/positions/077f6345-89f7-482e-a67f-f85c4de53a4b",
        "created_at": "Mon Sep 21 14:08:18 UTC 2020",
        "company": "Chargify",
        "company_url": "http://chargify.com",
        "location": "Remote",
        "title": "Senior Full-Stack Engineer (Rails/React)",
        "description":
          "<h3>About Chargify</h3>\n<p>Chargify is a subscription billing service that serves SaaS companies with complex billing needs. We’ve been around for 10 years and serve thousands of software businesses. We’re looking for engineers who are excited to jump into a fast-evolving space to solve challenging, real-world problems.</p>\n<h3>About the Role</h3>\n<p>At Chargify, our engineering team is primarily comprised of full-Stack Ruby on Rails developers organized into Feature Teams. Each team is lead by an Engineering Manager and works closely with a dedicated Product Manager to build features specifically targeting one of our core User Personas. As an engineer on the team, you will work alongside your team to build new features and works towards increasing the quality of the code and paying down technical debt.</p>\n<h3>How We Work</h3>\n<p>We follow a two-week sprint rhythm. We keep daily stand-ups short and focused. At the end of each two-week sprint, engineers take a day to invest in their own technical skills. We prioritize refactoring and platform work to keep the quality of our codebase high.</p>\n<h3>Our Stack</h3>\n<p>Chargify’s core offering is backed by a large but well-loved Ruby on Rails application. We use MySQL as our main database and rely heavily on Elasticsearch for reporting and analytics capabilities. The majority of our frontend code is written in React.js. Our integrations exist as microservice Ruby on Rails applications.</p>\n<h3>About You</h3>\n<p>We’re looking for engineers who care deeply about their craft, take ownership of their work, finish what they start, and have a strong track record of shipping software. We appreciate individuals who speak up when they recognize a priority or process improvement. It is necessary that you are able to communicate effectively.</p>\n<p>We require working experience with Ruby, Rails, SQL, and JavaScript. Experience with current React best practices is a plus.</p>\n<h3>The Hiring Process</h3>\n<p>We value your time and interest in Chargify, so we want to be upfront with our hiring process. Here’s what to expect:</p>\n<p><strong>Stage 1: Initial Phone Screen</strong> — If we believe you’d be a good fit after reviewing your initial application, we’ll reach out to schedule a 30-minute video call. We’ll dive deeper into your past experience and learn more about your career goals.</p>\n<p><strong>Stage 2: Code Challenge</strong> — We’ll ask you to complete a short code challenge to demonstrate how you approach problems. This exercise should take 2-3 hours to complete and is done on your own time. We won’t ask you to code while looking over your shoulder!</p>\n<p><strong>Stage 3: Code Challenge Follow-up</strong> — We schedule a video call with two of our engineers to discuss your code challenge. We’ll also use this time to dive into technical topics related to Chargify.</p>\n<p><strong>Stage 4: Meet our VP of Engineering</strong> — Your final interview will be with our VP of Engineering to discuss company, culture, and whatever else you may want to discuss.</p>\n<p><strong>Stage 5: Offer</strong> — We’ll make an offer that we hope you’ll accept!</p>\n<h3>Benefits</h3>\n<ul>\n<li>Work from anywhere in the US.</li>\n<li>Open PTO policy (that we make sure gets used!)</li>\n<li>Monthly developer stipend for learning resources, conferences, and courses.</li>\n<li>Full health, vision, and dental insurance.</li>\n<li>401(k)</li>\n<li>Company-provided MacBook Pro</li>\n</ul>\n",
        "how_to_apply":
          '<p><a href="http://bit.ly/chargify-fullstack-2020">http://bit.ly/chargify-fullstack-2020</a></p>\n',
        "company_logo":
          "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcENLIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f174ed16a0cc71a13e359e69779431a1a84a4457/chargifylogo.png",
      },
      {
        "id": "bc05a37a-422a-495d-9c44-f995f5259b86",
        "type": "Full Time",
        "url":
          "https://jobs.github.com/positions/bc05a37a-422a-495d-9c44-f995f5259b86",
        "created_at": "Fri Sep 18 14:49:46 UTC 2020",
        "company": "The Rock Creek Group",
        "company_url": "http:",
        "location": "Washington",
        "title": "Senior Full-Stack Engineer",
        "description":
          '<h2>Company Description</h2>\n<p>RockCreek is a leading global investment management firm that applies data-driven technology and innovation to sustainable investing. RockCreek’s entrepreneurial spirit, open culture, and inclusive team lead to better investments for universities, foundations, pension plans, and sovereign funds that partner with us. The firm is highly focused on the integration of environmental, social, and governance (ESG) factors as well as diversity and sustainable impact across portfolios to generate long-term returns. RockCreek has a culture of diversity, debate, and relentless drive to excel. RockCreek is among the largest inclusive firms in the world.\nSince our founding, RockCreek’s commitment to sustainable investing, long term value creation, and good governance has begun at home. The way we operate our offices and partner with multiple stakeholders are keeping us with our aim to have a positive impact on markets globally and reduce our carbon footprint. This strong stable culture values inclusion as well as a commitment to investing responsibly for long term returns. Our founders have a deep commitment to sustainability as well as extensive experience with sustainable impact investing and ESG policies which date back to the 1980s. This includes investing in energy, health, education, fintek, and financial inclusion.</p>\n<h2>Job Description</h2>\n<p>RockCreek seeks a Senior Full-stack Engineer to work with a talented engineering team on the development of our growing set of cloud-based tools and applications, including user interaction with our data store. The Senior Full-stack Engineer is a key role that will deliver critical front-end applications and strongly influence RockCreek’s engineering future, including architecture and technology choices for front-end applications.</p>\n<p>The Senior Full-stack Engineer will:</p>\n<ul>\n<li>Write code every day, including CloudFormation templates, JavaScript, React, and Node.js</li>\n<li>Produce code and shape decisions based upon personal experience and informed by industry best practices\n-Engage in all aspects of design and engineering, following designer-supplied wireframes, HTML, and CSS through to implementation and deployment</li>\n<li>Engage daily in the architecture of multiple applications across several platforms, ranging from SQL and NoSQL databases to web- and API-based applications</li>\n<li>Interact with the RockCreek AWS estate, from starting and stopping instances, configuring AWS managed services, recommending technologies, and optimizing performance and costs of all cloud-hosted resources</li>\n<li>Collaborate closely with technology team and non-technology users, translating user needs to requirements, priorities, release schedules and code</li>\n<li>Communicate frequently with the engineering team and application users, both in writing and verbally</li>\n</ul>\n<h2>Qualifications</h2>\n<p><strong>Key Experience</strong></p>\n<ul>\n<li>Previous experience building applications production-ready and performant React-based front-ends and applications using Node.js</li>\n<li>Bachelor’s Degree in computer engineering, software engineering or equivalent professional experience</li>\n<li>At least 5 years’ hands-on experience as a front-end or full-stack engineer, including daily coding and application development in an Agile environment, with daily standups and ticketing</li>\n<li>Experience using containers and deploying via continuous integration and continuous deployment tools in AWS, including:</li>\n</ul>\n<p>º Kubernetes</p>\n<p>º Elasticsearch</p>\n<p>º ElastiCache</p>\n<p>º DynamoDB</p>\n<p>º RDS (preferably PostgreSQL and SQL Server)</p>\n<ul>\n<li>Experience writing user and integration tests and using continuous integration systems to automate tests as part of a version management system and process</li>\n<li>Strong written and verbal English communication skills, with both technical and non-technical audiences</li>\n<li>Must be a US Citizen or Permanent resident. We cannot entertain visa sponsorship at this time</li>\n</ul>\n<h2>Desired Skills</h2>\n<ul>\n<li>Experience in investment applications or working with the investment and/or financial industry</li>\n<li>Past application development using React</li>\n<li>Practical experience with any of the following technologies and services:</li>\n</ul>\n<p>º GraphQL</p>\n<p>º Ruby</p>\n<p>º Ruby on Rails</p>\n<h2>Additional Information</h2>\n<p><strong>Benefits</strong></p>\n<p>Consistent with our belief that team members are our most valuable asset, RockCreek offers a competitive benefits package.</p>\n<ul>\n<li>Remote work technology</li>\n<li>Medical, dental, and vision insurance; dependents eligible</li>\n<li>401(k) retirement plan with company match</li>\n<li>Paid time off, sick leave, and company holidays</li>\n<li>Wellness programs including remote meditation and fitness classes</li>\n<li>Onsite gym</li>\n</ul>\n<h2>Interested?</h2>\n<p><a href="https://vonq.io/2RAN8lj">Click here to apply!</a>.</p>\n<h2>Additional Information</h2>\n<p>For additional information on RockCreek, please visit <a href="https://therockcreekgroup.com">https://therockcreekgroup.com</a></p>\n<p>Follow us on LinkedIn: <a href="https://linkedin.com/company/the-rock-creek-group">https://linkedin.com/company/the-rock-creek-group</a></p>\n',
        "how_to_apply":
          '<p><a href="https://vonq.io/2RAN8lj">Click here to apply!</a></p>\n',
        "company_logo":
          "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbjZLIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--45918441e73bf31d3b2170cdd31e71c9ea5d1e9e/Rock%20creek.png",
      },
      {
        "id": "0f269ead-6f91-413d-9bf9-aa055d55efdd",
        "type": "Full Time",
        "url":
          "https://jobs.github.com/positions/0f269ead-6f91-413d-9bf9-aa055d55efdd",
        "created_at": "Tue Sep 15 12:11:42 UTC 2020",
        "company": " Marketcircle",
        "company_url": "https://www.marketcircle.com/",
        "location": "Toronto, Ontario - Remote",
        "title": "Sr. Backend Software Developer",
        "description":
          "<p>Want to work remotely? Want to make an impact by working for a small company that values autonomy and working collaboratively in a team to solve challenging problems? Love learning new technology? Then you'll fit right into the Marketcircle Team!</p>\n<p>Marketcircle is looking for some Sr. Backend Software Developers. Join as a key member of our team responsible for building and supporting the services and infrastructure for the Daylite CRM Platform.</p>\n<p>Qualified candidates:\n·       Have 8+ years of experience\n·       Hold a B.Sc Computer Science or B.Eng Software, or equivalent work experience.\n·       Experienced using Postgres, Rails (Ruby), Django (Python), Kubernetes, nginx, Redis, Kafka, HashiCorp Suite, Graylog, Sinatra, Prometheus, istio, grafana, CalDAV &amp; CardDav, AWS, and Elasticsearch\n·       Are comfortable working remotely (100% remote work environment) as well as being comfortable working both independently and collaboratively.</p>\n<p>Bonus points for:\n·       Experience with infrastructure management tools (like Puppet, Ansible or Chef)\n·       Experience with cloud infrastructure providers (like AWS, Google Cloud, Microsoft Azure or DigitalOcean)\n·       Knowing your way around the network stack, from HTTP to TCP to IP and have a solid understanding of security (TLS/ IPSec/Firewalls)</p>\n<p>Things you might be working on:</p>\n<p>·       RESTful interfaces to persist data for our client apps</p>\n<p>·       Authentication and payment backends</p>\n<p>·       PostgreSQL database(s) with custom extensions</p>\n<p>·       Elasticsearch indexing and search</p>\n<p>Note: there will be occasional on-call duties.</p>\n<p>This is a 100% remote job, however we ask that candidates are located within Canada.</p>\n<p>Marketcircle Inc. is a fun and distributed tech company. We believe in the power of Kaizen, teamwork, creativity, ownership, and empathy. By embodying these core values we know we impact the lives of our customers, and each other.</p>\n<p>Our mission is to empower small business worldwide which drives us to develop a native macOS and iOS app that helps thousands create organization of what would otherwise be chaos.</p>\n<p>Tired of a long commute to work? As long as you have reliable internet, and can work between 10:00AM - 3:00PM EST (core hours), you can work from anywhere! We expect results, not monkeys sitting in cubes for 10 hours a day! Though we are mostly remote, our team tries to meet up in the office every now and again to share some laughs, build camaraderie and eat some good food! We also make it a point to do activities together, like axe throwing, escape rooms, evenings out, etc.</p>\n",
        "how_to_apply":
          '<p>Apply at the link below:\n<a href="https://jobs.lever.co/marketcircle/3bc9a100-4c99-4ac4-a118-a6cbd0fe24c7?lever-origin=applied&amp;lever-source%5B%5D=GitHub">https://jobs.lever.co/marketcircle/3bc9a100-4c99-4ac4-a118-a6cbd0fe24c7?lever-origin=applied&amp;lever-source%5B%5D=GitHub</a></p>\n',
        "company_logo":
          "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaUNLIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--64da7fa00ffcdcb20742da2284a88260ff3127fc/Screen%20Shot%202019-09-16%20at%202.04.52%20PM.png",
      },
      {
        "id": "49e73f73-6831-4b2c-8d97-19121436b93a",
        "type": "Full Time",
        "url":
          "https://jobs.github.com/positions/49e73f73-6831-4b2c-8d97-19121436b93a",
        "created_at": "Mon Sep 14 16:42:33 UTC 2020",
        "company": "Phiture",
        "company_url": "http://phiture.com/",
        "location": "Berlin",
        "title": "Backend Developer (m/f/d)",
        "description":
          "<p>Would you like to work in a consultancy that helped apps of growing tech giants such as Skyscanner, Deezer and Headspace?</p>\n<p><strong>Tasks</strong></p>\n<p>You’ll be responsible for developing and building new solutions and driving results for our clients.</p>\n<p>The role involves building the backend, server systems, cloud-based applications, application programming interfaces, and potentially also be involved in front end web architecture. The position is particularly interesting for those interested in the mobile growth and app industry.</p>\n<ul>\n<li>Develop high-performing, scalable and innovative end-to-end web applications</li>\n<li>Collaborate with Data Scientist, Marketing Manager and other Engineers to implement solutions that are aligned with and extend shared platforms and solutions</li>\n<li>Write and document code that meets standards and delivers desired functionality using the best-suited technologies, languages &amp; frameworks for the project</li>\n<li>Build features such as web services and run SQL database queries on existing tables</li>\n<li>Create and maintain server environments: administration, performance parameters, maintenance, and update cycles</li>\n<li>Work on core data structures and algorithms and implement them</li>\n<li>Ensure responsiveness and reliability of applications</li>\n<li>Stay up to date with mobile analytics for android and ios</li>\n</ul>\n<p><strong>Requirements</strong></p>\n<ul>\n<li>1+ years of experience with Mobile Development and Mobile growth (eg. built backend and/or frontend for an application, automation skills such as exporting data from websites and/or APIs).</li>\n<li>Master’s Degree in Computer Science with at least 1 year of experience as a Backend Engineer / or Bachelor Degree with 2+ years of relevant experience</li>\n<li>Proficiency in Python, Django, and Restful APIs</li>\n<li>Proficiency in LINUX, the Docker platform, and Docker swarm</li>\n<li>Proficiency in Relational Database implementation, operations, and scalability. MySQL is essential</li>\n<li>Understanding of Object-Oriented Analysis</li>\n<li>Diagnostics, debugging, and troubleshooting skills</li>\n<li>Experience with Web Services, Service-Oriented Architectures, and Mobile app development</li>\n<li>Strong organizational and project management skills</li>\n<li>Excellent verbal communication skills and good problem-solving skills</li>\n</ul>\n<p><strong>Ideally, you also have experience with:</strong></p>\n<p>Javascript, HTML, CSS</p>\n<ul>\n<li>NoSQL and relational databases (PostgreSQL, MongoDB, Oracle, etc.)</li>\n<li>Knowledge in one or more of the following languages: PHP, Ruby, Java, Typescript.</li>\n<li>Knowledge in one or more of the following web frameworks: Flask, Selenium, Rails, NodeJS</li>\n<li>Knowledge in Machine Learning and Statistics</li>\n</ul>\n<p><strong>Benefits</strong></p>\n<ul>\n<li>Share in Phiture’s success - virtual stock options and bonus scheme</li>\n<li>Udemy for Business account - and time to develop yourself</li>\n<li>Active co-creation - every opinion is important to us</li>\n<li>A structured career path - we will support you to grow your career</li>\n<li>High-end office - we all work on a daily feel-good atmosphere</li>\n<li>Steep learning curve - with us you have the opportunity to continuously learn and actively participate in knowledge sharing</li>\n<li>Flat hierarchies and short decision-making procedures - we live the well-known start-up atmosphere</li>\n<li>An absolute sense of unity - together we are aiming for the same goal</li>\n</ul>\n<p><strong>We are looking forward to your application!</strong></p>\n",
        "how_to_apply":
          '<p><a href="https://phiture.join.com/jobs/1390493-backend-developer-m-f-d?pid=357a3b4531918760973f&amp;utm_source=github_jobs&amp;utm_medium=paid&amp;utm_campaign=single%2Bposting&amp;utm_content=backend%2Bdeveloper%2Bm%2Bf%2Bd">https://phiture.join.com/jobs/1390493-backend-developer-m-f-d?pid=357a3b4531918760973f&amp;utm_source=github_jobs&amp;utm_medium=paid&amp;utm_campaign=single%2Bposting&amp;utm_content=backend%2Bdeveloper%2Bm%2Bf%2Bd</a></p>\n',
        "company_logo":
          "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdk9KIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bbd63166d6d33ee9170c58c3bbc724c05913d15e/Download%20(3).png",
      },
      {
        "id": "463cfb7f-c33b-4558-936a-9a2840365723",
        "type": "Full Time",
        "url":
          "https://jobs.github.com/positions/463cfb7f-c33b-4558-936a-9a2840365723",
        "created_at": "Fri Sep 04 20:58:53 UTC 2020",
        "company": "Very",
        "company_url": "https://www.verypossible.com",
        "location": "US- Remote",
        "title": "Senior Software Engineer - Elixir",
        "description":
          "<p>We value well-tested, reusable code and expect our engineers and data scientists to be as good of practitioners as they are leaders and teachers.</p>\n<p><strong>About This Role</strong></p>\n<p>Very is a remote-first company, meaning we don’t have a physical office, and you can work from anywhere in the continental United States. Your home,  a co-working space, on the road, you name it. If you feel like moving, you don’t have to change jobs.</p>\n<p>As a Senior Software Engineer, you will be working across multiple technologies developing data centric-solutions. This requires an interest in API engineering, DevOps, SQL and NoSQL databases, cloud infrastructure and everything in between...</p>\n<p>In this role, you will be exposed to each of the following technologies in order of importance:</p>\n<ul>\n<li>Elixir, Phoenix, and Nerves</li>\n<li>Python: Flask, Django, SciKit-Learn, Pandas</li>\n<li>Ruby on Rails</li>\n<li>Javascript, Typescript, React</li>\n<li>Mobile: iOS, Android, React Native</li>\n<li>AWS: AWS Lambda and the Serverless Framework</li>\n</ul>\n<p>We value well-tested, reusable code and expect our engineers to be as good of practitioners as they are leaders and teachers.</p>\n<p>Engineers who apply for this job should be excellent practitioners at either Python, JavaScript or Ruby, along with an interest and willingness to become proficient with all three.</p>\n<p><strong>What You’ll Be Working On</strong></p>\n<p>Very is a fully-distributed IoT engineering firm, partnering with our clients to build systems for smart manufacturing, smart energy &amp; utilities, consumer electronics, and connected wellness. Learn more at verypossible.com</p>\n<p>Currently, we have a long-running client with needs matching this specific job description, and you will be hired into this project. You’ll spend the majority of your time working on this project, and the remainder of your time can be spent improving Very. These internal contributions often include working on open source projects, building internal products, improving your craft, educating others, and more.\nUpon completion of this project, you will move on to other client projects for Very.</p>\n<p><strong>How You’ll Be Compensated</strong></p>\n<p>We believe in a transparent, fair compensation structure and have developed our own open salary formula. Depending on your skill and experience, you can expect your base compensation to be somewhere between $90,100 and $115,000 upon joining the company. We also offer performance bonuses, a generous maternity/paternity leave policy, 401K matching, and numerous other employee benefits including reimbursement for home office equipment and gym memberships.</p>\n<p>This is a full-time employment opportunity for a single individual. We’re not looking for contractors, part-time individuals, or agencies of any kind. Applicants must be located in the continental United States. Thanks!</p>\n",
        "how_to_apply":
          '<p><a href="https://jobs.lever.co/verypossible/69c85380-d87d-422b-b86c-3f36dd68238a?lever-origin=applied&amp;lever-source%5B%5D=GitHub">https://jobs.lever.co/verypossible/69c85380-d87d-422b-b86c-3f36dd68238a?lever-origin=applied&amp;lever-source%5B%5D=GitHub</a></p>\n',
        "company_logo":
          "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa21KIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--0148efbb675518755ffda9881847bbd80d9125a5/logo.png",
      },
      {
        "id": "45e3cba3-39fe-42de-9472-fd4c99748106",
        "type": "Full Time",
        "url":
          "https://jobs.github.com/positions/45e3cba3-39fe-42de-9472-fd4c99748106",
        "created_at": "Fri Sep 04 20:53:34 UTC 2020",
        "company": "Very",
        "company_url": "https://www.verypossible.com",
        "location": "US",
        "title": "Senior Software Engineer - React & React Native",
        "description":
          "<p>We value well-tested, reusable code and expect our engineers and data scientists to be as good of practitioners as they are leaders and teachers.</p>\n<p><strong>About This Role</strong></p>\n<p>Very is a remote-first company, meaning we don’t have a physical office, and you can work from anywhere in the continental United States. Your home,  a co-working space, on the road, you name it. If you feel like moving, you don’t have to change jobs.</p>\n<p>As a Senior Software Engineer, you will be working across multiple technologies developing data centric-solutions. This requires an interest in API engineering, DevOps, SQL and NoSQL databases, cloud infrastructure and everything in between...</p>\n<p>In this role, you will be exposed to each of the following technologies in order of importance:</p>\n<ul>\n<li>Javascript, Typescript, React</li>\n<li>Mobile: iOS, Android, React Native</li>\n<li>Python: Flask, Django, SciKit-Learn, Pandas</li>\n<li>Ruby on Rails</li>\n<li>Elixir, Phoenix, and Nerves</li>\n<li>AWS: AWS Lambda and the Serverless Framework</li>\n</ul>\n<p>We value well-tested, reusable code and expect our engineers to be as good of practitioners as they are leaders and teachers.</p>\n<p>Engineers who apply for this job should be excellent practitioners at both React and JavaScript along with an interest and willingness to become proficient with the React Native platform.</p>\n<p><strong>What You’ll Be Working On</strong></p>\n<p>Very is a fully-distributed IoT engineering firm, partnering with our clients to build systems for smart manufacturing, smart energy &amp; utilities, consumer electronics, and connected wellness. Learn more at verypossible.com</p>\n<p>Currently, we have a long-running client with needs matching this specific job description, and you will be hired into this project. You’ll spend the majority of your time working on this project, and the remainder of your time can be spent improving Very. These internal contributions often include working on open source projects, building internal products, improving your craft, educating others, and more.\nUpon completion of this project, you will move on to other client projects for Very.</p>\n<p><strong>How You’ll Be Compensated</strong></p>\n<p>We believe in a transparent, fair compensation structure and have developed our own open salary formula. Depending on your skill and experience, you can expect your base compensation to be somewhere between $90,100 and $109,750 upon joining the company. We also offer performance bonuses, a generous maternity/paternity leave policy, 401K matching, and numerous other employee benefits including reimbursement for home office equipment and gym memberships.</p>\n<p>This is a full-time employment opportunity for a single individual. We’re not looking for contractors, part-time individuals, or agencies of any kind. Applicants must be located in the continental United States. Thanks!</p>\n",
        "how_to_apply":
          '<p>Apply here! <a href="https://jobs.lever.co/verypossible/703e5301-4afc-466f-a411-ba2189eddafa?lever-origin=applied&amp;lever-source%5B%5D=GitHub">https://jobs.lever.co/verypossible/703e5301-4afc-466f-a411-ba2189eddafa?lever-origin=applied&amp;lever-source%5B%5D=GitHub</a></p>\n',
        "company_logo":
          "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa2lKIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--28a46d5696597fee529a52a3b2427966b4923e8a/logo.png",
      },
      {
        "id": "9511ee69-6ab5-4a98-86cf-d29d1fb2ff83",
        "type": "Full Time",
        "url":
          "https://jobs.github.com/positions/9511ee69-6ab5-4a98-86cf-d29d1fb2ff83",
        "created_at": "Tue Aug 04 16:21:07 UTC 2020",
        "company": "Sticker Mule",
        "company_url": "https://www.stickermule.com/careers",
        "location": "Anywhere",
        "title": "Site Reliability Engineer",
        "description":
          '<p><strong>About Sticker Mule</strong></p>\n<p>Sticker Mule is the Internet\'s most "kick ass" brand. We are privately-owned, profitable, and powered by a  globally distributed team who cares deeply about delivering a great customer experience at the highest technical standards. Our software team operates from 17 different countries, and we\'re always looking for more exceptional engineers.</p>\n<p>The SRE team is responsible for the reliability and performance of our cloud infrastructure, the continuous integration and delivery pipelines, and the development tools used to build our services.</p>\n<p><strong><a href="https://www.stickermule.com/about">See more about our teams here</a></strong></p>\n<p><strong>We offer</strong></p>\n<ol>\n<li>Remote work with flexible schedules</li>\n<li>Varied, interesting technical challenges to solve</li>\n<li>A fun "no bullshit" work environment</li>\n</ol>\n<p><strong>We like you to know</strong></p>\n<ol>\n<li>Linux</li>\n<li>Docker</li>\n<li>Kubernetes</li>\n<li>GCP/AWS</li>\n<li>Postgres</li>\n<li>MySQL</li>\n<li>Redis</li>\n<li>Go</li>\n<li>Familiarity with Ruby/JS/Python</li>\n<li>Availability for on-call schedule</li>\n<li>Excellent communication skills (English)</li>\n<li>Degree in Computer Science or equivalent practical experience</li>\n</ol>\n<p><strong>Challenges</strong></p>\n<ol>\n<li>Maintain services availability during unpredictable traffic spikes</li>\n<li>Improve tooling for our growing set of front-ends and back-ends</li>\n<li>Guide software engineers on operational and security best practices</li>\n</ol>\n<p><strong>Compensation and benefits</strong></p>\n<ol>\n<li>$99,000-$135,000+</li>\n<li>$10,000 signing bonus</li>\n<li>4 weeks vacation</li>\n</ol>\n',
        "how_to_apply":
          '<p><strong>Apply here only:</strong> <a href="https://www.stickermule.com/career/da8cef1b-b9fa-45c5-9e9d-a3c975e0aca2">https://www.stickermule.com/career/da8cef1b-b9fa-45c5-9e9d-a3c975e0aca2</a></p>\n',
        "company_logo":
          "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb3FIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--65d9aab4ef72c61e9d66a644f2a61ee29ee71924/herman%206.jpg",
      },
      {
        "id": "421871bb-05d3-4fbe-b00c-3f372fa35584",
        "type": "Full Time",
        "url":
          "https://jobs.github.com/positions/421871bb-05d3-4fbe-b00c-3f372fa35584",
        "created_at": "Tue Aug 04 17:23:12 UTC 2020",
        "company": "Sticker Mule",
        "company_url": "https://www.stickermule.com/careers",
        "location": "Anywhere",
        "title": "Javascript Engineer",
        "description":
          '<p><strong>About Sticker Mule</strong></p>\n<p>Sticker Mule is the Internet\'s most "kick ass" brand. We are privately-owned, profitable, and powered by a  globally distributed team who cares deeply about delivering a great customer experience at the highest technical standards. Our software team operates from 17 countries, and we\'re always looking for more exceptional engineers.</p>\n<p>The Software team is responsible for building and maintaining our front-end and back-end services, developing new features and products, and troubleshooting problems.</p>\n<p><strong><a href="https://www.stickermule.com/about">See more about our teams here</a></strong></p>\n<p><strong>We offer</strong></p>\n<ol>\n<li>Remote work with flexible schedules</li>\n<li>Varied, interesting technical challenges to solve</li>\n<li>A fun "no bullshit" work environment</li>\n</ol>\n<p><strong>We like you to know</strong></p>\n<ol>\n<li>Docker</li>\n<li>NextJS</li>\n<li>React</li>\n<li>NodeJS</li>\n<li>GraphQL</li>\n<li>Postgres</li>\n<li>Redis</li>\n<li>Familiarity with Ruby</li>\n<li>Excellent communication skills (English)</li>\n<li>Degree in Computer Science or equivalent practical experience</li>\n</ol>\n<p><strong>Challenges</strong></p>\n<ol>\n<li>Improve and expand our React shared components gallery</li>\n<li>Migrate a large Rails code base to JavaScript from front-ends and back-ends</li>\n<li>Maintain optimal front-end performance on desktop and mobile</li>\n</ol>\n<p><strong>Compensation and benefits</strong></p>\n<ol>\n<li>$99,000-$135,000+</li>\n<li>$10,000 signing bonus</li>\n<li>4 weeks vacation</li>\n</ol>\n',
        "how_to_apply":
          '<p><strong>Apply here only:</strong> <a href="https://www.stickermule.com/career/7e6bb5ee-9953-4d46-b008-77a3bbc4ee29">https://www.stickermule.com/career/7e6bb5ee-9953-4d46-b008-77a3bbc4ee29</a></p>\n',
        "company_logo":
          "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb3VIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--04344d944b21465d33ecd7bd62098692640a8658/herman%206.jpg",
      },
      {
        "id": "15a4d84d-d856-4bab-a079-f2fe407ae494",
        "type": "Full Time",
        "url":
          "https://jobs.github.com/positions/15a4d84d-d856-4bab-a079-f2fe407ae494",
        "created_at": "Thu Sep 03 20:04:04 UTC 2020",
        "company": "CitizenLab",
        "company_url": "http://www.citizenlab.co",
        "location": "Brussels",
        "title": "Senior Full-Stack Engineer",
        "description":
          "<p>Do you want to help shape local democracies for the digital age? Are you looking for an international and fast-paced yet collaborative environment to thrive in?</p>\n<p>You have come to the right place.</p>\n<p>CitizenLab is a Brussels-based social impact scale-up that aims to improve democracy for the digital era. The SaaS platform is already being used by 125 cities and municipalities in 8 different countries, facilitating two-way communication between local governments and its citizens. Since it was founded in 2015, CitizenLab gave 250.000 citizens a direct voice in local politics and got recognized as 'Best Social Impact Startup in Europe'. After recently having raised a significant funding round, CitizenLab is looking for mission-driven talent to join on its mission to have 2,5 million citizens actively participate via its e-democracy platforms in cities all over the world.</p>\n<h2>Full-Stack Engineer at CitizenLab</h2>\n<p>As a Full-Stack Engineer in our Engagement squad, you focus on the core product which allows local governments to engage their citizens through a wide range of digital participation methods. You’ll work both on our back-end APIs, which are mostly written in Ruby, and our front-ends, which are mostly written in React and TypeScript. Ideally, you know both stacks, but you are at least proficient in React and are experienced with a similar framework like Ruby on Rails for the other.</p>\n<p>As someone with the overview, you’ll help front-end developers understand the back-end challenges and vice versa. You’re always helping to smooth out the unknowns between both worlds.</p>\n<p>At CitizenLab, we work in small teams where members collectively take ownership of the outcome of the features they build. Engineers don’t merely implement specifications, but are empowered to come up with solutions, in close collaboration with their peers and with direct exposure to the end user. We work in very small iterations and release continuously. We’re strong believers in automated testing and code reviews. We automate as much as we can.</p>\n<h2>What do we expect from you?</h2>\n<ul>\n<li>You have multiple years of experience in building end-to-end web applications.</li>\n<li>You’re experienced in React, preferably with Typescript.</li>\n<li>You have worked with Ruby and Ruby on Rails before.</li>\n<li>You like to think along and collaborate on the solution, not just on the implementation.</li>\n<li>You know how to implement a modern user interface.</li>\n<li>You know how to implement a sound API.</li>\n<li>You’re an excellent communicator and are effective in bridging knowledge gaps between front-end and back-end engineers.</li>\n</ul>\n<h2>What can you expect from us?</h2>\n<ul>\n<li>Unlock your full potential and have an impact at scale. We're daily working with +125 governments to connect them to their citizens.</li>\n<li>Have the opportunity to explore new technologies, as we're currently doing with Elixir.</li>\n<li>Become a key factor in our rapid transition from startup (15 employees) to scaleup (35 employees).</li>\n<li>Work in a fast-paced, collaborative and supportive environment—right in the heart of Brussels.</li>\n<li>Be part of our dynamic international team. We organise many team activities and go for lots of spontaneous after-works... which inevitably turn into political discussions after two beers—that's an interest we all share. :)</li>\n<li>Informal work vibe with open communication and full transparency on results.</li>\n<li>Participate in inspiring team lunches, bi-quarterly strategic town halls, bi-yearly off-site team retreats.</li>\n<li>Receive a competitive salary package, incl. perks such as 26 paid holidays, your own laptop, flexibility on working from home, and more.</li>\n</ul>\n<p>CitizenLab is committed to being a diverse and inclusive workplace. We encourage applicants of different backgrounds, cultures, genders, experiences, abilities and perspectives to apply.</p>\n",
        "how_to_apply":
          '<p><a href="https://jobs.citizenlab.co/o/senior-fullstack-engineer">https://jobs.citizenlab.co/o/senior-fullstack-engineer</a></p>\n',
        "company_logo":
          "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBajZKIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--2005f95794f7c9af33f63b57e4f24a5bb90dbbf5/Logo%20Colour%20-%20Positive.png",
      },
      {
        "id": "f1cbc178-dafd-4b40-ae24-d7bd061ee9bf",
        "type": "Part Time",
        "url":
          "https://jobs.github.com/positions/f1cbc178-dafd-4b40-ae24-d7bd061ee9bf",
        "created_at": "Tue Sep 01 14:01:03 UTC 2020",
        "company": "Integrated Eco Strategy",
        "company_url": "http:",
        "location": "North Adams, MA (REMOTE AVAILABLE)",
        "title": "React Software Developer Position",
        "description":
          '<p>Are you ready to join a growing team where you can make a global difference?\nWorking at Integrated Eco Strategy (IES, ​MateriallyBetter.com​) is about more than creating world-class software and helping our clients build better buildings; ​it’s about creating positive changes to the environmental and social impact of the places in which we live and work. At the end of the day, you are contributing to making the world a better place! IES is ​a national leader in providing client-focused, high-value services relating to the Living Building Challenge and sustainability in the building industry. The position of Software Developer will support the evolution of Red2GreenTM​ , our platform that allows project teams of architects/designers, materials researchers, and contractors to more efficiently manage their healthier building projects. We now seek to scale up, rebuilding the platform to support more large projects while welcoming all projects, large and small, to the movement.\nIn addition to bringing your skills as a React developer, you will have an influence on a range of priorities, including database administration, feature design, end user training, application support, and troubleshooting. We need a skilled, personable, ethical, and motivated developer who can work with our current team and our outside consultants to port the existing application to a modern, scalable stack.\nRemote work is available for the right candidate. We offer a minimum of 20 hours/week to start with a path toward full-time as we scale.\n​Responsibilities:\nRebuild our Filemaker Pro application, Red2Green, using React and Ruby On Rails and other languages and tools\nWrite, review, and maintain code (primarily in React) in coordination with both internal and external developers\nBuild efficient and reusable front-end components\nDeliver with Agile process using CI/CD pipelines\nUnderstand, debug and create proof of concepts\nCoordinate with product, design, and support teams to triage and resolve production\nissuesImprove the scalability and performance of our platform\nDesign, develop, test, deploy, maintain and improve software</p>\n<p>Minimum qualifications:\nBS degree in Computer Science, similar technical field of study or equivalent practical experience\nProgramming experience with React, Typescript and GraphQL. Ruby on Rails experience is a bonus\nExperience contributing to the architecture and design (architecture, design patterns, reliability and scaling) of new and current systems\n2+ years of professional software development experience\n1+ year experience running services on Linux\nPreferred qualifications:\nMaster’s in Computer Science\nDemonstrated ability to communicate business and technical ideas to varied\naudiences including customers, peer engineers, and senior leadership\nStrong ownership, urgency, and drive to launch services\n5+ years of professional software development experience\nOur location provides quality of life that fully complements the position--in the beautiful Berkshire hills of western Massachusetts. Our region features diverse year-round recreational opportunities, offers affordable living costs and is home to 60 world class arts, music and cultural venues.\nIf this position describes your talents and experience, and you know that you can help foster the success of our growing company, then we want to hear from you! Please send your resume and cover letter telling us why you’re the best candidate for this position to: <a href="mailto:Info@MateriallyBetter.com">Info@MateriallyBetter.com</a>.</p>\n<p>EOE\nLocal Candidates Strongly Preferred\nNo Phone Calls or Third-Party Recruiters, Please.\n<a href="http://www.MateriallyBetter.com">www.MateriallyBetter.com</a></p>\n<p>Disclaimer:​ Integrated Eco Strategy does not accept unsolicited assistance from search firms / employment agencies / third-party recruiters for any of its employment opportunities. Please, no phone calls or emails to any employee of Integrated Eco Strategy about this opening. All resumes submitted by search firms / employment agencies / third-party recruiters to any employee at Integrated Eco Strategy via-email, the Internet or in any form and/or method without a valid written search firm agreement in place for this position will be deemed the sole property of Integrated Eco Strategy; no fee will be paid in the event a candidate is hired by Integrated Eco Strategy as a result of the unsolicited referral or through other means.</p>\n',
        "how_to_apply":
          '<p>Please send your resume and cover letter telling us why you’re the best candidate for this position to: <a href="mailto:Info@MateriallyBetter.com">Info@MateriallyBetter.com</a> and include the term "React Developer" in the subject.</p>\n',
        "company_logo":
          "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdnFJIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--48f5ecb32216103725348640434414d454f286c6/R2G_Stacked_full%20(1).jpg",
      },
      {
        "id": "03c36894-3719-4bee-827b-2925991e723a",
        "type": "Full Time",
        "url":
          "https://jobs.github.com/positions/03c36894-3719-4bee-827b-2925991e723a",
        "created_at": "Tue Sep 01 15:11:29 UTC 2020",
        "company": "Nylas",
        "company_url": "https://www.nylas.com/",
        "location": "Amsterdam, Netherlands",
        "title": "Support Engineer",
        "description":
          "<p>At Nylas, our mission is to empower the world to communicate with context and insight. Our hosted sync platform and APIs enable developers to quickly integrate their apps with email, contacts, and calendar across all providers(including Exchange). Customers like Pipedrive, Salesloft, and Lever use our cloud messaging APIs to power their products and accelerate their ability to innovate.</p>\n<p>Nylas is looking for an intelligent, diligent, and results-driven individual to join us as we expand our customer support team to Europe.</p>\n<p>Hundreds of businesses rely on the Nylas Cloud APIs to power their products, and your role will be critical in ensuring their sustained growth and success. You'll work with startup leaders and top technical talent within our industry to help them build robust applications using Nylas APIs. You’ll also help recognize and prioritize trends in customer issues and implement processes and automations that fix them. As you develop deep technical understanding of our infrastructure, you will help get new customers up and running on our platform and help existing ones resolve issues.</p>\n<p>You should have strong technical aptitude, experience providing empathetic customer-facing support, and the demonstrated ability to work collaboratively.</p>\n<p><strong>Responsibilities</strong></p>\n<ul>\n<li>Help customers solve technical problems and answer questions about product capabilities</li>\n<li>Lead customer conversations as a technical expert, where your knowledge and expertise of the Nylas Cloud APIs will allow you to guide implementation and onboard customers</li>\n<li>Manage customer support tickets and provide regular updates to open tickets</li>\n<li>Develop customer-facing documentation and integration guides</li>\n<li>Collaborate closely with various teams including engineering(provide feedback, file and fix bugs), go-to-market(respond quickly to high priority issues, talk to prospects), and product(provide roadmap feedback)</li>\n<li>Develop technical messaging and platform architecture documentation describing the Nylas Cloud APIs</li>\n</ul>\n<p><strong>Qualifications</strong></p>\n<ul>\n<li>You've provided technical product support(preferably for SaaS)</li>\n<li>You have demonstrated experience working on technical issues, troubleshooting bugs, and communicating with engineers</li>\n<li>You've written and debugged some code(especially Python, Ruby, or JavaScript)</li>\n<li>You've used APIs to build applications and/or query data</li>\n<li>You can thrive in a fast-paced environment with lots of autonomy</li>\n<li>You are detail-oriented and have great verbal and written communication skills</li>\n<li>You have deep empathy towards technical and non-technical users and thrive on making customers feel empowered</li>\n<li>You love solving puzzles and learning new tools and approaches to do so</li>\n</ul>\n<p>BONUS POINTS if:</p>\n<ul>\n<li>you have experience working with major communications provider APIs(email, phone, text, etc.)</li>\n<li>you have experience with email server administration(e.g. Microsoft, Google, etc.)</li>\n</ul>\n",
        "how_to_apply":
          '<p>Please submit your application here on Lever: <a href="https://jobs.lever.co/nylas/58256b4b-f9fd-4874-8368-c0f1092fa124">https://jobs.lever.co/nylas/58256b4b-f9fd-4874-8368-c0f1092fa124</a></p>\n',
        "company_logo":
          "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdnlJIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--698ee50d2aebceeb3436d40534658a3cfab70b47/e3ec22f8-ced2-464b-a9f6-590e02ea5a42-1565029162818.png",
      },
    ];
    setJobs(data);
  }, [search, location, fulltime]);

  // useEffect(() => {
  //   setFullTime(false);
  // }, [jobs]);

  const onChangeFullTime = () => {
    setFullTime((value) => !value);
  };

  const onTickLocation = (event) => {
    setLocation(event.target.value);
  };

  // const pageBound = 5;
  const start = itemsPerPage * (currentPage - 1);
  const end = itemsPerPage * currentPage;

  const pageJobs =
    jobs?.length > 0 ? jobs.slice(start, Math.min(end, jobs.length)) : [];

  return (
    <div className="flex flex-col p-3 sm:px-32 sm:py-0">
      <SearchForm setSearch={setSearch} />

      <div className="sm:flex sm:flex-row ">
        <SelectForm
          fulltime={fulltime}
          onChangeFullTime={onChangeFullTime}
          location={location}
          setLocation={setLocation}
          onTickLocation={onTickLocation}
        />
        <div className="sm:w-3/4 mb-2">
          {pageJobs && pageJobs.length > 0 ? (
            pageJobs?.map((job) => <Job job={job} key={job.id} />)
          ) : (
            <p className="font-medium shadow-sm mt-6 sm:mt-10">
              There is no jobs to show based in your search query
            </p>
          )}

          {jobs?.length > 0 && (
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              numberOfItems={numberOfItems}
              numberOfButtons={numberOfButtons}
              itemsPerPage={itemsPerPage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
